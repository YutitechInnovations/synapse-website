"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { adminLogin } from "@/services/auth";
import { authenticate } from "@/network/helper";
import toast from "react-hot-toast";
import Loader from "@/components/loader";
import Cookies from "js-cookie";

export default function AdminLogin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!email.trim()) {
      setError("Please enter your email");
      toast.error("Please enter your email");
      return;
    }

    if (!password.trim()) {
      setError("Please enter your password");
      toast.error("Please enter your password");
      return;
    }

    setError(""); // Clear errors
    setLoading(true);

    try {
      // Call API
      const response = await adminLogin({ username: email, password });

      // Clear old cookies before authentication
      Cookies.remove("user");
      Cookies.remove("token");

      // Authenticate user (set cookie/localStorage)
      await authenticate(response, () => {
        toast.success(response.message || "Login successful!");
        router.push("/admin/dashboard");
      });
    } catch (err) {
      console.error("Admin login error:", err);
      toast.error(err?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center px-4 min-h-screen bg-[#F8FAF9]">
      {loading && <Loader />}
      <h1 className="text-3xl md:text-4xl font-bold text-center text-[#195B48] mt-8 mb-2">
        Admin Login
      </h1>
      <p className="text-base md:text-lg font-normal text-center text-[#195B48] mb-8">
        Access your Synapse admin dashboard
      </p>
      <div className="w-full max-w-md bg-white border border-[#195B48]/30 rounded-xl p-8 md:p-10 flex flex-col items-center shadow-sm">
        <h2 className="text-xl md:text-2xl font-semibold text-[#195B48] mb-1 w-full text-left">
          Admin Email
        </h2>
        <p className="text-base font-normal text-[#195B48] mb-6 w-full text-left">
          Enter your admin credentials to access the dashboard
        </p>
        <form onSubmit={handleSubmit} className="w-full">
          <div className="mb-6">
            <label className="frm-label" htmlFor="email">
              Email
            </label>
            <input
              className="w-full frm-input focus:outline-none"
              type="text"
              id="email"
              placeholder="admin@synapse.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="frm-label" htmlFor="password">
              Password
            </label>
            <input
              className="w-full frm-input focus:outline-none"
              type="password"
              id="password"
              placeholder="Enter your password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <div className="text-red-600 text-sm mb-2">{error}</div>}
          <button
            className="w-full bg-[#195B48] text-white font-semibold rounded-md py-2.5 text-base mt-2 mb-2 hover:bg-[#174a3a] transition-colors"
            type="submit"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

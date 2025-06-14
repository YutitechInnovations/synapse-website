"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const AdminForgotPasswordForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Frontend validation
    if (!email.trim()) {
      setError("Please enter your email");
      return;
    }

    setError("");

    try {
      setLoading(true);
      const response = await fetch(
        " https://synapsehealthtech.in/api/admin/admin_forgot_password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      // First check if the response is ok
      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        throw new Error(
          errorData?.message || `HTTP error! status: ${response.status}`
        );
      }

      // Try to parse the response as JSON
      const data = await response.json().catch(() => null);

      if (data) {
        toast.success(
          data.message || "Password reset email sent successfully!"
        );
        router.push("/admin");
      } else {
        throw new Error("Invalid response from server");
      }
    } catch (err) {
      console.error("Admin forgot password error:", err);
      toast.error(err.message || "Failed to send reset email");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center px-4 min-h-screen bg-[#F8FAF9]">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-[#195B48] mt-8 mb-2">
        Admin Forgot Password
      </h1>
      <p className="text-base md:text-lg font-normal text-center text-[#195B48] mb-8">
        Enter your admin email to reset your password
      </p>
      <div className="w-full max-w-md bg-white border border-[#195B48]/30 rounded-xl p-8 md:p-10 flex flex-col items-center shadow-sm">
        <h2 className="text-xl md:text-2xl font-semibold text-[#195B48] mb-1 w-full text-left">
          Reset Admin Password
        </h2>
        <p className="text-base font-normal text-[#195B48] mb-6 w-full text-left">
          We&apos;ll send you an email with instructions to set your admin
          password
        </p>

        <form onSubmit={handleSubmit} className="w-full">
          <div className="mb-6">
            <label className="frm-label" htmlFor="email">
              Admin Email
            </label>
            <input
              className="w-full frm-input focus:outline-none"
              type="email"
              id="email"
              placeholder="admin@synapse.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {error && <div className="text-red-600 text-sm mb-2">{error}</div>}
          <button
            className="w-full bg-[#195B48] text-white font-semibold rounded-md py-2.5 text-base mt-2 mb-2 hover:bg-[#174a3a] transition-colors"
            type="submit"
          >
            Send Email
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminForgotPasswordForm;

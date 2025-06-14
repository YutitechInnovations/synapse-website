"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import ClientOnly from "../../../components/ClientOnly";
import Navbar from "../../../components/navbar/Navbar";
import Loader from "../../../components/loader";

export default function ForgotPasswordPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setError("Please enter your email");
      return;
    }

    setError("");

    try {
      setLoading(true);
      const response = await fetch(
        "https://synapsehealthtech.in/api/user/forgot_password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        throw new Error(
          errorData?.message || `HTTP error! status: ${response.status}`
        );
      }

      const data = await response.json().catch(() => null);

      if (data) {
        toast.success(
          data.message || "Password reset email sent successfully!"
        );
        router.push("/login");
      } else {
        throw new Error("Invalid response from server");
      }
    } catch (err) {
      console.error("Forgot password error:", err);
      toast.error(err.message || "Failed to send reset email");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid w-full">
      <ClientOnly>
        <Navbar />
        <main className="flex items-center justify-center pt-56 pb-[100px] px-4 w-full">
          <div className="w-full max-w-md bg-red border border-[#195B48]/30 rounded-xl p-6 md:p-8 flex flex-col items-center shadow-sm">
            {loading && <Loader />}
            <h2 className="text-xl md:text-2xl font-semibold text-[#195B48] mb-1 w-full text-left">
              Forgot Password
            </h2>
            <p className="text-sm text-[#195B48] mb-4 w-full text-left">
              We&apos;ll send you an email with instructions to set your
              password
            </p>

            <form onSubmit={handleSubmit} className="w-full">
              <div className="mb-6">
                <label className="frm-label" htmlFor="email">
                  Email
                </label>
                <input
                  className="w-full frm-input focus:outline-none"
                  type="email"
                  id="email"
                  placeholder="example@synapse.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              {error && (
                <div className="text-red-600 text-sm mb-2">{error}</div>
              )}
              <button
                className="w-full bg-[#195B48] text-white font-semibold rounded-md py-2.5 text-base mt-2 mb-2 hover:bg-[#174a3a] transition-colors"
                type="submit"
              >
                Send Email
              </button>
            </form>
          </div>
        </main>
      </ClientOnly>
    </div>
  );
}

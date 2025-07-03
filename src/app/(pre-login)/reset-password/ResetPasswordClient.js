"use client";
import { useState, useRef, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import instance from "../../../network/index.js";
import Navbar from "../../../components/Navbar/Navbar.js";
import ClientOnly from "../../../components/ClientOnly.js";
import toast from "react-hot-toast";

export default function ResetPasswordClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const redirectTimeout = useRef();

  useEffect(() => {
    return () => {
      if (redirectTimeout.current) clearTimeout(redirectTimeout.current);
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    if (!password || !confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    if (!token) {
      setError("Invalid or missing token.");
      return;
    }
    setLoading(true);
    try {
      const res = await instance.post("/user/set_password", { password, token });
      if (res.data && res.data.success) {
        setSuccess("Password reset successful! Redirecting to login...");
        toast.success("Password reset successful! Redirecting to login...");
        redirectTimeout.current = setTimeout(() => {
          router.push("/login");
        }, 2000);
      } else {
        setError(res.data?.message || "Failed to reset password. Please try again.");
        toast.error(res.data?.message || "Failed to reset password. Please try again.");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Failed to reset password. Please try again.");
      toast.error(err.response?.data?.message || "Failed to reset password. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid w-full font-poppins bg-[var(--background)] min-h-screen">
      <ClientOnly>
        <Navbar />
      </ClientOnly>
      <main className="flex items-center justify-center pt-20 pb-10 px-2 sm:pt-32 sm:pb-20 sm:px-4">
        <div
          className="w-full max-w-md bg-white border border-gray-300 rounded-2xl shadow-md p-6 sm:p-8"
          style={{ boxSizing: 'border-box' }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-center" style={{fontFamily: 'Poppins, sans-serif'}}>Reset Password</h2>
          <p className="text-base sm:text-lg text-center mb-6 text-[var(--text-primary)]" style={{fontFamily: 'Poppins, sans-serif'}}>Enter your new password below.</p>
          {error && !success && <div className="mb-4 text-red-600 text-center">{error}</div>}
          {success && <div className="mb-4 text-green-600 text-center">{success}</div>}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="frm-label block mb-1">New Password</label>
              <input
                type="password"
                className="frm-input w-full text-base sm:text-lg"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                minLength={8}
                required
                disabled={loading}
                placeholder="Enter new password"
                style={{fontFamily: 'Poppins, sans-serif'}}
              />
            </div>
            <div className="mb-6">
              <label className="frm-label block mb-1">Confirm New Password</label>
              <input
                type="password"
                className="frm-input w-full text-base sm:text-lg"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                minLength={8}
                required
                disabled={loading}
                placeholder="Confirm new password"
                style={{fontFamily: 'Poppins, sans-serif'}}
              />
            </div>
            <button
              type="submit"
              className="w-full cmnbtn font-bold text-base sm:text-lg"
              style={{ backgroundColor: '#004C44', color: '#fff', fontFamily: 'Poppins, sans-serif', height: '48px' }}
              disabled={loading}
            >
              {loading ? "Resetting..." : "Reset Password"}
            </button>
          </form>
        </div>
      </main>
      <style jsx global>{`
        @media (max-width: 640px) {
          .max-w-md { max-width: 95vw !important; }
          .p-6 { padding: 1.25rem !important; }
        }
        @media (max-width: 400px) {
          .max-w-md { max-width: 99vw !important; }
          .p-6 { padding: 0.75rem !important; }
        }
      `}</style>
    </div>
  );
} 
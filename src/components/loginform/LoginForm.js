"use client";
import Link from "next/link.js";
import { useState } from "react";
import { useRouter } from "next/navigation";

import toast from "react-hot-toast";
import { doctorLogin } from "@/services/auth";
import { authenticate } from "@/network/helper";
import Loader from "../loader";

const LoginForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setFormError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Frontend validation
    if (!email.trim()) {
      setFormError("Please enter your email");
      return;
    }

    if (!password.trim()) {
      setFormError("Please enter your password");
      return;
    }

    setFormError("");

    try {
      setLoading(true);
      const response = await doctorLogin({ email, password });

      // Call authenticate and pass a next callback
      await authenticate(response, () => {
        toast.success(response.message || "Login successful!");
        router.push("/home");
      });
    } catch (err) {
      // Toast already handled inside login()
      console.error("Login error", err);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center px-4">
      {loading && <Loader />}
      <h1 className="text-3xl md:text-4xl font-bold text-center text-[#195B48]">
        Enter your Email Id
      </h1>
      <p className="text-base md:text-lg font-normal text-center text-[#195B48] mb-6">
        Access your Synapse dashboard and tools
      </p>
      <div className="w-full max-w-md bg-white border border-[#195B48]/30 rounded-xl p-6 md:p-6 flex flex-col items-center shadow-sm">
        <h2 className="text-xl md:text-2xl font-semibold text-[#195B48] mb-1 w-full text-left">
          Enter your Email Id
        </h2>
        <p className="text-base font-normal text-[#195B48] mb-6 w-full text-left">
          Enter your credentials to access your account
        </p>
        <form onSubmit={handleSubmit} className="w-full">
          <div className="mb-1">
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
          <div>
            <label className="frm-label" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <input
                className="w-full frm-input focus:outline-none"
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Enter your password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {showPassword ? (
                <svg
                  onClick={() => setShowPassword(false)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="#143607"
                  viewBox="0 0 256 256"
                >
                  <path
                    d="M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Zm0,112a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z"
                    opacity="0.2"
                  ></path>
                  <path d="M247.31,124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57,61.26,162.88,48,128,48S61.43,61.26,36.34,86.35C17.51,105.18,9,124,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208s66.57-13.26,91.66-38.34c18.83-18.83,27.3-37.61,27.65-38.4A8,8,0,0,0,247.31,124.76ZM128,192c-30.78,0-57.67-11.19-79.93-33.25A133.47,133.47,0,0,1,25,128,133.33,133.33,0,0,1,48.07,97.25C70.33,75.19,97.22,64,128,64s57.67,11.19,79.93,33.25A133.46,133.46,0,0,1,231.05,128C223.84,141.46,192.43,192,128,192Zm0-112a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z"></path>
                </svg>
              ) : (
                <svg
                  onClick={() => setShowPassword(true)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="#143607"
                  viewBox="0 0 256 256"
                >
                  <path
                    d="M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Zm0,112a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z"
                    opacity="0.2"
                  ></path>
                  <path d="M53.92,34.62A8,8,0,1,0,42.08,45.38L61.32,66.55C25,88.84,9.38,123.2,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208a127.11,127.11,0,0,0,52.07-10.83l22,24.21a8,8,0,1,0,11.84-10.76Zm47.33,75.84,41.67,45.85a32,32,0,0,1-41.67-45.85ZM128,192c-30.78,0-57.67-11.19-79.93-33.25A133.16,133.16,0,0,1,25,128c4.69-8.79,19.66-33.39,47.35-49.38l18,19.75a48,48,0,0,0,63.66,70l14.73,16.2A112,112,0,0,1,128,192Zm6-95.43a8,8,0,0,1,3-15.72,48.16,48.16,0,0,1,38.77,42.64,8,8,0,0,1-7.22,8.71,6.39,6.39,0,0,1-.75,0,8,8,0,0,1-8-7.26A32.09,32.09,0,0,0,134,96.57Zm113.28,34.69c-.42.94-10.55,23.37-33.36,43.8a8,8,0,1,1-10.67-11.92A132.77,132.77,0,0,0,231.05,128a133.15,133.15,0,0,0-23.12-30.77C185.67,75.19,158.78,64,128,64a118.37,118.37,0,0,0-19.36,1.57A8,8,0,1,1,106,49.79,134,134,0,0,1,128,48c34.88,0,66.57,13.26,91.66,38.35,18.83,18.83,27.3,37.62,27.65,38.41A8,8,0,0,1,247.31,131.26Z"></path>
                </svg>
              )}
            </div>
          </div>
          <div className="w-full text-right mb-1">
            <Link
              href="/forgot-password"
              className="text-[#195B48] hover:underline text-sm"
            >
              Forgot Password?
            </Link>
          </div>
          {error && <div className="text-red-600 text-sm mb-2">{error}</div>}
          <button
            className="w-full bg-[#195B48] text-white font-semibold rounded-md py-2.5 text-base mt-2 mb-2 hover:bg-[#174a3a] transition-colors"
            type="submit"
          >
            Sign In
          </button>
        </form>
        <div className="flex flex-col sm:flex-row items-center justify-between mt-1 w-full">
          <p className="font-semibold text-[15px] text-[#195B48] text-center sm:text-left mb-2 sm:mb-0">
            Don&apos;t have an account?
          </p>
          <Link
            href="/signup"
            className="font-semibold text-[15px] text-[#195B48] hover:underline"
          >
            Register here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;

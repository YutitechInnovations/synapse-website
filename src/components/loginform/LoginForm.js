"use client";
import Link from "next/link.js";
import { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('mockUsers') || '[]');
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      localStorage.setItem('mockLoggedIn', 'true');
      window.location.href = "/";
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center px-4">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center">Sign In to your account</h1>
      <p className="text-base font-normal mt-2 mb-4 text-center">
        Access your Synapse dashboard and tools
      </p>
      <div className="card flex-col w-full max-w-md">
        <h2 className="text-xl md:text-2xl font-semibold">Login</h2>
        <p className="text-base font-normal mb-6">
          Enter your credentials to access your account
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="frm-label" htmlFor="email">
              Email
            </label>
            <input
              className="w-full frm-input focus:outline-none "
              type="email"
              id="email"
              placeholder="example@synapse.com"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <label className="frm-label" htmlFor="password">
              Password
            </label>
            <input
              className="w-full frm-input focus:outline-none "
              type="password"
              id="password"
              placeholder="● ● ● ● ● ● ● ●"
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <div className="text-right">
              <Link href="#" className=" text-sm hover:underline">
                Forgot your password?
              </Link>
            </div>
          </div>

          {error && <div className="text-red-600 text-sm mb-2">{error}</div>}

          <button className="btn-primary cmnbtn w-full" type="submit">
            Login
          </button>
        </form>
        <div className="flex flex-col sm:flex-row items-center justify-between mt-6 gap-2">
          <p className="font-semibold text-base text-center sm:text-left">Don&apos;t have an account? </p>
          <Link
            href="/signup"
            className="font-semibold text-[15px] hover:underline"
          >
            Register here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;

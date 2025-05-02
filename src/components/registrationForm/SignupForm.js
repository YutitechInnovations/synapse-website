"use client";
import Link from "next/link.js";
import { use, useEffect, useState } from "react";

const SignupForm = () => {
  const [data, setData] = useState({
    name: "",
    mobile: "",
    email: "",
    registrationNumber: "",
  });

  const [isSubmited, setIsSubmited] = useState(false);
  const [isApproved, setIsApproved] = useState(true);
  const [passwordSection, setPasswordSection] = useState(false);
  const [resetPasswordData, setResetPasswordData] = useState({
    email: "",
    password: "",
    rePassword: "",
  });
  const [disablePassword, setDisablePassword] = useState(true);

  useEffect(() => {
    // Check if the password and rePassword fields are not empty
    // and if they are not equal, set disablePassword to true
    // Otherwise, set it to false
    // This will disable the button if the passwords do not match

    if (resetPasswordData.email != "") {
      setPasswordSection(true);
    } else {
      setPasswordSection(false);
    }

    if (
      resetPasswordData.password != "" &&
      resetPasswordData.rePassword != "" &&
      resetPasswordData.password !== resetPasswordData.rePassword
    ) {
      setDisablePassword(true);
    } else {
      setDisablePassword(false);
    }
  }, [resetPasswordData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmited(true);
    // Handle form submission logic here
  };

  return (
    <div className="w-full flex flex-col items-center justify-center px-4">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center">Sign Up to your account</h1>
      <p className="text-base font-normal mt-2 mb-4 text-center">
        Access your Synapse dashboard and tools
      </p>
      {!isSubmited && (
        <div className="card flex-col w-full max-w-md">
          <h2 className="text-xl md:text-2xl font-semibold">Register</h2>
          <p className="text-base font-normal mb-6">
            Enter your credentials to create your account
          </p>

          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="frm-label" htmlFor="name">
                Full Name
              </label>
              <input
                className="w-full frm-input focus:outline-none"
                type="text"
                id="name"
                placeholder="First & Last Name"
                value={data.name}
                onChange={(e) => setData({ ...data, name: e.target.value })}
                required
              />
            </div>
            <div className="mb-6">
              <label className="frm-label" htmlFor="Mobile">
                Mobile Number
              </label>
              <input
                className="w-full frm-input focus:outline-none"
                type="number"
                id="Mobile"
                value={data.mobile}
                onChange={(e) => setData({ ...data, mobile: e.target.value })}
                placeholder="90876543"
                required
              />
            </div>
            <div className="mb-6">
              <label className="frm-label" htmlFor="email">
                Email
              </label>
              <input
                className="w-full frm-input focus:outline-none"
                type="email"
                id="email"
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
                placeholder="example@synapse.com"
                required
              />
            </div>

            <div className="mb-6">
              <label className="frm-label" htmlFor="registration-number">
                iOS Registration Number
              </label>
              <input
                className="w-full frm-input focus:outline-none"
                type="number"
                value={data.registrationNumber}
                onChange={(e) =>
                  setData({ ...data, registrationNumber: e.target.value })
                }
                id="registration-number"
                placeholder="543234567"
                required
              />
              <div className="text-right">
                <Link href="#" className=" text-sm hover:underline">
                  Forgot your password?
                </Link>
              </div>
            </div>

            <p className="text-sm text-gray-600">
              By signing up, you agree to our Terms of Service and Privacy Policy. We&apos;ll occasionally send you account related emails.
            </p>

            <button className="btn-primary cmnbtn w-full" type="submit">
              Register
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
      )}
      {isSubmited && !passwordSection && (
        <div className="card flex-col w-full max-w-md">
          <h2 className="text-xl md:text-2xl font-semibold">Registration Complete</h2>
          <p className="text-base font-normal mb-6">
            Once your information has been approved by the admin, you can set
            your password.
          </p>
          <button
            className="btn-primary cmnbtn w-full"
            type="submit"
            disabled={!isApproved}
            onClick={() => setPasswordSection(true)}
          >
            Set Password
          </button>
        </div>
      )}
      {passwordSection && (
        <div className="card flex-col w-full max-w-md">
          <h2 className="text-xl md:text-2xl font-semibold">Login</h2>
          <p className="text-base font-normal mb-6">
            Enter your credentials to access your account
          </p>

          <form>
            <div className="mb-6">
              <label className="frm-label" htmlFor="email">
                Email
              </label>
              <input
                className="w-full frm-input focus:outline-none"
                type="email"
                id="email"
                value={resetPasswordData.email}
                onChange={(e) =>
                  setResetPasswordData({
                    ...resetPasswordData,
                    email: e.target.value,
                  })
                }
                placeholder="example@synapse.com"
                required
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
                value={resetPasswordData.password}
                onChange={(e) =>
                  setResetPasswordData({
                    ...resetPasswordData,
                    password: e.target.value,
                  })
                }
                placeholder="● ● ● ● ● ● ● ●"
                required
              />
            </div>

            <div className="mb-6">
              <label className="frm-label" htmlFor="re-password">
                Re-type Password
              </label>
              <input
                className="w-full frm-input focus:outline-none"
                type="re-password"
                id="re-password"
                value={resetPasswordData.rePassword}
                onChange={(e) =>
                  setResetPasswordData({
                    ...resetPasswordData,
                    rePassword: e.target.value,
                  })
                }
                placeholder="● ● ● ● ● ● ● ●"
                required
              />
            </div>

            <button
              className="btn-primary cmnbtn w-full"
              type="submit"
              disabled={disablePassword}
            >
              set Password
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default SignupForm;

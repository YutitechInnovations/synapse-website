"use client";
import ClientOnly from "../../../components/ClientOnly";
import Navbar from "../../../components/Navbar/Navbar.js";
import { registerDoctor } from "@/services/auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Loader from "@/components/Loader/Loader";
import { successIcon as SuccessIcon } from "@/theme/icons";

const RegistrationSubmitted = () => {
  return (
    <div className="w-full flex justify-center px-4">
      <div className="w-full max-w-lg bg-white border border-[#184C3A] rounded-2xl px-8  pt-8 pb-10 flex flex-col items-start shadow-sm">
        <div className="mb-6">
          <SuccessIcon width={50} height={44} />
        </div>
        <p className="text-2xl font-semibold text-[#184C3A] mb-2">
          Thank You! Registration request has been submitted
        </p>
        <p className="text-[#184C3A] text-[16px]">
          You're all set! You can access the website while your information is being reviewed by the admin.
        </p>
      </div>
    </div>
  );
};

const SignupForm = () => {
  const router = useRouter();
  const [authInformation, setAuthInformation] = useState({
    fingerprint: "",
    brand: "",
    device_type: "",
    model_name: "",
    ip: "",
    mac: "",
  });
  const [data, setData] = useState({
    name: "",
    mobile: "",
    email: "",
    registrationNumber: "",
    password: "",
    confirmPassword: "",
    metainfo: {},
  });
  const [errors, setErrors] = useState({});

  const [isSubmited, setIsSubmited] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isApproved, setIsApproved] = useState(true);
  const [passwordSection, setPasswordSection] = useState(false);
  const [resetPasswordData, setResetPasswordData] = useState({
    email: "",
    password: "",
    rePassword: "",
  });
  const [disablePassword, setDisablePassword] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      import("clientjs").then(({ ClientJS }) => {
        const client = new ClientJS();
        const info = {
          fingerprint: client.getFingerprint(),
          brand: client.getOS(),
          device_type: client.getOSVersion(),
          model_name: client.getCPU(),
          ip: "",
          mac: "",
        };
        setAuthInformation(info);
        setData((prev) => ({
          ...prev,
          metainfo: info,
        }));
      });
    }
  }, []);

  useEffect(() => {
    // Check if the password and rePassword fields are not empty
    // and if they are not equal, set disablePassword to true
    // Otherwise, set it to false
    // This will disable the button if the passwords do not match

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

  const validateForm = (data) => {
    const errors = {};

    if (!data.name.trim()) errors.name = "Full name is required";

    if (!data.mobile.trim()) errors.mobile = "Mobile number is required";
    else if (!/^\d{10}$/.test(data.mobile))
      errors.mobile = "Please enter a valid 10-digit mobile number";

    if (!data.email.trim()) errors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
      errors.email = "Please enter a valid email address";

    if (!data.registrationNumber.trim())
      errors.registrationNumber = "Registration number is required";

    if (!data.password) errors.password = "Password is required";
    else if (data.password.length < 8)
      errors.password = "Password must be at least 8 characters long";

    if (!data.confirmPassword)
      errors.confirmPassword = "Please confirm your password";
    else if (data.password !== data.confirmPassword)
      errors.confirmPassword = "Passwords do not match";

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm(data);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return; // Stop submission if errors
    }
    const payload = {
      ...data,
      metainfo: authInformation,
    };
    try {
      setLoading(true);

      const result = await registerDoctor(payload);

      if (result.status && result.status.toLowerCase() === "failed") {
        toast.error("Registration failed");
        return;
      }

      // If no failure, handle success
      toast.success(result.message || "Registration successful! Please login.");
      setIsSubmited(true);
    } catch (error) {
      console.log(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  // Add this handler for the set password form
  const handleSetPassword = (e) => {
    e.preventDefault();
    if (
      !resetPasswordData.password ||
      resetPasswordData.password !== resetPasswordData.rePassword
    ) {
      alert("Passwords do not match or are empty.");
      return;
    }
    const users = JSON.parse(localStorage.getItem("mockUsers") || "[]");
    if (users.find((u) => u.email === data.email)) {
      alert("A user with this email already exists.");
      return;
    }
    users.push({
      name: data.name,
      mobile: data.mobile,
      email: data.email,
      registrationNumber: data.registrationNumber,
      password: resetPasswordData.password,
    });
    localStorage.setItem("mockUsers", JSON.stringify(users));
    alert("Registration complete! You can now log in.");
    window.location.href = "/login";
  };

  return (
    <div className="w-full flex flex-col items-center justify-center px-4">
      {loading && <Loader />}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center">
        Sign Up to your account{" "}
      </h1>
      <p className="text-base font-normal mt-2 mb-4 text-center">
        Access your Synapse dashboard and tools
      </p>
      {!isSubmited && (
        <div className="card flex-col w-full max-w-md">
          <h2 className="text-xl md:text-2xl font-semibold mb-1">Sign Up</h2>
          <p className="text-base font-normal mb-6">
            Enter your credentials to create your account
          </p>

          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="frm-label" htmlFor="name">
                Full Name *
              </label>
              <input
                className={`w-full frm-input focus:outline-none ${
                  errors.name ? "border-red-500" : ""
                }`}
                type="text"
                id="name"
                placeholder="First & Last Name"
                value={data.name}
                onChange={(e) => setData({ ...data, name: e.target.value })}
                required
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>
            <div className="mb-6">
              <label className="frm-label" htmlFor="Mobile">
                Mobile Number *
              </label>
              <input
                className={`w-full frm-input focus:outline-none ${
                  errors.mobile ? "border-red-500" : ""
                }`}
                type="text"
                id="Mobile"
                inputMode="numeric"
                pattern="[0-9]*"
                value={data.mobile}
                onChange={(e) => {
                  // Only allow numbers
                  const value = e.target.value.replace(/\D/g, "");
                  setData({ ...data, mobile: value });
                }}
                placeholder="9xxxxxxxxx0"
                required
              />
              {errors.mobile && (
                <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>
              )}
            </div>
            <div className="mb-6">
              <label className="frm-label" htmlFor="email">
                Email *
              </label>
              <input
                className={`w-full frm-input focus:outline-none ${
                  errors.email ? "border-red-500" : ""
                }`}
                type="email"
                id="email"
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
                placeholder="example@synapse.com"
                required
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div className="mb-6">
              <label className="frm-label" htmlFor="registration-number">
                iOS Registration Number *
              </label>
              <input
                className={`w-full frm-input focus:outline-none ${
                  errors.registrationNumber ? "border-red-500" : ""
                }`}
                type="text"
                value={data.registrationNumber}
                onChange={(e) =>
                  setData({ ...data, registrationNumber: e.target.value })
                }
                id="registration-number"
                placeholder="543234567"
                required
              />
              {errors.registrationNumber && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.registrationNumber}
                </p>
              )}
            </div>

            <div className="mb-6">
              <label className="frm-label" htmlFor="password">
                Password *
              </label>
              <div className="relative">
                <input
                  className={`w-full frm-input focus:outline-none ${
                    errors.password ? "border-red-500" : ""
                  }`}
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={data.password}
                  onChange={(e) =>
                    setData({ ...data, password: e.target.value })
                  }
                  placeholder="Enter your password"
                  required
                />
                <span
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
                  onClick={() => setShowPassword((prev) => !prev)}
                  tabIndex={0}
                  role="button"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <svg
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
                      <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm119.31-35.24c-.35-.79-8.82-19.58-27.65-38.41C194.57,61.26,162.88,48,128,48S61.43,61.26,36.34,86.35C17.51,105.18,9,124,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208s66.57-13.26,91.66-38.34c18.83-18.83,27.3-37.61,27.65-38.4A8,8,0,0,0,247.31,124.76ZM128,192c-30.78,0-57.67-11.19-79.93-33.25A133.47,133.47,0,0,1,25,128,133.33,133.33,0,0,1,48.07,97.25C70.33,75.19,97.22,64,128,64s57.67,11.19,79.93,33.25A133.46,133.46,0,0,1,231.05,128C223.84,141.46,192.43,192,128,192Zm0-112a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z"></path>
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="#143607"
                      viewBox="0 0 256 256"
                    >
                      <path d="M53.92,34.62A8,8,0,1,0,42.08,45.38L61.32,66.55C25,88.84,9.38,123.2,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208a127.11,127.11,0,0,0,52.07-10.83l22,24.21a8,8,0,1,0,11.84-10.76Zm47.33,75.84,41.67,45.85a32,32,0,0,1-41.67-45.85ZM128,192c-30.78,0-57.67-11.19-79.93-33.25A133.16,133.16,0,0,1,25,128c4.69-8.79,19.66-33.39,47.35-49.38l18,19.75a48,48,0,0,0,63.66,70l14.73,16.2A112,112,0,0,1,128,192Zm6-95.43a8,8,0,0,1,3-15.72,48.16,48.16,0,0,1,38.77,42.64,8,8,0,0,1-7.22,8.71,6.39,6.39,0,0,1-.75,0,8,8,0,0,1-8-7.26A32.09,32.09,0,0,0,134,96.57Zm113.28,34.69c-.42.94-10.55,23.37-33.36,43.8a8,8,0,1,1-10.67-11.92A132.77,132.77,0,0,0,231.05,128a133.15,133.15,0,0,0-23.12-30.77C185.67,75.19,158.78,64,128,64a118.37,118.37,0,0,0-19.36,1.57A8,8,0,1,1,106,49.79,134,134,0,0,1,128,48c34.88,0,66.57,13.26,91.66,38.35,18.83,18.83,27.3,37.62,27.65,38.41A8,8,0,0,1,247.31,131.26Z"></path>
                    </svg>
                  )}
                </span>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>

            <div className="mb-6">
              <label className="frm-label" htmlFor="confirm-password">
                Confirm Password *
              </label>
              <div className="relative">
                <input
                  className={`w-full frm-input focus:outline-none ${
                    errors.confirmPassword ? "border-red-500" : ""
                  }`}
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirm-password"
                  value={data.confirmPassword}
                  onChange={(e) =>
                    setData({ ...data, confirmPassword: e.target.value })
                  }
                  placeholder="Confirm your password"
                  required
                />
                <span
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
                  onClick={() => setShowConfirmPassword((prev) => !prev)}
                  tabIndex={0}
                  role="button"
                  aria-label={
                    showConfirmPassword ? "Hide password" : "Show password"
                  }
                >
                  {showConfirmPassword ? (
                    <svg
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
                      <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm119.31-35.24c-.35-.79-8.82-19.58-27.65-38.41C194.57,61.26,162.88,48,128,48S61.43,61.26,36.34,86.35C17.51,105.18,9,124,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208s66.57-13.26,91.66-38.34c18.83-18.83,27.3-37.61,27.65-38.4A8,8,0,0,0,247.31,124.76ZM128,192c-30.78,0-57.67-11.19-79.93-33.25A133.47,133.47,0,0,1,25,128,133.33,133.33,0,0,1,48.07,97.25C70.33,75.19,97.22,64,128,64s57.67,11.19,79.93,33.25A133.46,133.46,0,0,1,231.05,128C223.84,141.46,192.43,192,128,192Zm0-112a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z"></path>
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="#143607"
                      viewBox="0 0 256 256"
                    >
                      <path d="M53.92,34.62A8,8,0,1,0,42.08,45.38L61.32,66.55C25,88.84,9.38,123.2,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208a127.11,127.11,0,0,0,52.07-10.83l22,24.21a8,8,0,1,0,11.84-10.76Zm47.33,75.84,41.67,45.85a32,32,0,0,1-41.67-45.85ZM128,192c-30.78,0-57.67-11.19-79.93-33.25A133.16,133.16,0,0,1,25,128c4.69-8.79,19.66-33.39,47.35-49.38l18,19.75a48,48,0,0,0,63.66,70l14.73,16.2A112,112,0,0,1,128,192Zm6-95.43a8,8,0,0,1,3-15.72,48.16,48.16,0,0,1,38.77,42.64,8,8,0,0,1-7.22,8.71,6.39,6.39,0,0,1-.75,0,8,8,0,0,1-8-7.26A32.09,32.09,0,0,0,134,96.57Zm113.28,34.69c-.42.94-10.55,23.37-33.36,43.8a8,8,0,1,1-10.67-11.92A132.77,132.77,0,0,0,231.05,128a133.15,133.15,0,0,0-23.12-30.77C185.67,75.19,158.78,64,128,64a118.37,118.37,0,0,0-19.36,1.57A8,8,0,1,1,106,49.79,134,134,0,0,1,128,48c34.88,0,66.57,13.26,91.66,38.35,18.83,18.83,27.3,37.62,27.65,38.41A8,8,0,0,1,247.31,131.26Z"></path>
                    </svg>
                  )}
                </span>
              </div>
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.confirmPassword}
                </p>
              )}
            </div>

            <p className="text-sm text-gray-600">
              By signing up, you agree to our Terms of Service and Privacy
              Policy. We&apos;ll occasionally send you account related emails.
            </p>

            <button className="btn-primary cmnbtn w-full" type="submit">
              Register
            </button>
          </form>
        </div>
      )}
      {isSubmited && !passwordSection && <RegistrationSubmitted />}

      {passwordSection && (
        <div className="card flex-col w-full max-w-md">
          <h2 className="text-xl md:text-2xl font-semibold">Login</h2>
          <p className="text-base font-normal mb-6">
            Enter your credentials to access your account
          </p>

          <form onSubmit={handleSetPassword}>
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
                disabled
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
                type="password"
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

export default function Signup() {
  return (
    <div className="grid w-full">
      <ClientOnly>
        <Navbar />
      </ClientOnly>
      <main className="flex items-center justify-center pt-40 pb-[100px] px-4">
        <SignupForm />
      </main>
    </div>
  );
}

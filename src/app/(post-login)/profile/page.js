"use client";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar/Navbar";
import { editUserDetails, getUserDetails } from "@/services/auth";
import toast from "react-hot-toast";
import { useLoader } from "@/context/LoaderContext";

export default function Profile() {
  const { withLoader } = useLoader();
  const [originalData, setOriginalData] = useState(null);
  const [loading, setLoading] = useState(true);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    role: "",
    iosReg: "",
    practiceAddress: "",
  });

  useEffect(() => {
    fetchUserDetails();
  }, []);

  const fetchUserDetails = async () => {
    try {
      setLoading(true);
      const response = await getUserDetails();
      
      if (response.status === "success") {
        // Handle both response.data and direct response structure
        const userData = response.data || response;
        const populated = {
          fullName: userData.full_name || userData.fullName || "",
          email: userData.email || "",
          mobile: userData.mobile_number || userData.mobile || "",
          role: userData.role || "",
          iosReg: userData.ios_number || userData.iosReg || "",
          practiceAddress: userData.practice_address || userData.practiceAddress || "",
        };
        setFormData(populated);
        setOriginalData(populated);
      } else {
        // Fallback to localStorage if API fails
        const stored = localStorage.getItem("loggedUser");
        if (stored) {
          const user = JSON.parse(stored);
          const populated = {
            fullName: user.full_name || "",
            email: user.email || "",
            mobile: user.mobile_number || "",
            role: user.role || "",
            iosReg: user.ios_number || "",
            practiceAddress: user.practice_address || "",
          };
          setFormData(populated);
          setOriginalData(populated);
        }
        toast.error(response.message || "Failed to fetch user details");
      }
    } catch (error) {
      console.error("Error fetching user details:", error);
      
      // Fallback to localStorage if API fails
      const stored = localStorage.getItem("loggedUser");
      if (stored) {
        const user = JSON.parse(stored);
        const populated = {
          fullName: user.full_name || "",
          email: user.email || "",
          mobile: user.mobile_number || "",
          role: user.role || "",
          iosReg: user.ios_number || "",
          practiceAddress: user.practice_address || "",
        };
        setFormData(populated);
        setOriginalData(populated);
      }
      
      toast.error(error.message || "Failed to fetch user details");
    } finally {
      setLoading(false);
    }
  };

  const isFormChanged =
    JSON.stringify(formData) !== JSON.stringify(originalData);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormChanged) return;

    try {
      await withLoader(async () => {
        const payload = {
          full_name: formData.fullName.trim(),
          mobile_number: formData.mobile.trim(),
          role: formData.role.trim(),
          ios_number: formData.iosReg.trim(),
          practice_address: formData.practiceAddress.trim(),
        };

        const response = await editUserDetails(payload);

        if (response.status === "success") {
          // Update localStorage with the fresh data
          const stored = localStorage.getItem("loggedUser");
          if (stored) {
            const user = JSON.parse(stored);
            const updatedUser = { ...user, ...payload };
            localStorage.setItem("loggedUser", JSON.stringify(updatedUser));
          }

          toast.success("Profile updated successfully");
          setOriginalData(formData);
          
          // Optionally refresh user details from API to ensure consistency
          // await fetchUserDetails();
        } else {
          toast.error(response.message || "Failed to update profile");
        }
      }, "Updating your profile...");
    } catch (error) {
      console.error("Profile update error:", error);
      toast.error(error.message || "Failed to update profile");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div
        className="w-full max-w-4xl 3xl:max-w-6xl bg-white border border-[#184C3A] rounded-2xl p-6 mx-auto"
        style={{ marginTop: "130px" }}
      >
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-[#184C3A] mb-1">
              Profile Information
            </h2>
            <p className="text-[#184C3A] text-base">
              Update your personal information and preferences
            </p>
          </div>
          <button
            onClick={fetchUserDetails}
            disabled={loading}
            className="bg-[#184C3A] text-white px-4 py-2 rounded-lg hover:bg-[#0f3a2e] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Refreshing..." : "Refresh"}
          </button>
        </div>
        
        {loading ? (
          <div className="flex items-center justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#184C3A]"></div>
            <span className="ml-3 text-[#184C3A]">Loading profile...</span>
          </div>
        ) : (
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-[#184C3A]" htmlFor="fullName">
              Full Name
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              value={formData.fullName}
              onChange={handleChange}
              className="border border-[#B6C3C7] rounded-lg px-4 py-2 text-[#184C3A] bg-white"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-[#184C3A]" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              disabled
              className="border border-[#B6C3C7] rounded-lg px-4 py-2 text-[#6B7280] bg-[#F0F0F0] cursor-not-allowed opacity-80"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-[#184C3C]" htmlFor="mobile">
              Mobile Number
            </label>
            <input
              id="mobile"
              name="mobile"
              type="text"
              value={formData.mobile}
              onChange={handleChange}
              className="border border-[#B6C3C7] rounded-lg px-4 py-2 text-[#184C3C] bg-white"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              className="font-semibold text-[#184C3C]"
              htmlFor="practiceType"
            >
              Practice Type
            </label>
            <input
              id="practiceType"
              name="role"
              type="text"
              value={formData.role}
              onChange={handleChange}
              className="border border-[#B6C3C7] rounded-lg px-4 py-2 text-[#184C3C] bg-white"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-[#184C3C]" htmlFor="iosReg">
              iOS Registration Number
            </label>
            <input
              id="iosReg"
              name="iosReg"
              type="text"
              value={formData.iosReg}
              onChange={handleChange}
              className="border border-[#B6C3C7] rounded-lg px-4 py-2 text-[#184C3C] bg-white"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              className="font-semibold text-[#184C3C]"
              htmlFor="practiceAddress"
            >
              Practice Address
            </label>
            <input
              id="practiceAddress"
              name="practiceAddress"
              type="text"
              value={formData.practiceAddress}
              onChange={handleChange}
              className="border border-[#B6C3C7] rounded-lg px-4 py-2 text-[#184C3C] bg-white"
            />
          </div>
          <div className="md:col-span-2 flex justify-start mt-2">
            <button
              disabled={!isFormChanged}
              type="submit"
              className={`bg-[#08544A] text-white font-semibold rounded-[10px] px-10 py-3 shadow-md transition text-base ${
                isFormChanged ? "hover:bg-[#184C3A] active:scale-95" : "opacity-70 cursor-not-allowed"
              }`}
            >
              Update
            </button>
          </div>
        </form>
        )}
      </div>
    </div>
  );
}

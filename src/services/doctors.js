import instance from "@/network/index";
import toast from "react-hot-toast";



export const fetchDoctors = async (queryString) => {
  try {
    const res = await instance.get(`/admin/get_all_users${queryString}`);

    toast.success("Doctors list fetched successfully");
    return res.data;
  } catch (error) {
    const message =
      error?.response?.data?.message ||
      error?.message ||
      "Failed to fetch doctors";

    toast.error(message);

    throw new Error(message);
  }
};

export const approveDoctors = async (userId) => {
  try {
    const res = await instance.get(`/admin/approve_user?user_id=${userId}`);
    toast.success("Doctor Approved");
    return res.data;
  } catch (error) {
    const message =
      error?.response?.data?.message ||
      error?.message ||
      "Failed to approve doctor";
    toast.error(message);
    throw new Error(message);
  }
};

export const rejectDoctors = async (userId) => {
  try {
    const res = await instance.get(`/admin/reject_user?user_id=${userId}`);
    toast.success("Doctor rejected");
    return res.data;
  } catch (error) {
    const message =
      error?.response?.data?.message ||
      error?.message ||
      "Failed to reject doctor";
    toast.error(message);
    throw new Error(message);
  }
};
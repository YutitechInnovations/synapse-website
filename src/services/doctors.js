import instance from "@/network/index";

export const fetchDoctors = async (queryString) => {
  try {
    const res = await instance.get(`/admin/get_all_users${queryString}`);
    return res.data;
  } catch (error) {
    const message =
      error?.response?.data?.message ||
      error?.message ||
      "Failed to fetch doctors";

    throw new Error(message);
  }
};

export const approveDoctors = async (userId) => {
  try {
    const res = await instance.get(`/admin/approve_user?user_id=${userId}`);
    return res.data;
  } catch (error) {
    const message =
      error?.response?.data?.message ||
      error?.message ||
      "Failed to approve doctor";
    throw new Error(message);
  }
};

export const rejectDoctors = async (userId) => {
  try {
    const res = await instance.get(`/admin/reject_user?user_id=${userId}`);
    return res.data;
  } catch (error) {
    const message =
      error?.response?.data?.message ||
      error?.message ||
      "Failed to reject doctor";
    throw new Error(message);
  }
};
import { getCookie } from "@/network/helper";
import instance from "@/network/index";
import Cookies from "js-cookie";

export const doctorLogin = async (payload) => {
  try {
    if (getCookie("adminId")) {
      adminLogout();
    }
    const res = await instance.post(
      "user/user_login".replace(/^\/+/, ""),
      payload
    );
    const data = res.data;

    if (!data) {
      console.error("No data received in response");
      throw new Error("No response data received");
    }

    if (data.status !== "success") {
      console.error("Login failed with status:", data.status);
      throw new Error(data.message || "Login failed");
    }

    if (data.token) {
      Cookies.set("access_token", data.token, { expires: 7 }); // Expires in 7 days
    } else {
      console.warn("No token received in response");
    }

    return data; // { message, status, doctor_id, email, full_name, token }
  } catch (error) {
    console.error("Login error details:", {
      message: error.message,
      response: error.response,
      request: error.request,
    });
    const errorMessage =
      error.response?.data?.message || error.message || "Login failed";
    throw new Error(errorMessage);
  }
};

export const adminLogin = async (payload) => {
  try {
    if (getCookie("access_token")) {
      adminLogout();
    }
    const res = await instance.post("admin/admin_login", payload);
    const data = res.data;

    if (!data) {
      throw new Error("No response data received");
    }

    if (data.status !== "success") {
      throw new Error(data.message || "Login failed");
    }

    // Store token in both localStorage and cookies for redundancy
    if (data.token) {
      Cookies.set("access_token", data.token, { expires: 7 }); // Expires in 7 days
    }

    return data; // { message, status, doctor_id, email, full_name, token }
  } catch (error) {
    console.error("Login error:", error);
    const errorMessage =
      error.response?.data?.message || error.message || "Login failed";
    throw new Error(errorMessage);
  }
};

export const registerDoctor = async (data) => {
  // Prepare payload matching your API body structure
  const payload = {
    full_name: data.name,
    email: data.email,
    mobile_number: data.mobile,
    country_code: "+91", // static or from input if you want
    ios_number: data.registrationNumber || "", // assuming this corresponds to registrationNumber field
    password: data.password,
  };

  try {
    const response = await instance.post(`user/user_register`, payload);
    return response.data; // return the API response data
  } catch (error) {
    // throw error to be caught by caller
    throw error.response?.data || error.message || "Registration failed";
  }
};

export const adminLogout = async () => {
  try {
    const response = await instance.get("/admin/logout");
    return response.data; // return the API response data
  } catch (error) {
    console.log(error);
  }
};
export const userLogout = async () => {
  try {
    const response = await instance.get("/user/logout");
    return response.data; // return the API response data
  } catch (error) {
    console.log(error);
  }
};

export const getOrthoSyncUrl = async () => {
  try {
    const response = await instance.get("/user/get_orthosync_url");
    return response.data;
  } catch (error) {
    console.error("Failed to fetch OrthoSync URL:", error);
  }
};

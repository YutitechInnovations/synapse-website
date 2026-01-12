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
      status:
        error.response?.status ||
        "No status (possibly a network or CORS error)",
      data: error.response?.data || "No response data",
      request: error.request || "No request object",
    });

    // Handle validation errors (422 status)
    if (error.response?.status === 422 && error.response?.data?.detail) {
      const validationError = error.response.data.detail[0];
      const errorMessage = validationError?.msg || "Validation error";
      throw new Error(errorMessage);
    }
    // Handle common login error status codes
    if (error.response?.status === 401) {
      const errorMessage =
        error.response?.data?.message || "Invalid email or password";
      throw new Error(errorMessage);
    }
    if (error.response?.status === 400) {
      const errorMessage =
        error.response?.data?.message ||
        "Invalid request. Please check your credentials.";
      throw new Error(errorMessage);
    }
    if (error.response?.status === 404) {
      const errorMessage =
        error.response?.data?.message ||
        "User not found. Please check your email.";
      throw new Error(errorMessage);
    }
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

    // Handle validation errors (422 status)
    if (error.response?.status === 422 && error.response?.data?.detail) {
      const validationError = error.response.data.detail[0];
      const errorMessage = validationError?.msg || "Validation error";
      throw new Error(errorMessage);
    }

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
    metainfo: data.metainfo || {},
  };

  try {
    const response = await instance.post(`user/user_register`, payload);

    return response.data; // return the API response data
  } catch (error) {
    // Handle validation errors (422 status)
    if (error.response?.status === 422 && error.response?.data?.detail) {
      const validationError = error.response.data.detail[0];
      const errorMessage = validationError?.msg || "Validation error";
      throw new Error(errorMessage);
    }

    // Handle common registration error status codes
    if (error.response?.status === 400) {
      const errorMessage =
        error.response?.data?.message || "Invalid registration data";
      throw new Error(errorMessage);
    }

    if (error.response?.status === 409) {
      const errorMessage =
        error.response?.data?.message || "User already exists";
      throw new Error(errorMessage);
    }

    if (error.response?.status === 500) {
      const errorMessage =
        error.response?.data?.message ||
        "Server error. Please try again later.";
      throw new Error(errorMessage);
    }

    // If the error response has data with a message, use it
    if (error.response?.data?.message) {
      throw new Error(error.response.data.message);
    }

    // throw error to be caught by caller
    throw error.response?.data || error.message || "Registration failed";
  }
};

export const adminLogout = async () => {
  try {
    const response = await instance.get("/admin/logout");
    return response.data; // return the API response data
  } catch (error) {}
};
export const userLogout = async () => {
  try {
    const response = await instance.get("/user/logout");
    return response.data; // return the API response data
  } catch (error) {}
};

export const getOrthoSyncUrl = async () => {
  try {
    const response = await instance.get("/user/get_orthosync_url");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getUserDetails = async () => {
  try {
    const response = await instance.get("/user/get_user_details");
    return response.data;
  } catch (error) {
    console.error("Get user details error:", {
      message: error.message,
      status:
        error.response?.status || "No response status (network or CORS issue)",
      data: error.response?.data || "No response data",
      config: error.config,
      request: error.request || "No request object",
    });

    // Handle different types of errors
    if (error.response) {
      // Handle validation errors (422 status)
      if (error.response.status === 422 && error.response.data?.detail) {
        const validationError = error.response.data.detail[0];
        const errorMessage = validationError?.msg || "Validation error";
        throw new Error(errorMessage);
      }

      // Handle authentication errors
      if (error.response.status === 401) {
        throw new Error("Authentication required. Please login again.");
      }

      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      throw new Error(
        error.response.data?.message || "Failed to fetch user details"
      );
    } else if (error.request) {
      // The request was made but no response was received
      throw new Error(
        "No response received from server. Please check your connection."
      );
    } else {
      // Something happened in setting up the request that triggered an Error
      throw new Error(error.message || "Failed to fetch user details");
    }
  }
};

export const editUserDetails = async (userData) => {
  try {
    const response = await instance.put("/user/edit_user_details", userData);
    return response.data;
  } catch (error) {
    console.error("Edit user details error:", {
      message: error.message,
      status:
        error.response?.status || "No response status (network or CORS issue)",
      data: error.response?.data || "No response data",
      config: error.config,
      request: error.request || "No request object",
    });

    // Handle different types of errors
    if (error.response) {
      // Handle validation errors (422 status)
      if (error.response.status === 422 && error.response.data?.detail) {
        const validationError = error.response.data.detail[0];
        const errorMessage = validationError?.msg || "Validation error";
        throw new Error(errorMessage);
      }

      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      throw new Error(
        error.response.data?.message || "Failed to update user details"
      );
    } else if (error.request) {
      // The request was made but no response was received
      throw new Error(
        "No response received from server. Please check your connection."
      );
    } else {
      // Something happened in setting up the request that triggered an Error
      throw new Error(error.message || "Failed to update user details");
    }
  }
};

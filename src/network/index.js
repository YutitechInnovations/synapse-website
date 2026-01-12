import axios from "axios";
import Cookies from "js-cookie"; // Ensure you have js-cookie installed
import { handleToast, logout } from "./helper";

// Create an Axios instance
const baseURL = process.env.NEXT_PUBLIC_COMMON_BASE_URL?.replace(/\/$/, "");
const instance = axios.create({
  baseURL: baseURL, // Remove trailing slash if present
  headers: {
    "X-Requested-With": "XMLHttpRequest",
    "Content-Type": "application/json",
  },
  withCredentials: false, // Changed to false since we're handling credentials manually
  validateStatus: (status) => status >= 200 && status < 500,
});

// Request interceptor: Attach token from localStorage or Cookies
instance.interceptors.request.use(
  (config) => {
    // Ensure URL doesn't have double slashes
    if (config.url) {
      config.url = config.url.replace(/^\/+/, "");
    }
    const token =
      localStorage.getItem("token") ||
      localStorage.getItem("access_token") ||
      Cookies.get("access_token") ||
      document.cookie
        .split("; ")
        .find((row) => row.startsWith("access_token="))
        ?.split("=")[1];

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    } else {
      console.warn(`No token found for ${config.url}. Available tokens:`, {
        localStorage_token: localStorage.getItem("token")
          ? "EXISTS"
          : "NOT FOUND",
        localStorage_access_token: localStorage.getItem("access_token")
          ? "EXISTS"
          : "NOT FOUND",
        cookies_access_token: Cookies.get("access_token")
          ? "EXISTS"
          : "NOT FOUND",
        document_cookie: document.cookie.includes("access_token")
          ? "EXISTS"
          : "NOT FOUND",
      });
    }

    // Debug logging for support requests
    // if (config.url.includes('support')) {
    //   console.log("Support request config:", {
    //     url: config.url,
    //     method: config.method,
    //     headers: config.headers,
    //     data: config.data
    //   });
    // }

    return config;
  },
  (error) => {
    console.error("Request error:", error);
    return Promise.reject(error);
  }
);

let isLoggingOut = false;

instance.interceptors.response.use(
  (response) => {
    // Handle successful responses
    if (response.data) {
      // If there's a token in the response, store it
      if (response.data.token) {
        Cookies.set("access_token", response.data.token, { expires: 7 });
      }
      return response;
    }
    return response;
  },
  async (error) => {
    // Log detailed error information
    if (process.env.NODE_ENV !== "production") {
      console.error("Response error:", {
        message: error.message || "Something went wrong",
        status:
          error.response?.status ||
          "No status (possibly network or CORS error)",
        data: error.response?.data || "No response data",
        request: error.request || "No request object",
        config: error.config,
      });
    }

    if (error.response) {
      const { status } = error.response;

      // Handle authentication errors only
      // Don't auto-logout for login endpoints when credentials are wrong
      const isLoginEndpoint =
        error.config?.url?.includes("login") ||
        error.config?.url?.includes("user_login") ||
        error.config?.url?.includes("admin_login");

      if (status === 401 && !isLoggingOut && !isLoginEndpoint) {
        isLoggingOut = true;
        try {
          await instance.post("/logout");
        } catch (logoutError) {
          console.error("Logout request failed:", logoutError);
        }
        await logout();
        window.location.href = "/login"; // Redirect to login page
        return Promise.reject(error);
      }

      // For all other errors, just reject with the original error
      // Let individual components handle their own error messages
      return Promise.reject(error);
    } else if (error.request) {
      // The request was made but no response was received
      console.error(
        "No response received from server. Request details:",
        error.request
      );
      // Let individual components handle this error
      return Promise.reject(error);
    } else {
      // Something happened in setting up the request
      console.error("Request setup failed:", error.message);
      // Let individual components handle this error
      return Promise.reject(error);
    }
  }
);

export default instance;

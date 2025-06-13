import { QueryClient } from "@tanstack/react-query";
import cookie from "js-cookie";
import toast from "react-hot-toast";
const queryClient = new QueryClient();

// set in cookie
export const setCookie = (key, value, days = 300) => {
  if (typeof window !== "undefined") {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000); // Set expiration time to `days` from now

    cookie.set(key, value, {
      expires: expires, // Set expiration date
      secure: process.env.NODE_ENV === "production", // Only set secure flag in production
      path: "/", // Make cookie available site-wide
    });
  }
};

export const removeCookie = (key) => {
  if (typeof window !== "undefined") {
    cookie.remove(key);
  }
};

// get from cookie such as stored token
// will be useful when we need to make request to server with auth token
export const getCookie = (key) => {
  return getCookieFromBrowser(key);
};

export const getCookieFromBrowser = (key) => {
  return cookie.get(key);
};

export const getCookieFromServer = (key, req) => {
  if (!req.headers.cookie) {
    return undefined;
  }
  const token = req.headers.cookie
    .split(";")
    .find((c) => c.trim().startsWith(`${key}=`));
  if (!token) {
    return undefined;
  }
  const tokenValue = token.split("=")[1];
  return tokenValue;
};

// set in localstoarge
export const setLocalStorage = (key, value) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(key, JSON.stringify(value));
  }
};
// get from localstorage
export const getLocalStorage = (key) => {
  if (typeof window !== "undefined") {
    if (localStorage.getItem(key)) {
      return JSON.parse(localStorage.getItem(key) || "");
    } else {
      return false;
    }
  }
};
// remove from localstorage
export const removeLocalStorage = (key) => {
  if (typeof window !== "undefined") {
    localStorage.removeItem(key);
  }
};

// authenticate user by passing data to cookie and localstorage during signin
export const authenticate = async (response, next) => {
  try {
    // Clear existing localStorage keys
    localStorage.removeItem("loggedUser");
    localStorage.removeItem("isAdmin");
    localStorage.removeItem("isLoggedIn");

    // Set new localStorage values
    setLocalStorage("loggedUser", response.data);
    setLocalStorage("isAdmin", !!response?.admin_id);
    setLocalStorage("isLoggedIn", true);

    if (next && typeof next === "function") {
      await next();
    } else {
      console.log("No callback provided or invalid.");
    }
  } catch (error) {
    console.error("Authentication error:", error);
    throw error;
  }
};

export const isAuth = () => {
  if (typeof window !== "undefined") {
    const userCookie = getCookie("user");
    if (userCookie) {
      return true;
    } else {
      logout();
      return false;
    }
  }
};

export const logout = async () => {
  try {
    localStorage.clear();
    sessionStorage.clear();
    const cookies = document.cookie.split(";");
    await queryClient.cancelQueries();
    queryClient.clear();
    queryClient.removeQueries();
    queryClient.resetQueries();
    cookies.forEach((cookie) => {
      const eqPos = cookie.indexOf("=");
      const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
    });
  } catch (error) {
    console.error("Error during logout:", error);
  }
};

export const getBaseUrl = (caseType) => {
  switch (caseType) {
    case "common":
      return process.env.NEXT_PUBLIC_COMMON_BASE_URL;
    case "user":
      return "https://user.example.com";
    case "admin":
      return "https://admin.example.com";
    case "api":
      return "https://api.example.com";
    default:
      return process.env.NEXT_PUBLIC_COMMON_BASE_URL;
  }
};

/**
 * Handles toast notifications for responses and errors.
 * @param {Object} params - Parameters for toast handling.
 * @param {Object} [params.res] - Response object from the server.
 * @param {Object} [params.err] - Error object from the server.
 * @param {Function} [params.next] - Optional callback function to execute on success.
 */
export const handleToast = ({ res, err, next }) => {
  if (res) {
    // Success
    toast.success(res.message || "Operation successful!");
    if (next) next();
    return;
  }

  if (err) {
    const status = err?.response?.status;
    const data = err?.response?.data;

    // Validation errors
    if (status === 422 && data?.errors) {
      const validationErrors = Object.values(data.errors).flat();
      validationErrors.forEach((message) => toast.error(message));
    } else if (data?.message) {
      toast.error(data.message);
    } else if (err.message) {
      // Network error, timeout, or unexpected error
      toast.error(err.message);
    } else {
      toast.error("Something went wrong. Please try again.");
    }
  }
};


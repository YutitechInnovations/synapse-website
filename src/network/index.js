import axios from "axios";
import Cookies from "js-cookie"; // Ensure you have js-cookie installed
import { handleToast, logout } from "./helper";

// Create an Axios instance
const baseURL = process.env.NEXT_PUBLIC_COMMON_BASE_URL?.replace(/\/$/, '');

const instance = axios.create({
    baseURL: baseURL, // Remove trailing slash if present
    headers: {
        "X-Requested-With": "XMLHttpRequest",
        "Content-Type": "application/json",
    },
    withCredentials: false, // Changed to false since we're handling credentials manually
    validateStatus: (status) => status >= 200 && status < 400,
});


// Request interceptor: Attach token from localStorage or Cookies
instance.interceptors.request.use(
    (config) => {
        // Ensure URL doesn't have double slashes
        if (config.url) {
            config.url = config.url.replace(/^\/+/, '');
        }



        // Priority 1: Get token from localStorage
        const token = localStorage.getItem("token") || Cookies.get("access_token");

        if (token) {
            config.headers["Authorization"] = `Bearer ${token}`;
        }

        return config;
    },
    (error) => {
        console.error("Request error:", error);
        return Promise.reject(error);
    }
);

// Flag to prevent multiple logouts
let isLoggingOut = false;

// Response interceptor
instance.interceptors.response.use(
    (response) => {
        // Log successful response
        console.log("Response received:", {
            status: response.status,
            data: response.data
        });
        // Handle successful responses
        if (response.data) {
            // If there's a token in the response, store it
            if (response.data.token) {
                localStorage.setItem("token", response.data.token);
                Cookies.set("access_token", response.data.token, { expires: 7 });
            }
            return response;
        }
        return response;
    },
    async (error) => {
        // Log detailed error information
        console.error("Response error:", {
            message: error.message,
            response: error.response,
            request: error.request,
            config: error.config
        });

        if (error.response) {
            const { data, status } = error.response;
            let errorMessage = "An unknown error occurred";

            // Handle authentication errors
            if ((status === 401 || status === 403) && !isLoggingOut) {
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

            // Handle 404 errors
            if (status === 404) {
                errorMessage = "Resource not found";
                handleToast({
                    err: { response: { data: { message: errorMessage } } },
                });
                return Promise.reject(error);
            }

            // Handle validation errors
            if (data?.errors) {
                if (Array.isArray(data.errors)) {
                    errorMessage = data.errors.join(", ");
                } else if (typeof data.errors === "object") {
                    const messages = Object.values(data.errors).flat().join(", ");
                    errorMessage = messages || "Validation errors occurred.";
                }
            } else if (data?.message) {
                errorMessage = data.message;
            }

            handleToast({
                err: { response: { data: { message: errorMessage } } },
            });
        } else if (error.request) {
            // The request was made but no response was received
            console.error("No response received from server. Request details:", error.request);
            handleToast({
                err: { response: { data: { message: "No response from server. Please check your connection." } } },
            });
        } else {
            // Something happened in setting up the request
            console.error("Request setup failed:", error.message);
            handleToast({
                err: { response: { data: { message: error.message || "Request setup failed" } } },
            });
        }

        return Promise.reject(error);
    }
);

export default instance;

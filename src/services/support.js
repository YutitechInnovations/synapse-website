import instance from "@/network/index";

export const submitSupportRequest = async (supportData) => {
  try {
    const response = await instance.post("/user/support", supportData);
    return response.data;
  } catch (error) {
    // Handle validation errors (422 status)
    if (error.response?.status === 422 && error.response?.data?.detail) {
      const validationError = error.response.data.detail[0];
      const errorMessage = validationError?.msg || "Validation error";
      throw new Error(errorMessage);
    }
    
    // Handle common error status codes
    if (error.response?.status === 400) {
      const errorMessage = error.response?.data?.message || "Invalid support request data";
      throw new Error(errorMessage);
    }
    
    if (error.response?.status === 401) {
      const errorMessage = error.response?.data?.message || "Authentication required";
      throw new Error(errorMessage);
    }
    
    if (error.response?.status === 500) {
      const errorMessage = error.response?.data?.message || "Server error. Please try again later.";
      throw new Error(errorMessage);
    }
    
    // If the error response has data with a message, use it
    if (error.response?.data?.message) {
      throw new Error(error.response.data.message);
    }
    
    // throw error to be caught by caller
    throw error.response?.data || error.message || "Support request failed";
  }
}; 
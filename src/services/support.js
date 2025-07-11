import instance from "@/network/index";

export const submitSupportRequest = async (supportData) => {
  try {
    const response = await instance.post("/user/support", supportData);
    return response.data;
  } catch (error) {
    // Handle validation errors (422 status)
    if (error.response?.status === 422) {
      console.error("Validation Error Details:", error.response.data);
      
      if (error.response?.data?.detail && Array.isArray(error.response.data.detail)) {
        // Handle FastAPI validation errors
        const validationErrors = error.response.data.detail;
        const errorMessages = validationErrors.map(err => err.msg || `${err.loc?.join('.')}: ${err.type}`).join(', ');
        throw new Error(errorMessages);
      } else if (error.response?.data?.message) {
        throw new Error(error.response.data.message);
      } else {
        throw new Error("Validation error: Please check your input data");
      }
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
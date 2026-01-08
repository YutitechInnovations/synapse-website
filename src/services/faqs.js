import instance from "../network";

// Get all FAQs (public endpoint - no auth required)
export const getAllFaqs = async (params = {}) => {
  const { limit = 100, offset = 0, query = "" } = params;

  const token =
    localStorage.getItem("token") ||
    localStorage.getItem("access_token") ||
    document.cookie
      .split("; ")
      .find((row) => row.startsWith("access_token="))
      ?.split("=")[1];

  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      params: {
        limit,
        offset,
        query,
      },
    };

    // Add authorization header only if token exists
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    const res = await instance.get("/faqs/get_faqs", config);

    if (res.data && res.data.status === "success") {
      return res.data;
    } else {
      throw new Error(res.data?.message || "Failed to fetch FAQs");
    }
  } catch (error) {
    console.error("Error in getAllFaqs:", error);
    throw error;
  }
};

// Create a new FAQ
export const createFaq = async (faqData) => {
  const token =
    localStorage.getItem("token") ||
    localStorage.getItem("access_token") ||
    document.cookie
      .split("; ")
      .find((row) => row.startsWith("access_token="))
      ?.split("=")[1];

  if (!token) {
    throw new Error("No authentication token found. Please log in again.");
  }

  try {
    const res = await instance.post("/faqs/create_faq", faqData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (res.data && res.data.status === "success") {
      return res.data;
    } else {
      throw new Error(res.data?.message || "Failed to create FAQ");
    }
  } catch (error) {
    console.error("Error in createFaq:", error);
    throw error;
  }
};

// Update an existing FAQ
export const updateFaq = async (faqId, faqData) => {
  const token =
    localStorage.getItem("token") ||
    localStorage.getItem("access_token") ||
    document.cookie
      .split("; ")
      .find((row) => row.startsWith("access_token="))
      ?.split("=")[1];

  if (!token) {
    throw new Error("No authentication token found. Please log in again.");
  }

  try {
    const res = await instance.put(
      `/faqs/update_faq?faq_id=${faqId}`,
      faqData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (res.data && res.data.status === "success") {
      return res.data;
    } else {
      throw new Error(res.data?.message || "Failed to update FAQ");
    }
  } catch (error) {
    console.error("Error in updateFaq:", error);
    throw error;
  }
};

// Delete a FAQ
export const deleteFaq = async (faqId) => {
  const token =
    localStorage.getItem("token") ||
    localStorage.getItem("access_token") ||
    document.cookie
      .split("; ")
      .find((row) => row.startsWith("access_token="))
      ?.split("=")[1];

  if (!token) {
    throw new Error("No authentication token found. Please log in again.");
  }

  try {
    const res = await instance.delete(`/faqs/delete_faq?faq_id=${faqId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (res.data && res.data.status === "success") {
      return res.data;
    } else {
      throw new Error(res.data?.message || "Failed to delete FAQ");
    }
  } catch (error) {
    console.error("Error in deleteFaq:", error);
    throw error;
  }
};

// Get FAQ by ID
export const getFaqById = async (faqId) => {
  const token =
    localStorage.getItem("token") ||
    localStorage.getItem("access_token") ||
    document.cookie
      .split("; ")
      .find((row) => row.startsWith("access_token="))
      ?.split("=")[1];

  if (!token) {
    throw new Error("No authentication token found. Please log in again.");
  }

  try {
    const res = await instance.get(`/faqs/get_faq/${faqId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (res.data && res.data.status === "success") {
      return res.data;
    } else {
      throw new Error(res.data?.message || "Failed to fetch FAQ");
    }
  } catch (error) {
    console.error("Error in getFaqById:", error);
    throw error;
  }
};

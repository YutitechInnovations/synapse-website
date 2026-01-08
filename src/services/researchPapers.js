import instance from "../network";

// Get presigned URL for research paper file upload
export const getResearchPaperPresignedUrl = async (fileName) => {
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

  const res = await instance.post(
    "/research-papers/get_research_paper_presigned_url",
    {
      file_name: fileName,
    },
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
    throw new Error(res.data?.message || "Failed to get upload URL");
  }
};

// Upload file directly to cloud storage using presigned URL
export const uploadFileToCloud = async (presignedUrl, file) => {
  try {
    const maxSize = 10 * 1024 * 1024; // 10MB
    if (file.size > maxSize) {
      throw new Error("File size exceeds 10MB limit");
    }

    const allowedTypes = [
      "image/jpeg",
      "image/png",
      "image/gif",
      "image/webp",
      "application/pdf",
    ];
    if (!allowedTypes.includes(file.type)) {
      throw new Error(
        "Invalid file type. Only JPEG, PNG, GIF, WebP, and PDF are allowed"
      );
    }

    const response = await fetch(presignedUrl, {
      method: "PUT",
      body: file,
      headers: {
        "Content-Type": file.type,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to upload file to cloud storage");
    }

    return response;
  } catch (error) {
    console.error("Cloud upload error:", error);
    throw error;
  }
};

// Create research paper
export const createResearchPaper = async (paperData) => {
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

  const res = await instance.post(
    "/research-papers/create_research_paper",
    paperData,
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
    throw new Error(res.data?.message || "Failed to create research paper");
  }
};

// Get all research papers (public endpoint - no auth required)
export const getAllResearchPapers = async (limit = 100, offset = 0) => {
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
    };

    // Add authorization header only if token exists
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    const res = await instance.get(
      `/research-papers/get_all_research_papers?limit=${limit}&offset=${offset}`,
      config
    );

    if (res.data && res.data.status === "success") {
      return res.data;
    } else {
      throw new Error(res.data?.message || "Failed to fetch research papers");
    }
  } catch (error) {
    console.error("Error in getAllResearchPapers:", error);
    throw error;
  }
};

// Get research paper by ID (public endpoint - no auth required)
export const getResearchPaperById = async (researchPaperId) => {
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
    };

    // Add authorization header only if token exists
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    const res = await instance.get(
      `/research-papers/get_research_paper_by_id?research_paper_id=${researchPaperId}`,
      config
    );

    if (res.data && res.data.status === "success") {
      return res.data;
    } else {
      throw new Error(res.data?.message || "Failed to fetch research paper");
    }
  } catch (error) {
    console.error("Error in getResearchPaperById:", error);
    throw error;
  }
};

// Update research paper
export const updateResearchPaper = async (researchPaperId, paperData) => {
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

  const res = await instance.put(
    `/research-papers/update_research_paper?research_paper_id=${researchPaperId}`,
    paperData,
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
    throw new Error(res.data?.message || "Failed to update research paper");
  }
};

// Delete research paper
export const deleteResearchPaper = async (researchPaperId) => {
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

  const res = await instance.delete(
    `/research-papers/delete_research_paper?research_paper_id=${researchPaperId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (res.data && res.data.status === "success") {
    return res.data;
  } else {
    throw new Error(res.data?.message || "Failed to delete research paper");
  }
};

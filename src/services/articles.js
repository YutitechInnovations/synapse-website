import instance from "../network";

// Get presigned URL for article file upload
export const getArticlePresignedUrl = async (fileName) => {
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
    "/articles/get_article_presigned_url",
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

// Create article
export const createArticle = async (articleData) => {
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

  const res = await instance.post("/articles/create_article", articleData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  if (res.data && res.data.status === "success") {
    return res.data;
  } else {
    throw new Error(res.data?.message || "Failed to create article");
  }
};

// Get all articles (public endpoint - no auth required)
export const getAllArticles = async (limit = 100, offset = 0) => {
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
      `/articles/get_all_articles?limit=${limit}&offset=${offset}`,
      config
    );

    if (res.data && res.data.status === "success") {
      return res.data;
    } else {
      throw new Error(res.data?.message || "Failed to fetch articles");
    }
  } catch (error) {
    console.error("Error in getAllArticles:", error);
    throw error;
  }
};

// Get article by ID (public endpoint - no auth required)
export const getArticleById = async (articleId) => {
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
      `/articles/get_article_by_id?article_id=${articleId}`,
      config
    );

    if (res.data && res.data.status === "success") {
      return res.data;
    } else {
      throw new Error(res.data?.message || "Failed to fetch article");
    }
  } catch (error) {
    console.error("Error in getArticleById:", error);
    throw error;
  }
};

// Update article
export const updateArticle = async (articleId, articleData) => {
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
    `/articles/update_article?article_id=${articleId}`,
    articleData,
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
    throw new Error(res.data?.message || "Failed to update article");
  }
};

// Delete article
export const deleteArticle = async (articleId) => {
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
    `/articles/delete_article?article_id=${articleId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (res.data && res.data.status === "success") {
    return res.data;
  } else {
    throw new Error(res.data?.message || "Failed to delete article");
  }
};

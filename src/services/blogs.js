import instance from "../network";

// Get presigned URL for image upload
export const getBlogImagePresignedUrl = async (
  fileName,
  fileType,
  fileSize
) => {
  // Get the correct token - check both localStorage and cookies
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

  // Use blogs endpoint directly
  const res = await instance.post(
    "/blogs/get_presigned_url",
    {
      file_name: fileName,
      file_type: fileType,
      file_size: fileSize,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );

  // Check if the response indicates success
  if (res.data && res.data.status === "success") {
    return res.data;
  } else {
    throw new Error(res.data?.message || "Failed to get upload URL");
  }
};

// Upload image directly to cloud storage using presigned URL
export const uploadImageToCloud = async (presignedUrl, file) => {
  try {
    // Validate file size (10MB limit)
    const maxSize = 10 * 1024 * 1024; // 10MB
    if (file.size > maxSize) {
      throw new Error("File size exceeds 10MB limit");
    }

    // Validate file type
    const allowedTypes = ["image/jpeg", "image/png", "image/gif", "image/webp"];
    if (!allowedTypes.includes(file.type)) {
      throw new Error(
        "Invalid file type. Only JPEG, PNG, GIF, and WebP are allowed"
      );
    }

    // Upload directly to cloud storage using the presigned URL
    const uploadResponse = await fetch(presignedUrl, {
      method: "PUT",
      body: file,
      headers: {
        "Content-Type": file.type,
      },
    });

    if (!uploadResponse.ok) {
      console.error(
        "Direct upload failed:",
        uploadResponse.status,
        uploadResponse.statusText
      );
      console.error(
        "Response headers:",
        Object.fromEntries(uploadResponse.headers.entries())
      );

      // Try to get error details from response
      let errorDetails = "";
      try {
        const errorText = await uploadResponse.text();
        errorDetails = errorText ? ` - ${errorText}` : "";
      } catch (e) {
        // Ignore error reading response body
      }

      throw new Error(
        `Upload failed with status: ${uploadResponse.status}${errorDetails}`
      );
    }

    return { success: true, message: "File uploaded successfully" };
  } catch (error) {
    console.error("Upload failed:", error);
    throw new Error(`Failed to upload image: ${error.message}`);
  }
};

// Create a new blog
export const createBlog = async (blogData) => {
  try {
    // Get the correct token - check both localStorage and cookies
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

    const res = await instance.post("/blogs/create_blog", blogData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    return res.data;
  } catch (error) {
    console.error("Blog creation error:", {
      status: error.response?.status,
      data: error.response?.data,
      message: error.message,
    });
    const message =
      error?.response?.data?.message ||
      error?.message ||
      "Failed to create blog";
    throw new Error(message);
  }
};

// Update an existing blog
export const updateBlog = async (blogId, blogData) => {
  try {
    // Get the correct token - check both localStorage and cookies
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
      `/blogs/update_blog?blog_id=${blogId}`,
      blogData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    return res.data;
  } catch (error) {
    const message =
      error?.response?.data?.message ||
      error?.message ||
      "Failed to update blog";
    throw new Error(message);
  }
};

// Get all blogs
export const getAllBlogs = async () => {
  try {
    // Get the correct token - check both localStorage and cookies
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

    const res = await instance.get("/blogs/get_all_blogs", {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    return res.data;
  } catch (error) {
    const message =
      error?.response?.data?.message ||
      error?.message ||
      "Failed to fetch blogs";
    throw new Error(message);
  }
};

// Get blog by slug
export const getBlogBySlug = async (slug) => {
  try {
    // Get the correct token - check both localStorage and cookies
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

    const res = await instance.get(`/blogs/get_blog_by_slug/${slug}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    return res.data;
  } catch (error) {
    const message =
      error?.response?.data?.message ||
      error?.message ||
      "Failed to fetch blog";
    throw new Error(message);
  }
};

// Delete blog
export const deleteBlog = async (blogId) => {
  try {
    // Get the correct token - check both localStorage and cookies
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

    const res = await instance.delete(`/blogs/delete_blog?blog_id=${blogId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    return res.data;
  } catch (error) {
    const message =
      error?.response?.data?.message ||
      error?.message ||
      "Failed to delete blog";
    throw new Error(message);
  }
};

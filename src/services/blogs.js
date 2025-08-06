import instance from "../network";



// Get presigned URL for image upload
export const getBlogImagePresignedUrl = async (fileName, fileType, fileSize) => {
    // Get the correct token - check both localStorage and cookies
    const token = localStorage.getItem("token") || 
                 localStorage.getItem("access_token") || 
                 document.cookie.split('; ').find(row => row.startsWith('access_token='))?.split('=')[1];
    
    if (!token) {
        throw new Error("No authentication token found. Please log in again.");
    }

    // Use blogs endpoint directly
    const res = await instance.post("/blogs/get_presigned_url", {
        file_name: fileName
    }, {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    });
    
    // Check if the response indicates success
    if (res.data && res.data.status === "success") {
        return res.data;
    } else {
        throw new Error(res.data?.message || "Failed to get upload URL");
    }
};

// Upload image to cloud storage using backend proxy
export const uploadImageToCloud = async (presignedUrl, file) => {
    try {
        // Create FormData for the proxy upload
        const formData = new FormData();
        formData.append('file', file);
        formData.append('presigned_url', presignedUrl);
        
        // Get authentication token
        const token = localStorage.getItem("token") || 
                     localStorage.getItem("access_token") || 
                     document.cookie.split('; ').find(row => row.startsWith('access_token='))?.split('=')[1];
        
        // Upload through our backend proxy
        const uploadResponse = await fetch('/api/upload-image', {
            method: 'POST',
            body: formData,
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        
        if (!uploadResponse.ok) {
            const errorData = await uploadResponse.json();
            throw new Error(errorData.error || `Upload failed with status: ${uploadResponse.status}`);
        }
        
        const result = await uploadResponse.json();
        
        if (!result.success) {
            throw new Error(result.error || 'Upload failed');
        }
        
        return result;
    } catch (error) {
        console.error('Backend proxy upload failed:', error);
        throw new Error(`Failed to upload image: ${error.message}`);
    }
};

// Create a new blog
export const createBlog = async (blogData) => {
    try {
        // Get the correct token - check both localStorage and cookies
        const token = localStorage.getItem("token") || 
                     localStorage.getItem("access_token") || 
                     document.cookie.split('; ').find(row => row.startsWith('access_token='))?.split('=')[1];
        
        console.log("Token for blog creation:", token ? `${token.substring(0, 20)}...` : "NOT FOUND");
        console.log("Token sources:", {
            localStorage_token: localStorage.getItem("token") ? "EXISTS" : "NOT FOUND",
            localStorage_access_token: localStorage.getItem("access_token") ? "EXISTS" : "NOT FOUND",
            cookie_access_token: document.cookie.includes("access_token") ? "EXISTS" : "NOT FOUND"
        });
        
        if (!token) {
            throw new Error("No authentication token found. Please log in again.");
        }

        const res = await instance.post("/blogs/create_blog", blogData, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });
        return res.data;
    } catch (error) {
        console.error("Blog creation error:", {
            status: error.response?.status,
            data: error.response?.data,
            message: error.message
        });
        const message = error?.response?.data?.message || error?.message || "Failed to create blog";
        throw new Error(message);
    }
};

// Update an existing blog
export const updateBlog = async (blogId, blogData) => {
    try {
        // Get the correct token - check both localStorage and cookies
        const token = localStorage.getItem("token") || 
                     localStorage.getItem("access_token") || 
                     document.cookie.split('; ').find(row => row.startsWith('access_token='))?.split('=')[1];
        
        if (!token) {
            throw new Error("No authentication token found. Please log in again.");
        }

        const res = await instance.put(`/blogs/update_blog?blog_id=${blogId}`, blogData, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });
        return res.data;
    } catch (error) {
        const message = error?.response?.data?.message || error?.message || "Failed to update blog";
        throw new Error(message);
    }
};

// Get all blogs
export const getAllBlogs = async () => {
    try {
        // Get the correct token - check both localStorage and cookies
        const token = localStorage.getItem("token") || 
                     localStorage.getItem("access_token") || 
                     document.cookie.split('; ').find(row => row.startsWith('access_token='))?.split('=')[1];
        
        if (!token) {
            throw new Error("No authentication token found. Please log in again.");
        }

        const res = await instance.get("/blogs/get_all_blogs", {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });
        return res.data;
    } catch (error) {
        const message = error?.response?.data?.message || error?.message || "Failed to fetch blogs";
        throw new Error(message);
    }
};

// Get blog by slug
export const getBlogBySlug = async (slug) => {
    try {
        // Get the correct token - check both localStorage and cookies
        const token = localStorage.getItem("token") || 
                     localStorage.getItem("access_token") || 
                     document.cookie.split('; ').find(row => row.startsWith('access_token='))?.split('=')[1];
        
        if (!token) {
            throw new Error("No authentication token found. Please log in again.");
        }

        const res = await instance.get(`/blogs/get_blog_by_slug/${slug}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });
        return res.data;
    } catch (error) {
        const message = error?.response?.data?.message || error?.message || "Failed to fetch blog";
        throw new Error(message);
    }
};

// Delete blog
export const deleteBlog = async (blogId) => {
    try {
        // Get the correct token - check both localStorage and cookies
        const token = localStorage.getItem("token") || 
                     localStorage.getItem("access_token") || 
                     document.cookie.split('; ').find(row => row.startsWith('access_token='))?.split('=')[1];
        
        if (!token) {
            throw new Error("No authentication token found. Please log in again.");
        }

        const res = await instance.delete(`/blogs/delete_blog?blog_id=${blogId}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });
        return res.data;
    } catch (error) {
        const message = error?.response?.data?.message || error?.message || "Failed to delete blog";
        throw new Error(message);
    }
}; 
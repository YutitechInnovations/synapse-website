import instance from "@/network/index";

// ✅ Fetch Testimonials
export const fetchTestimonials = async (queryString) => {
    try {
        const res = await instance.get(`/testimonials/get_testimonials${queryString}`);
        return res.data;
    } catch (error) {
        const message =
            error?.response?.data?.message || error?.message || "Failed to fetch testimonials";
        throw new Error(message);
    }
};

// ✅ Fetch Testimonials for verification
export const fetchTestimonialsForVerification = async () => {
    try {
        const res = await instance.get(`/admin/get_testimonials`);
        return res.data;
    } catch (error) {
        const message =
            error?.response?.data?.message || error?.message || "Failed to fetch testimonials";
        throw new Error(message);
    }
};


// ✅ Like a Testimonial
export const likeTestimonial = async (testimonialId) => {
    try {
        const res = await instance.get(`/testimonials/like_testimonial?testimonial_id=${testimonialId}`);
        return res.data;
    } catch (error) {
        const message =
            error?.response?.data?.message || error?.message || "Failed to like testimonial";
        throw new Error(message);
    }
};

// ✅ Create a Testimonial
export const createTestimonial = async (testimonialData) => {
    try {
        const res = await instance.post(`/testimonials/create_testimonial`, testimonialData);
        return res.data;
    } catch (error) {
        const message =
            error?.response?.data?.message || error?.message || "Failed to create testimonial";
        throw new Error(message);
    }
};


// ✅ Add Comment to Testimonial
export const addCommentToTestimonial = async (testimonialId, comment) => {
    try {
        const res = await instance.post(`/testimonials/add_comment_to_testimonial`, {
            testimonial_id: testimonialId,
            comment,
        });
        return res.data;
    } catch (error) {
        const message =
            error?.response?.data?.message || error?.message || "Failed to add comment to testimonial";
        throw new Error(message);
    }
};

export const getPresignedUrl = async (fileName) => {
    try {
        const res = await instance.post(`/testimonials/get_presigned_url`, { file_name: fileName });
        return res.data; // usually includes the URL and key
    } catch (error) {
        const message =
            error?.response?.data?.message || error?.message || "Failed to get presigned URL";
        throw new Error(message);
    }
};

export const getTestimonialCommentsById = async (testimonialId) => {
    try {
        const res = await instance.get(`/testimonials/get_testimonial_comments_by_id?testimonial_id=${testimonialId}`);
        return res.data;
    } catch (error) {
        console.log(error)

    }
};

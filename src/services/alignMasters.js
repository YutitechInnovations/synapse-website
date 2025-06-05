import instance from "@/network/index";


export const fetchTestimonials = async (queryString) => {
    try {
        const res = await instance.get(`/testimonials/get_testimonials${queryString}`); // Adjust path if needed
        return res.data
            ; // Axios wraps the data inside `data`
    } catch (error) {
        const message =
            error?.response?.data?.message || error?.message || "Failed to testimonials doctors";
        throw new Error(message);
    }
};

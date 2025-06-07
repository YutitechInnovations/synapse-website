// hooks/useTestimonials.js
import {
    addCommentToTestimonial,
    createTestimonial,
    fetchTestimonials,
    fetchTestimonialsForVerification,
    getTestimonialCommentsById,
    updateTestimonialStatus,
} from "@/services/alignMasters";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useTestimonials = (queryString) => {
    return useQuery({
        queryKey: ["testimonials", queryString],
        queryFn: () => fetchTestimonials(queryString),
        staleTime: 20 * 60 * 1000, // 20 minutes
        cacheTime: 20 * 60 * 1000,
    });
};

export const useTestimonialsComments = (testimonial_id) => {
    return useQuery({
        queryKey: ["testimonialsComments", testimonial_id],
        queryFn: () => getTestimonialCommentsById(testimonial_id),
        staleTime: 20 * 60 * 1000, // 20 minutes
        cacheTime: 20 * 60 * 1000,
        enabled: !!testimonial_id,
    });
};

export const useDoctorsTestimonials = () => {
    return useQuery({
        queryKey: ["doctors testimonials"],
        queryFn: () => fetchTestimonialsForVerification(),
        staleTime: 20 * 60 * 1000, // 20 minutes
        cacheTime: 20 * 60 * 1000,
    });
};

export const useMutateComment = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async ({ testimonialId, comment }) => {
            return await addCommentToTestimonial(testimonialId, comment);
        },
        onSuccess: (_, { testimonialId }) => {
            // Invalidate only the comments of that testimonial
            queryClient.invalidateQueries({
                queryKey: ["testimonialsComments", testimonialId],
            });
        },
        onError: (error) => {
            console.error("Adding comment failed:", error.message);
        },
    });
};

export const useMutateTestimonial = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (data) => {
            if (data.type === "create") {
                return await createTestimonial(data.payload);
            }
            if (data.type === "updateStatus") {
                const { testimonial_id, status } = data.payload;
                return await updateTestimonialStatus(testimonial_id, status);
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["testimonials"] });
        },
        onError: (error) => {
            console.error("Testimonial mutation failed:", error.message || error);
        },
    });
};

// hooks/useTestimonials.js
import { fetchTestimonials, getTestimonialCommentsById } from "@/services/alignMasters";
import { useQuery } from "@tanstack/react-query";

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
        enabled: !!testimonial_id
    });
};

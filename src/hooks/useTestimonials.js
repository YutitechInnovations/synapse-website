// hooks/useTestimonials.js
import { fetchTestimonials } from "@/services/alignMasters";
import { useQuery } from "@tanstack/react-query";

export const useTestimonials = (queryString) => {
    return useQuery({
        queryKey: ["testimonials", queryString],
        queryFn: () => fetchTestimonials(queryString),
        staleTime: 20 * 60 * 1000, // 20 minutes
        cacheTime: 20 * 60 * 1000,
    });
};

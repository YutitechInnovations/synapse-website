// hooks/useDoctors.js
import { fetchDoctors } from "@/services/doctors";
import { useQuery } from "@tanstack/react-query";



export const useDoctors = () => {
    return useQuery({
        queryKey: ["doctors"],
        queryFn: fetchDoctors,
        staleTime: 20 * 60 * 1000, // 20 minutes in milliseconds
        cacheTime: 20 * 60 * 1000, // Optional: retain in cache for 20 min
    });
};

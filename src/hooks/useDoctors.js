// hooks/useDoctors.js
import { approveDoctors, fetchDoctors, rejectDoctors } from "@/services/doctors";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useDoctors = (queryString) => {
    return useQuery({
        queryKey: ["doctors", queryString],
        queryFn: () => fetchDoctors(queryString),
        staleTime: 20 * 60 * 1000, // 20 minutes
        cacheTime: 20 * 60 * 1000,
    });
};


export const useHandleDoctorStatus = (queryString) => {
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: async ({ userId, status }) => {
            console.log("🔍 Status received in mutation:", status, userId);
            if (status === "Approve") {
                return await approveDoctors(userId);
            } else if (status === "Reject") {
                return await rejectDoctors(userId);
            } else {
                throw new Error("Unknown status");
            }
        },
        onSuccess: (data, variables) => {
            const { userId, status } = variables;

            // Update cached data in place
            queryClient.setQueryData(["doctors", queryString], (oldData) => {
                console.log(oldData, 'old data')
                if (!oldData) return oldData;

                return {
                    ...oldData,
                    data: oldData.data.map((doctor) =>
                        doctor.user_id === userId ? { ...doctor, status } : doctor
                    ),
                };
            });
        },
        onError: (error) => {
            console.error("Mutation error:", error.message);
        },
    });

    return mutation;
};
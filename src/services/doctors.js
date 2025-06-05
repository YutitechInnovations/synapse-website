import instance from "@/network/index";


export const fetchDoctors = async () => {
    try {
        const res = await instance.get("/sso/admin/doctors"); // Adjust path if needed
        return res.data
            ; // Axios wraps the data inside `data`
    } catch (error) {
        const message =
            error?.response?.data?.message || error?.message || "Failed to fetch doctors";
        throw new Error(message);
    }
};
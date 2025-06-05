import instance from "@/network/index";

export const doctorLogin = async (payload) => {
    try {
        const res = await instance.post("sso/doctor/login", payload);
        const data = res.data;

        if (data.status !== "success") {
            throw new Error(data.message || "Login failed");
        }

        return data; // { message, status, doctor_id, email, full_name, token }
    } catch (error) {
        throw error.response?.data || new Error("Login failed");
    }
};

export const adminLogin = async (payload) => {
    try {
        const res = await instance.post("/sso/admin/login", payload);
        const data = res.data;

        if (data.status !== "success") {
            throw new Error(data.message || "Login failed");
        }

        return data; // { message, status, doctor_id, email, full_name, token }
    } catch (error) {
        throw error.response?.data || new Error("Login failed");
    }
};



export const registerDoctor = async (data) => {
    // Prepare payload matching your API body structure
    const payload = {
        full_name: data.name,
        email: data.email,
        mobile_number: data.mobile,
        country_code: "+91", // static or from input if you want
        ios_number: data.registrationNumber || "", // assuming this corresponds to registrationNumber field
        password: data.password,
    };

    try {
        const response = await instance.post(`sso/doctor/register`, payload);
        return response.data; // return the API response data
    } catch (error) {
        // throw error to be caught by caller
        throw error.response?.data || error.message || "Registration failed";
    }
};
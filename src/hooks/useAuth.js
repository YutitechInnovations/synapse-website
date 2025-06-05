// hooks/useAuth.js
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

export const useAuth = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Get user data from cookies
        const userCookie = Cookies.get("user");

        if (userCookie) {
            try {
                const parsedUser = JSON.parse(userCookie);
                setUser(parsedUser);
            } catch (err) {
                console.error("Error parsing user cookie", err);
                setUser(null);
            }
        } else {
            setUser(null);
        }
    }, []);

    return user; // Will return null if not logged in or invalid
};

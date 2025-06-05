// middleware.constants.js

export const PUBLIC_ROUTES = [
    "/login",
    "/",
    "/education",
    "/faq",
    "/aboutus",
    "/blogs",
    "/signup",
    "/admin"
];
export const VIEW_ONLY_ROUTES = [];

export const ROLE = {
    USER: 2,
    OWNER: 1,
};

export const ADMIN_ROUTES = ["/admin/dashboard", "admin/doctor-management", 'admin/reward-program'];

export const USER_ROUTES = [
    "/reward-program",
    "/alignmasters",
    "/orthosync",
    "/rxtrack",
];

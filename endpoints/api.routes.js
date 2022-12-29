const authApiPrefix = '/api';

export const API_ROUTES = {
    // auth routes
    CHECK_AUTH: `${authApiPrefix}/auth`,
    LOGIN: `${authApiPrefix}/auth/login`,
    LOGOUT: `${authApiPrefix}/auth/logout`,
    REGISTER: `${authApiPrefix}/auth/register`,
}
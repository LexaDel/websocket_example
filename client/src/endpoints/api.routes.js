const authApiPrefix = '/api';
const baseUrl = '/api/v1/data';

export const API_ROUTES = {
    // auth routes
    CHECK_AUTH: `${authApiPrefix}/auth`,
    LOGIN: `${authApiPrefix}/auth/login`,
    LOGOUT: `${authApiPrefix}/auth/logout`,
    REGISTER: `${authApiPrefix}/auth/register`,

    USER_INFO: `${baseUrl}/user/:userId`,
}

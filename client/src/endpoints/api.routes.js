const authApiPrefix = '/api/auth';
const baseUrl = '/api/v1/data';

export const API_ROUTES = {
    // auth routes
    CHECK_AUTH: authApiPrefix,
    LOGIN: `${authApiPrefix}/login`,
    LOGOUT: `${authApiPrefix}/logout`,
    REGISTER: `${authApiPrefix}/register`,
    REGISTER_FOR_SUPER_ADMIN: `${authApiPrefix}/registerFromPanel`,

    USER_INFO: `${baseUrl}/user/:userId`,
}

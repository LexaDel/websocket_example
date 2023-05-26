const baseUrl = '/api/v1/data';

export const USER_INFO = `${baseUrl}/user/:userId`;
export const GET_USER_LIST = `${baseUrl}/users`;
export const PATCH_USER_DATA = `${baseUrl}/users/:userId`;
export const DELETE_USER = `${baseUrl}/users/:userId`;
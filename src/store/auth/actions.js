import { AUTH_LOGIN_REQUEST, AUTH_LOGIN_SUCCESS, AUTH_LOGIN_FAILURE, AUTH_REGISTER_REQUEST, AUTH_REGISTER_SUCCESS, AUTH_REGISTER_FAILURE, AUTH_TOKEN_VALIDATE_REQUEST, AUTH_TOKEN_VALIDATE_SUCCESS, AUTH_TOKEN_VALIDATE_FAILURE, AUTH_LOGOUT } from "./types";

export const loginRequest = (payload) => ({ type: AUTH_LOGIN_REQUEST, payload });
export const loginSuccess = (user) => ({ type: AUTH_LOGIN_SUCCESS, payload: user });
export const loginFailure = (errorMessage) => ({ type: AUTH_LOGIN_FAILURE, payload: errorMessage });
export const registerRequest = (payload) => ({ type: AUTH_REGISTER_REQUEST, payload });
export const registerSuccess = (user) => ({ type: AUTH_REGISTER_SUCCESS, payload: user });
export const registerFailure = (errorMessage) => ({ type: AUTH_REGISTER_FAILURE, payload: errorMessage });
export const tokenValidateRequest = (token) => ({ type: AUTH_TOKEN_VALIDATE_REQUEST, payload: token });
export const tokenValidateSuccess = (user) => ({ type: AUTH_TOKEN_VALIDATE_SUCCESS, payload: user });
export const tokenValidateFailure = (errorMessage) => ({ type: AUTH_TOKEN_VALIDATE_FAILURE, payload: errorMessage });
export const logout = () => {
    // Clear token from storage when logging out
    const { tokenStorage } = require('../../utils/tokenStorage');
    tokenStorage.clearToken();
    return { type: AUTH_LOGOUT };
};



import { AUTH_LOGIN_FAILURE, AUTH_LOGIN_REQUEST, AUTH_LOGIN_SUCCESS, AUTH_REGISTER_FAILURE, AUTH_REGISTER_REQUEST, AUTH_REGISTER_SUCCESS, AUTH_TOKEN_VALIDATE_FAILURE, AUTH_TOKEN_VALIDATE_REQUEST, AUTH_TOKEN_VALIDATE_SUCCESS, AUTH_LOGOUT } from "./types";

const initialState = {
    isAuthenticated: false,
    loading: false,
    user: null,
    error: null,
    token: null,
    registerLoading: false,
    registerError: null,
    registerSuccess: false,
    tokenValidationLoading: false,
    tokenValidationError: null
};

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case AUTH_LOGIN_REQUEST:
            return { ...state, loading: true, error: null };
        case AUTH_LOGIN_SUCCESS:
            return { ...state, loading: false, isAuthenticated: true, user: action.payload.user, token: action.payload.token, error: null };
        case AUTH_LOGIN_FAILURE:
            return { ...state, loading: false, isAuthenticated: false, user: null, token: null, error: action.payload };
        case AUTH_REGISTER_REQUEST:
            return { ...state, registerLoading: true, registerError: null, registerSuccess: false };
        case AUTH_REGISTER_SUCCESS:
            return { ...state, registerLoading: false, registerSuccess: true, registerError: null };
        case AUTH_REGISTER_FAILURE:
            return { ...state, registerLoading: false, registerSuccess: false, registerError: action.payload };
        case AUTH_TOKEN_VALIDATE_REQUEST:
            return { ...state, tokenValidationLoading: true, tokenValidationError: null };
        case AUTH_TOKEN_VALIDATE_SUCCESS:
            return { ...state, tokenValidationLoading: false, isAuthenticated: true, user: action.payload, tokenValidationError: null };
        case AUTH_TOKEN_VALIDATE_FAILURE:
            return { ...state, tokenValidationLoading: false, isAuthenticated: false, user: null, token: null, tokenValidationError: action.payload };
        case AUTH_LOGOUT:
            return { ...initialState };
        default:
            return state;
    }
}



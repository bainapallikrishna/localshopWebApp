import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { AUTH_LOGIN_REQUEST, AUTH_REGISTER_REQUEST, AUTH_TOKEN_VALIDATE_REQUEST } from "./types";
import { loginFailure, loginSuccess, registerFailure, registerSuccess, tokenValidateFailure, tokenValidateSuccess } from "./actions";
import { tokenStorage } from "../../utils/tokenStorage";
const url="https://localhost:7075";
function* loginWorker(action) {
    try {
        const { username, email, password } = action.payload || {};
        const body = email ? { email, password } : { username, password };

        // Replace with your real endpoint
        const response = yield call(axios.post, `${url}/api/Auth/login`, body);
        const { user, token } = response?.data || {};
        
        // Store token and user data
        if (token) {
            tokenStorage.setToken(token, user);
        }
        
        yield put(loginSuccess({ user, token }));
    } catch (error) {
        const message = error?.response?.data?.message || error?.message || "Login failed";
        yield put(loginFailure(message));
    }
}

function* registerWorker(action) {
    try {
        const { username, password, role, email } = action.payload || {};
        const body = { username, password, role, email };

        // Replace with your real endpoint
        const response = yield call(axios.post, `${url}/api/Auth/register`, body);
        const user = response?.data;
        yield put(registerSuccess(user));
    } catch (error) {
        const message = error?.response?.data?.message || error?.message || "Registration failed";
        yield put(registerFailure(message));
    }
}

function* tokenValidateWorker(action) {
    try {
        const token = action.payload;
        
        // Set up axios headers with token
        const config = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        };

        // Replace with your real token validation endpoint
        const response = yield call(axios.get, `${url}/api/validate-token`, config);
        const user = response?.data;
        
        yield put(tokenValidateSuccess(user));
    } catch (error) {
        // Clear stored token if validation fails
        tokenStorage.clearToken();
        const message = error?.response?.data?.message || error?.message || "Token validation failed";
        yield put(tokenValidateFailure(message));
    }
}

export default function* authSaga() {
    yield takeLatest(AUTH_LOGIN_REQUEST, loginWorker);
    yield takeLatest(AUTH_REGISTER_REQUEST, registerWorker);
    yield takeLatest(AUTH_TOKEN_VALIDATE_REQUEST, tokenValidateWorker);
}



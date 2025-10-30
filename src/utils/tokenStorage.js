// Token storage utilities
const TOKEN_KEY = 'auth_token';
const USER_KEY = 'auth_user';

export const tokenStorage = {
    // Store token and user data
    setToken: (token, user = null) => {
        localStorage.setItem(TOKEN_KEY, token);
        if (user) {
            localStorage.setItem(USER_KEY, JSON.stringify(user));
        }
    },

    // Get stored token
    getToken: () => {
        return localStorage.getItem(TOKEN_KEY);
    },

    // Get stored user data
    getUser: () => {
        const userStr = localStorage.getItem(USER_KEY);
        try {
            return userStr ? JSON.parse(userStr) : null;
        } catch (error) {
            console.error('Error parsing stored user data:', error);
            return null;
        }
    },

    // Clear token and user data
    clearToken: () => {
        localStorage.removeItem(TOKEN_KEY);
        localStorage.removeItem(USER_KEY);
    },

    // Check if token exists
    hasToken: () => {
        return !!localStorage.getItem(TOKEN_KEY);
    }
};

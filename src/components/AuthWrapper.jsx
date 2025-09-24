import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { tokenValidateRequest } from '../store/auth/actions';
import { tokenStorage } from '../utils/tokenStorage';

const AuthWrapper = ({ children }) => {
    const dispatch = useDispatch();
    const { tokenValidationLoading, isAuthenticated } = useSelector((state) => state.auth);

    useEffect(() => {
        // Check if there's a stored token on app load
        const storedToken = tokenStorage.getToken();
        const storedUser = tokenStorage.getUser();
        
        if (storedToken && storedUser) {
            // Validate the stored token
            dispatch(tokenValidateRequest(storedToken));
        }
    }, [dispatch]);

    // Show loading spinner while validating token
    if (tokenValidationLoading) {
        return (
            <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Validating token...</span>
                </div>
            </div>
        );
    }

    return <>{children}</>;
};

export default AuthWrapper;

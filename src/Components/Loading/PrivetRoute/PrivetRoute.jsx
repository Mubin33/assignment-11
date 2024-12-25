import React, { useContext, useEffect } from 'react';  
import { useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../Firebase/AuthProvider';
import Loading from '../Loading';

const PrivetRoute = ({ children }) => {
    const { userInformation, loading } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (!loading && !userInformation) {
            navigate('/login', { state: { from: location } });
        }
    }, [loading, userInformation, navigate, location]);

    if (loading) {
        return <Loading />;
    }

    if (userInformation) {
        return children;
    }

    // Return null while useEffect handles redirection
    return null;
};

export default PrivetRoute;
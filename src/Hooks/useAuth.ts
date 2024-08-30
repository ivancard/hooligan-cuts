
import { useState, useEffect } from 'react';

export const useAuth = (): boolean => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    useEffect(() => {
        const storedUserName = localStorage.getItem('username');
        const storedPassword = localStorage.getItem('password');

        const envUserName = process.env.REACT_APP_USER_NAME;
        const envPassword = process.env.REACT_APP_USER_PASSWORD;

        if (storedUserName === envUserName && storedPassword === envPassword) {
            setIsAuthenticated(true);
        } else {
            setIsAuthenticated(false);
        }
    }, []);

    return isAuthenticated;
};

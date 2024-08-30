
import { Navigate } from 'react-router-dom';
import { useAuth } from '../Hooks/useAuth'

export const Admin = () => {
    const isAuthenticated = useAuth();

    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    return (
        <div>
            <p>Admin</p>
        </div>
    );
};
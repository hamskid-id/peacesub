import { Navigate, Outlet, useLocation } from "react-router-dom";

export const ProtectedAuthRoute = () => {
    const location = useLocation();
    const user = JSON.parse(localStorage.getItem('DataHubUserToken'));
    if (user) {
        return (
            <Navigate 
                to="/dashboard" 
                state={{ 
                    from: location 
                }}
                replace 
            />
        )    
    } else {
        if (!user) {
            return <Outlet/>;
        }
    }
    return (
        <Navigate 
                to="/dashboard" 
                state={{ 
                    from: location 
                }}
                replace 
            />
    )
};
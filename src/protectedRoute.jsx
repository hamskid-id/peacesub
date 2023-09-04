import { Navigate, Outlet, useLocation } from "react-router-dom";

export const ProtectedRoute = () => {
    const location = useLocation();
    const user = JSON.parse(localStorage.getItem('DataHubUserToken'));
    if (!user) {
        return (
            <Navigate 
                to="/" 
                state={{ 
                    from: location 
                }}
                replace 
            />
        )    
    } else {
        if (user) {
            return <Outlet/>;
        }
    }
    return (
        <Navigate
            to="/" 
            state={{ 
                from: location 
            }} 
            replace 
        />
    )
};
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
    const isAuth =true
    const navigate = useNavigate();
    if (!isAuth) {
        return <Navigate to="/login" />
    }
    return (
        <>
            {children}
        </>
    )
};

import { useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useAppSelector } from "../app/hooks";


const PrivateRoute = () => {
  const {isLoggedIn} = useAppSelector((state)=> state.Authentication)
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/signin");
    }
  }, [isLoggedIn]);

  return isLoggedIn ? <Outlet /> : <Navigate to="/signin" />;
};
export default PrivateRoute
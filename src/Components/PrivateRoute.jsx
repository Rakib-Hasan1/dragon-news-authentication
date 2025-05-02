import React, { use } from "react";
import { AuthContext } from "../ContextProvider/FirebaseAuthProvider";
import { Navigate, useLocation } from "react-router";
import LoadingEffect from "./LoadingEffect";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);

  const location = useLocation();

  if (loading) {
    return <LoadingEffect></LoadingEffect>;
  }

  if (user && user?.email) {
    return children;
  }
  return <Navigate state={location.pathname} to="/auth/login"></Navigate>;
};

export default PrivateRoute;

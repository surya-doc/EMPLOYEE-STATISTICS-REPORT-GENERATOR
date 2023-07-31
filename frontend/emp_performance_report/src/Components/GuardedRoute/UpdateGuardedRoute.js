import React from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router';
import jwt_decode from "jwt-decode";

function GuardedRoute({type}) {
    var auth = '';
    var jwtToken = localStorage.getItem("token");
  const navigate = useNavigate()
    if (!jwtToken || jwtToken===null) {
      navigate("/login");
      return null;
    }
    auth = jwtToken !== null ? jwt_decode(jwtToken) : null;
    auth = auth.role[0].authority;

  return type === auth ? <Outlet /> : <Navigate to="/" />
}

export default GuardedRoute
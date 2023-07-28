import React from 'react'
import { Navigate, Outlet } from 'react-router';
import jwt_decode from "jwt-decode";

function GuardedRoute({type}) {
    var auth = '';
    var jwtToken = localStorage.getItem("token");
    auth = jwtToken !== null ? jwt_decode(jwtToken) : null;
    auth = auth.role[0].authority;

  return type === auth ? <Outlet /> : <Navigate to="/" />
}

export default GuardedRoute
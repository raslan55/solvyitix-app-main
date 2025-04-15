import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute() {
  const isAuthenticated = localStorage.getItem("userEmail");

  return isAuthenticated ? <Outlet /> : <Navigate to="/" />;}
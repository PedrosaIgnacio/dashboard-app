import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Login } from "../../auth/Pages/Login";
import { Register } from "../../auth/Pages/Register";
export const PublicRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<Navigate to="/auth/login" />} />
      </Routes>
    </div>
  );
};

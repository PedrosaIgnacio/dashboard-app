import React from "react";
import { Routes, Route } from "react-router-dom";
import { Login } from "../../auth/Login";
import { Register } from "../../auth/Register";
import { ErrorScreen } from "../../components/ErrorScreen/ErrorScreen";
export const PublicRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<ErrorScreen />} />
      </Routes>
    </div>
  );
};

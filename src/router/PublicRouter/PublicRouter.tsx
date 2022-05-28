import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Login } from "../../auth/Login";
import { Register } from "../../auth/Register";
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

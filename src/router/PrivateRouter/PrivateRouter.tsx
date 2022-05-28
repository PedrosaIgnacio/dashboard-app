import React from "react";
import { Routes, Route } from "react-router-dom";
import { ErrorScreen } from "../../components/ErrorScreen/ErrorScreen";
import { Home } from "../../components/Pages/Home/Home";
import { Schedule } from "../../components/Pages/Schedule/Schedule";
import { SettingsPage } from "../../components/Pages/SettingsPage/SettingsPage";
import { Sidebar } from "../../components/Sidebar/Sidebar";
export const PrivateRouter = () => {
	return (
		<div className="flex">
			<Sidebar />

			<Routes>
				<Route path="" element={<Home />} />
				<Route path="schedule" element={<Schedule />} />
				<Route path="settings" element={<SettingsPage />} />
				<Route path="*" element={<ErrorScreen />} />
			</Routes>
		</div>
	);
};

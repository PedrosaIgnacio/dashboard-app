import React, { useContext, useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import UserContext from "../../auth/Context/userProvider";
import { Home } from "../../home/Pages/Home";
import { Schedule } from "../../schedule/pages/Schedule";
import { SettingsPage } from "../../settingPage/Pages/SettingsPage";
import { Sidebar } from "../../home/components/Sidebar/Sidebar";

export const PrivateRouter = () => {
  const userContext = useContext(UserContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (userContext.username === "" && !userContext.loading) {
      navigate("/auth/login", { replace: true });
    }
  }, [userContext]);

  return (
    <div>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="schedule" element={<Schedule />} />
        <Route path="settings" element={<SettingsPage />} />
      </Routes>
    </div>
  );
};

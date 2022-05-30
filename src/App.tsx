import React from "react";
import { UserProvider } from "./auth/Context/userProvider";
import { AppRouter } from "./router/AppRouter";

export const App = () => {
  return (
    <UserProvider>
      <AppRouter />
    </UserProvider>
  );
};

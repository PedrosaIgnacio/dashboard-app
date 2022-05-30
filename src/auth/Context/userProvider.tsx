import React, { ReactElement, ReactNode, useEffect } from "react";
import { Login } from "../Pages/Login";
import { createContext, useState } from "react";
import { SyncLoader } from "react-spinners";

interface IUserContextValues {
  username: string;
  login: (username: string, password: string) => void;
  logout: () => void;
  loading: boolean;
  triggerLoad: () => void;
}

interface IUserProviderValues {
  children: ReactNode;
}

const UserContext = createContext<IUserContextValues>({
  username: "",
  login: () => {},
  logout: () => {},
  loading: true,
  triggerLoad: () => {},
});

const UserProvider = ({ children }: IUserProviderValues): ReactElement => {
  const [username, setUsername] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  const triggerLoad = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    const localUsername = localStorage.getItem("username");
    console.log(localUsername);
    if (localUsername !== null) {
      setUsername(localUsername);
    }

    const interval = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const login = (username: string, password: string) => {
    if (username === "ipedrosa" && password === "ejemplo") {
      setUsername(username);
      localStorage.setItem("username", username);
    }
  };

  const logout = () => {
    setUsername("");
  };

  return (
    <UserContext.Provider
      value={{ username, login, logout, loading, triggerLoad }}
    >
      {!loading ? (
        children
      ) : (
        <div className="flex justify-center items-center min-h-screen">
          <SyncLoader />
        </div>
      )}
    </UserContext.Provider>
  );
};

export default UserContext;
export { UserProvider };

import React, { useContext, useState } from "react";
import "./Login.css";
import loginBg from "../../assets/login-bg.jpg";
import logoDashboard from "../../assets/Logo-Dashboard.png";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../Context/userProvider";

export const Login = () => {
  const { login, triggerLoad } = useContext(UserContext);

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const navigate = useNavigate();

  return (
    <section className="h-screen">
      <div className="xl:flex l:flex md:flex sm:flex h-full w-full xxs">
        <div className="xl:w-4/6 l:w-4/6 md:w-2/6 sm:w-2/6 w-full">
          <img src={loginBg} className="w-full h-full object-cover" />
        </div>
        <div className="xl:w-2/6 l:w-2/6 md:w-4/6 sm:w-4/6 flex flex-col justify-center items-center mt-0 ">
          <div className="xl:w-4/6 l:w-4/6 md:w-2/6 sm:w-2/6 w-2/6">
            <img src={logoDashboard} alt="..." className="object-cover" />
          </div>
          <form className="xl:px-8 xl:w-4/6 l:w-4/6 l:px-8 md:w-4/6 md:px-8 sm:w-4/6 px-0 mt-4 ">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none form-control"
                id="username"
                type="text"
                placeholder="Username"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none form-control"
                id="password"
                type="password"
                placeholder="Password"
              />
            </div>
            <div className="mb-4">
              <button
                type="button"
                className="bg-slate-800 hover:bg-slate-700 rounded py-2 px-6  text-slate-50"
                onClick={(e) => {
                  e.preventDefault();
                  login(username, password);

                  triggerLoad();
                  navigate("/", { replace: true });
                }}
              >
                Login
              </button>
            </div>
            <div className="mb-4">
              <span className="mr-3">You do not have an account?</span>
              <Link
                className="font-bold text-slate-400 hover:text-slate-500"
                to="/auth/register"
              >
                Sign In
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

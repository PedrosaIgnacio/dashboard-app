import React from "react";
import "./Login.css";
import loginBg from "../assets/login-bg.jpg";
import logoDashboard from "../assets/Logo-Dashboard.png";
import { Link } from "react-router-dom";

export const Register = () => {
  return (
    <section className="h-screen">
      <div className="flex h-full w-full">
        <div className="xl:w-4/6 l:w-4/6 md:w-2/6 sm:w-2/6 h-full w-full">
          <img src={loginBg} className="w-full h-full object-cover" />
        </div>
        <div className="xl:w-2/6 l:w-2/6 md:w-4/6 sm:w-4/6 flex flex-col justify-center items-center mt-0 h-full">
          <div className="xl:w-4/6 l:w-4/6 md:w-2/6 sm:w-2/6 w-full">
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
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none form-control"
                id="password"
                type="password"
                placeholder="Password"
              />
            </div>
            <div className="mb-4">
              <button className="bg-slate-800 hover:bg-slate-700 rounded py-2 px-6  text-slate-50">
                Sign Up
              </button>
            </div>
            <div className="mb-4">
              <span className="mr-3">Do you have an account ?</span>
              <Link
                className="font-bold text-slate-400 hover:text-slate-500"
                to="/auth/login"
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

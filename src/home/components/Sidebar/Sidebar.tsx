import React, { useState } from "react";
import { MdArrowForwardIos } from "react-icons/md";
import { SidebarData as data } from "./SidebarData";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import fotoPerfil from "../../../assets/fotoPerfil.png";
import { RiLogoutBoxRLine } from "react-icons/ri";

export const Sidebar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  const location = useLocation();
  const pathName = location.pathname;

  return (
    <div
      className={`${
        !open ? "w-full" : "w-1/2"
      }  bg-slate-800 relative duration-500 p-5 pt-8 min-h-screen`}
    >
      <MdArrowForwardIos
        className={`${
          !open && "rotate-180"
        } absolute cursor-pointer -right-3 top-9 w-7 border-2 border-slate-800 bg-slate-50 rounded-full`}
        onClick={() => {
          setOpen(!open);
        }}
      />
      <ul className={`${open ? "items-center flex flex-col" : "block"} pt-6`}>
        {data.map((item) => {
          return (
            <li key={item.id}>
              <Link
                key={item.id}
                to={item.path}
                className={`${
                  item.gap ? "mt-9" : "mt-2"
                } flex items-center text-gray-300 text-sm gap-x-4 cursor-pointer ${
                  pathName === item.path ? "bg-slate-50 text-slate-800 " : ""
                }p-3 hover:bg-slate-50 rounded-md hover:text-slate-800 hover:duration-1000`}
              >
                {item.icon}
                <span
                  className={`${open && "hidden"} origin-left duration-200`}
                >
                  {item.name}
                </span>
              </Link>
            </li>
          );
        })}
        <li>
          <Link
            to={"/auth/login"}
            className="mt-9 flex items-center text-gray-300 text-sm gap-x-4 cursor-pointer p-3 hover:bg-slate-50 rounded-md hover:text-slate-800 hover:duration-1000"
          >
            <RiLogoutBoxRLine />
            <span className={`${open && "hidden"} origin-left duration-200`}>
              Logout
            </span>
          </Link>
        </li>
        <li>
          <div className="flex items-center justify-center mt-9">
            <img
              className="w-10 h-10 rounded-full mr-4"
              src={fotoPerfil}
              alt="Avatar of Pedrosa Ignacio"
            />
            <div className="text-sm">
              <p className={`text-gray-300 leading-none ${open && "hidden"}`}>
                Ignacio Pedrosa
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

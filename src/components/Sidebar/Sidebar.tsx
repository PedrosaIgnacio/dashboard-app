import React, { useState } from "react";
import { MdArrowForwardIos } from "react-icons/md";
import { SidebarData as data } from "./SidebarData";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [pathName, setPathName] = useState<string>("");
  console.log(pathName);
  return (
    <div
      className={`${
        !open ? "w-60" : "w-20"
      } h-screen bg-slate-800 relative duration-500 p-5 pt-8`}
    >
      <MdArrowForwardIos
        className={`${
          !open && "rotate-180"
        } absolute cursor-pointer -right-3 top-9 w-7 border-2 border-slate-800 bg-slate-50 rounded-full`}
        onClick={() => {
          setOpen(!open);
        }}
      />
      <ul className="pt-6">
        {data.map((item) => {
          return (
            <li key={item.id}>
              <Link
                key={item.id}
                to={item.path}
                onClick={() => {
                  setPathName(item.path);
                }}
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
          <div className="flex items-center bottom-full mt-9">
            <img
              className="w-10 h-10 rounded-full mr-4"
              src="https://v1.tailwindcss.com/img/jonathan.jpg"
              alt="Avatar of Jonathan Reinink"
            />
            <div className="text-sm">
              <p className={`text-gray-300 leading-none ${open && "hidden"}`}>
                Jonathan Reinink
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

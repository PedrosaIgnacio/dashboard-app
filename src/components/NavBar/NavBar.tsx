import React, { ReactNode } from "react";

interface INavbarProps {
  children: ReactNode;
}

export const NavBar = ({ children }: INavbarProps) => {
  return (
    <div className="flex w-full h-11 bg-slate-800 text-slate-gray-300">
      {children}
    </div>
  );
};

import React, { ReactNode } from "react";
import { Sidebar } from "../Sidebar/Sidebar";

interface ILayoutProps {
  children: ReactNode;
  title: string;
}

export const Layout = ({ children, title }: ILayoutProps) => {
  return (
    <main className="grid grid-cols-8">
      <Sidebar />
      <div className="col-span-7 mx-4 font-sans pt-8">
        <span className="font-bold text-slate-700 ">{title.toUpperCase()}</span>
        <hr className="my-4" />
        {children}
      </div>
    </main>
  );
};

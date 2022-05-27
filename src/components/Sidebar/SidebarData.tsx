import React, { ReactElement } from "react";
import { AiFillHome } from "react-icons/ai";
import { BsFillCalendar2DayFill } from "react-icons/bs";
import { IoSettingsSharp } from "react-icons/io5";
import { RiLogoutBoxRLine } from "react-icons/ri";

interface ISidebarItem {
  id: number;
  name: string;
  icon: ReactElement;
  path: string;
  size: string;
  gap: boolean;
}

export const SidebarData: ISidebarItem[] = [
  {
    id: 1,
    name: "Home",
    icon: <AiFillHome />,
    path: "",
    size: "1em",
    gap: false,
  },
  {
    id: 2,
    name: "Schedule",
    icon: <BsFillCalendar2DayFill />,
    path: "schedule",
    size: "1em",
    gap: false,
  },
  {
    id: 3,
    name: "Settings",
    icon: <IoSettingsSharp />,
    path: "settings",
    size: "1em",
    gap: false,
  },
  {
    id: 4,
    name: "Logout",
    icon: <RiLogoutBoxRLine />,
    path: "/auth/login",
    size: "1em",
    gap: true,
  },
];

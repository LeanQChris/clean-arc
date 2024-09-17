"use client";
import { usePathname } from "next/navigation";

import React from "react";
import Link from "next/link";
import { ChevronRightIcon, GridIcon, PersonIcon } from "@radix-ui/react-icons";
import { appStore } from "@/_common/store/app.store";
import { ModeToggle } from "../ui/buttons/toggle-mode";

interface IsidebarItems {
    title: string;
    link: string;
    icon: React.ReactNode;
}
const sidebarItems: IsidebarItems[] = [
    {
        title: "Users", link: "/admin", icon: <PersonIcon />
    },
    { title: "Categories", link: "/admin/category", icon: <GridIcon /> },
];

const Sidebar = () => {
    const { showSidebar, toggleSidebar } = appStore();
    const pathname = usePathname();

    return (
        <div className="h-screen">
            <div
                id="sidebar"
                className={`h-screen transition-all ${showSidebar ? "w-64" : "w-16"} transition-transform`}
                aria-label="Sidebar"
            >
                <div className="flex h-full flex-col overflow-y-auto shadow-lg px-3 py-4">
                    <div className={`py-6 flex items-center ${showSidebar ? "justify-between" : "justify-center"}`}>
                        <button className={`${showSidebar ? "rotate-180" : "rotate-0"} w-fit`}>
                            <ChevronRightIcon
                                height={20}
                                width={20}
                                onClick={toggleSidebar} />
                        </button>
                    </div>
                    <ul className="space-y-2 text-sm font-medium">
                        {sidebarItems.map((sidebar, index) => (
                            <li key={index}>
                                <Link
                                    href={sidebar.link}
                                    className={`flex items-center rounded-lg px-3 py-2  hover:bg-gray-100 hover:text-slate-900  dark:hover:bg-gray-300 ${pathname == sidebar.link && "bg-slate-100 text-slate-900"}`}
                                >
                                    {sidebar.icon}
                                    {showSidebar && <span className="ml-3 flex-1 whitespace-nowrap">
                                        {sidebar.title}
                                    </span>}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-auto flex flex-col">
                        <ModeToggle />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;

"use client";
import { usePathname } from "next/navigation";

import React from "react";
import Link from "next/link";
import { GridIcon, PersonIcon } from "@radix-ui/react-icons";
interface IsidebarItems {
    title: string;
    link: string;
    icon: React.ReactNode;
}
const sidebarItems: IsidebarItems[] = [
    {
        title: "Users", link: "/", icon: <PersonIcon />
    },
    { title: "Categories", link: "/category", icon: <GridIcon /> },
];

const Sidebar = () => {
    const pathname = usePathname();

    return (
        <div className="h-screen">
            <div
                id="sidebar"
                className=" h-screen w-64 transition-transform"
                aria-label="Sidebar"
            >
                <div className="flex h-full flex-col overflow-y-auto border-r border-slate-500 px-3 py-4">
                    <Link href="/">
                        <div className="mb-10 flex items-center rounded-lg px-3 py-2 text-white dark:text-white">
                            Admin
                        </div>
                    </Link>
                    <ul className="space-y-2 text-sm font-medium">
                        {sidebarItems.map((sidebar, index) => (
                            <li key={index}>
                                <Link
                                    href={sidebar.link}
                                    className={`flex items-center rounded-lg px-3 py-2  hover:bg-slate-100 hover:text-slate-900  dark:hover:bg-slate-700 ${pathname == sidebar.link
                                        ? "bg-slate-100 text-slate-900"
                                        : "text-white"
                                        }`}
                                >
                                    {sidebar.icon}
                                    <span className="ml-3 flex-1 whitespace-nowrap">
                                        {sidebar.title}
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-auto flex">
                        <div className="flex w-full justify-between">
                            <span className="text-sm font-medium text-white">
                                contact@techyatraa.com
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;

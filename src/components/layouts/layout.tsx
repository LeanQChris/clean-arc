"use client";

import { useRouter } from "next/router";
import { useState } from "react";
import Sidebar from "./sidebar"; // Import the Sidebar component

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [showSidebar, setShowSidebar] = useState(true);
  const year = new Date().getFullYear();

  const handleLogout = () => {
    console.log("Logout");
    router.push("/login");
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Render Sidebar */}
      {showSidebar && <Sidebar />}

      {/* Main content area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="flex justify-between items-center bg-white p-4 shadow">
          <div className="font-bold text-lg">App Title</div>
          <div className="flex items-center space-x-4">
            {/* Profile icon */}
            <div className="w-10 h-10 bg-gray-300 rounded-full" />
            {/* Logout button */}
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Logout
            </button>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-6">{children}</main>

        {/* Footer */}
        <footer className="bg-white text-center p-4 shadow">
          <p>&copy; {year} Your Company. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

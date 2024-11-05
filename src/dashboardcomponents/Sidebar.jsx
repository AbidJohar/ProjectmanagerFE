// src/components/Sidebar.js
import { FaProjectDiagram, FaTasks, FaChartPie, FaCog } from "react-icons/fa";
import { Link } from "react-router-dom";
import React, { useState } from "react";

const Sidebar = () => {
  const [userRole, setUserRole] = useState("admin");

  return (
    <div className="h-screen w-[10rem] bg-blue-600 text-white p-4">
      {userRole === "user" ? (
        <div className="">
          <h2 className="text-xl font-bold mb-8">Menu</h2>
          <ul>
            <li className="flex items-center py-2 hover:bg-gray-700">
              <Link to="" className="flex items-center">
                <FaProjectDiagram className="mr-3" /> Projects
              </Link>
            </li>
            <li className="flex items-center py-2 hover:bg-gray-700">
              <FaTasks className="mr-3" /> Tasks
            </li>
            <li className="flex items-center py-2 hover:bg-gray-700">
              <FaChartPie className="mr-3" /> Reports
            </li>
            <li className="flex items-center py-2 hover:bg-gray-700">
              <FaCog className="mr-3" /> Settings
            </li>
          </ul>
        </div>
      ) : (
        //Admin Sidebar
        //Admin Sidebar
        //Admin Sidebar
        //Admin Sidebar
        //Admin Sidebar
        <div className="">
          <h2 className="text-xl font-bold mb-8">Menu</h2>
          <ul>
            <li className="flex items-center py-2 hover:bg-gray-700">
              <Link to="/dashboard/projects" className="flex items-center">
                <FaProjectDiagram className="mr-3" /> Projects
              </Link>
            </li>
            <li className="flex items-center py-2 hover:bg-gray-700">
              <FaTasks className="mr-3" /> Tasks
            </li>
            <li className="flex items-center py-2 hover:bg-gray-700">
              <FaChartPie className="mr-3" /> Reports
            </li>
            <li className="flex items-center py-2 hover:bg-gray-700">
              <FaChartPie className="mr-3" /> Teams
            </li>
            <li className="flex items-center py-2 hover:bg-gray-700">
              <FaCog className="mr-3" /> Settings
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sidebar;

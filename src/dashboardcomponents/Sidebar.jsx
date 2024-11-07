import { useNavigate } from "react-router-dom";
import { FaProjectDiagram, FaTasks, FaChartPie, FaCog, FaSignOutAlt } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import { useState } from "react";
const Sidebar = () => {
  const navigate = useNavigate();
  const handleNavigation = (path) => navigate(path);

  return (
    <div className="h-screen w-[10rem] bg-[#093b6c] text-white py-4 px-0">
      <div className="flex items-center justify-center mb-10 gap-2">
       <img
              src="https://randomuser.me/api/portraits/men/75.jpg"
              alt="Profile"
              className="rounded-full w-10 h-10 border-2 border-white"
            />
          <p>Abid Hussain</p>
          </div>
      <ul>
        <li onClick={() => handleNavigation("projects")} className="flex items-center  px-2 cursor-pointer py-2 hover:bg-gray-700">
          <FaProjectDiagram className="mr-3" /> Projects
        </li>
        <li onClick={() => handleNavigation("tasks")} className="flex items-center py-2 px-2 cursor-pointer hover:bg-gray-700">
          <FaTasks className="mr-3" /> Tasks
        </li>
        <li onClick={() => handleNavigation("reports")} className="flex items-center py-2 px-2 cursor-pointer hover:bg-gray-700">
          <FaChartPie className="mr-3" /> Reports
        </li>
        <li onClick={() => handleNavigation("settings")} className="flex items-center py-2 px-2  cursor-pointer hover:bg-gray-700">
          <FaCog className="mr-3" /> Settings
        </li>
        <li onClick={() => handleNavigation("logout")} className="flex items-center py-2 px-2 cursor-pointer hover:bg-gray-700">
        <FaSignOutAlt className="mr-3" /> Logout
      </li>
      </ul>
    </div>
  );
};

export default Sidebar;
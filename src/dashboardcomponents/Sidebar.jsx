// src/components/Sidebar.js
import { FaProjectDiagram, FaTasks, FaChartPie, FaCog } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="h-screen w-[10rem] bg-gray-800 text-white p-4">
      <h2 className="text-xl font-bold mb-8">Menu</h2>
      <ul>
        <li className="flex items-center py-2 hover:bg-gray-700">
          <FaProjectDiagram className="mr-3" /> Projects
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
  );
};

export default Sidebar;

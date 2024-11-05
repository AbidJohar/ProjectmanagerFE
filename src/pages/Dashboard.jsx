import Navbar from '../dashboardcomponents/Navbar';
import Sidebar from '../dashboardcomponents/Sidebar';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
  console.log("Rendering Dashboard");

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <div className="p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

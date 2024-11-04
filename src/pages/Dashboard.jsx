// src/pages/Dashboard.js
import Navbar from '../dashboardcomponents/Navbar';
import Sidebar from '../dashboardcomponents/Sidebar';
import DashboardContent from '../dashboardcomponents/DashboardContent';

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <DashboardContent />
      </div>
    </div>
  );
};

export default Dashboard;

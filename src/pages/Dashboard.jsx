 import Navbar from '../dashboardcomponents/Navbar';
import Sidebar from '../dashboardcomponents/Sidebar';
import { Outlet } from 'react-router-dom';
import backgroundImage from '../assets/backgroundImage.jpg';


const Dashboard = () => {
  console.log("Rendering Dashboard");

  return (
    <div className="flex"
    style={{ backgroundImage: `url(${backgroundImage})` }}

    >
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <div className="p-0">
        <Outlet />
        </div>
      </div>
    </div>
  );
}
export default Dashboard;

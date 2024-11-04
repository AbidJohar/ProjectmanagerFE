 
import  { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="w-full bg-teal-600
     p-2 flex justify-between items-center relative">
      <h1 className="text-white text-xl font-semibold">Project Manager Dashboard</h1>

      <div className="flex items-center space-x-4">
        {/* Notifications Button */}
        <button className="text-white mx-2 hover:text-gray-200">Notifications</button>

        {/* Profile Section */}
        <div className="relative flex items-center justify-center">
            <span className="text-white mr-3">Ali Hassan</span>
          <button onClick={toggleDropdown} className="flex items-center focus:outline-none">
            <img
              src="https://randomuser.me/api/portraits/men/75.jpg"
              alt="Profile"
              className="rounded-full w-10 h-10 border-2 border-white"
            />
          </button>

          {/* Dropdown Menu */}
          {isOpen && (
            <div className="absolute right-0 top-10 w-48 bg-white rounded-lg shadow-lg py-2 z-10">
              <button className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-200">View Profile</button>
              <button className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-200">Logout</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

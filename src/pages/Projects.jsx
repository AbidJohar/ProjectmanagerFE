import { FaUsers, FaPlus, FaTasks, FaCheckCircle } from "react-icons/fa";

const Projects = () => {
  return (
    <div className="p-6 bg-transparent h-screen overflow-auto">
      <div className="flex space-x-6">
        {/* Team Section */}
        <div className="flex-1 bg-white p-4 rounded shadow">
          <div className="flex flex-col  ">
            <div className="flex items-center space-x-2">
              <FaUsers className="text-blue-500 w-6 h-6" />
              <h2 className="text-lg font-semibold">Team</h2>
            </div>
            <button className="flex items-center mt-3 space-x-1 text-black/40 font-semibold hover:underline">
              <FaPlus className="w-4 h-4" />
              <span>Add New Task</span>
            </button>
            
          </div>

        </div>

        {/* Ongoing Project Section */}
        <div className="flex-1 bg-white p-4 rounded shadow">
          <div className="flex flex-col  ">
            <div className="flex items-center space-x-2">
            <FaTasks className="text-blue-500 w-6 h-6" />
              <h2 className="text-lg font-semibold">Ongoing Projects</h2>
            </div>
            <button className="flex items-center mt-3 space-x-1 text-black/40 font-semibold hover:underline">
              <FaPlus className="w-4 h-4" />
              <span>Add New Task</span>
            </button>
            
          </div>

        </div>

        {/* Completed Section */}
        <div className="flex-1 bg-white p-4 rounded shadow">
          <div className="flex flex-col  ">
            <div className="flex items-center space-x-2">
              <FaCheckCircle className="text-blue-500 w-6 h-6" />
              <h2 className="text-lg font-semibold">Completed Projects</h2>
            </div>
            <button className="flex items-center mt-3 space-x-1 text-black/40 font-semibold hover:underline">
              <FaPlus className="w-4 h-4" />
              <span>Add New Task</span>
            </button>
            
          </div>

        </div>
      </div>
    </div>
  );
};

export default Projects;

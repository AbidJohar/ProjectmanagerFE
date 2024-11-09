

import React, { useState } from "react";
import GenericCard from "../components/GenericCard";
import { FaUsers, FaTasks, FaCheckCircle } from "react-icons/fa";

const Projects = () => {
  // Initial placeholder data
  const [teams, setTeams] = useState([
    { name: "Product", img: "https://i.pravatar.cc/150?img=1" },
  ]);
  const [ongoingProjects, setOngoingProjects] = useState([
    { name: "E-commerce Website", details: "Due: 17th Mar" },
  ]);
  const [completedProjects, setCompletedProjects] = useState([
    { name: "Android & iOS App", details: "Completed: 11th Mar" },
  ]);

  // Function to add a new empty instance
  const addEmptyInstance = (category) => {
    const newItem = { id: Math.random(), name: "New Item", details: "" };
    if (category === "team") {
      setTeams([...teams, newItem]);
    } else if (category === "ongoing") {
      setOngoingProjects([...ongoingProjects, newItem]);
    } else if (category === "completed") {
      setCompletedProjects([...completedProjects, newItem]);
    }
  };

  return (
    <div className="p-6 bg-transparent h-screen overflow-auto">
      <div className="flex space-x-6">
        {/* Team Section */}
        <div className="flex-1 bg-white p-4 rounded shadow">
          <div className="flex flex-col">
            <div className="flex items-center space-x-2">
              <FaUsers className="text-blue-500 w-6 h-6" />
              <h2 className="text-lg font-semibold">Team</h2>
            </div>
            <GenericCard items={teams} />
            <button
              onClick={() => addEmptyInstance("team")}
              className="mt-4 w-full p-2 text-blue-500 border-t border-gray-200 hover:bg-gray-50"
            >
              + Add new task
            </button>
          </div>
        </div>

        {/* Ongoing Projects Section */}
        <div className="flex-1 bg-white p-4 rounded shadow">
          <div className="flex flex-col">
            <div className="flex items-center space-x-2">
              <FaTasks className="text-blue-500 w-6 h-6" />
              <h2 className="text-lg font-semibold">Ongoing Projects</h2>
            </div>
            <GenericCard items={ongoingProjects} />
            <button
              onClick={() => addEmptyInstance("ongoing")}
              className="mt-4 w-full p-2 text-blue-500 border-t border-gray-200 hover:bg-gray-50"
            >
              + Add new task
            </button>
          </div>
        </div>

        {/* Completed Projects Section */}
        <div className="flex-1 bg-white p-4 rounded shadow">
          <div className="flex flex-col">
            <div className="flex items-center space-x-2">
              <FaCheckCircle className="text-blue-500 w-6 h-6" />
              <h2 className="text-lg font-semibold">Completed Projects</h2>
            </div>
            <GenericCard items={completedProjects} />
            <button
              onClick={() => addEmptyInstance("completed")}
              className="mt-4 w-full p-2 text-blue-500 border-t border-gray-200 hover:bg-gray-50"
            >
              + Add new task
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;



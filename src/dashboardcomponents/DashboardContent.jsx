
import React from 'react';
import GenericCard from '../components/GenericCard.jsx';

const DashboardContent = () => {
  
  const teams = [
    { name: 'Product' },
    { name: 'Marketing' },
    { name: 'Sales' },
    { name: 'IT' },
    { name: 'Human Resources' },
  ];

  const ongoingProjects = [
    { name: 'E-commerce Website', details: 'Due: 17th Mar' },
    { name: 'Logistics Management', details: 'Due: 25th Mar' },
    { name: 'Software Upgrade', details: 'Due: 10th Mar' },
  ];

  const completedProjects = [
    { name: 'Android & iOS App', details: 'Completed: 11th Mar' },
    { name: 'Social Media Campaign', details: 'Completed: 12th Mar' },
    { name: 'Recruitment Drive', details: 'Completed: 7th Mar' },
  ];

  return (
    <div className="p-6 bg-gray-200 h-screen overflow-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <GenericCard title="Teams" items={teams} />
        <GenericCard title="Ongoing Projects" items={ongoingProjects} />
        <GenericCard title="Completed Projects" items={completedProjects} />
      </div>
    </div>
  );
};

export default DashboardContent;






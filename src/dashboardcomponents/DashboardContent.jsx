import React, { useState, useEffect } from "react";
import GenericCard from "../components/genericCard";
const DashboardContent = () => {
  return (
    <div className="p-6 bg-gray-200  h-screen overflow-auto">
      <div className="flex sm:flex-row justify-around h-[30%]">
        <GenericCard title={"Teams"} />
        <GenericCard title={"Ongoing Projects"} />
        <GenericCard title={"Completed Projects"} />
      </div>
    </div>
  );
};

export default DashboardContent;

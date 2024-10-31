// DashboardCard.jsx
import React from 'react';

const DashboardCard = ({ title, value, additionalCount, imgSrc }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-[15px] shadow-md flex flex-col justify-between  md:w-[260px] mobile:mt-5 h-44">
    <h2 className="text-white text-lg mb-2">{title}</h2>
    <div className="flex items-center justify-between">
      <span className="text-white text-sm ">{value}</span>
      <div className="flex items-center gap-2">
        <div className="bg-white text-black font-bold rounded-full px-2 py-1">{additionalCount}</div>
        <img src={imgSrc} alt="Profile Pic" className="rounded-full w-8 h-8" />
        <img src={imgSrc} alt="Profile Pic" className="rounded-full w-8 h-8" />
        <img src={imgSrc} alt="Profile Pic" className="rounded-full w-8 h-8" />
      </div>
    </div>
  </div>
  );
};

export default DashboardCard;

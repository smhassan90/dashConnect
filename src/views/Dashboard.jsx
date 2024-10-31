import React, { useState } from 'react'
import DashboardCard from '../Reuseable/DashboardCard '
import Bar from '../Reuseable/Bar'
import { BsCalendar3 } from "react-icons/bs";
import Table from "../Components/Table"


function Dashboard() {
  const [entries, setEntries] = useState(25);
  const currentDate = new Date().toLocaleDateString('en-GB');

  const handleChange = (event) => {
    setEntries(parseInt(event.target.value));
  };
  return (
    <div>

      <Bar title="DashBoard" buttonText="+ Add Story " />




      <div className="flex flex-col md:flex-row justify-between items-center mt-4 mx-auto max-w-7xl px-4">
        <p className="text-2xl font-serif m-0 md:mr-4 whitespace-nowrap">     Welcome Back, Pritam
        </p> <div className="flex items-center">
          <BsCalendar3 className="text-xl mr-2" />
          <span className="text-xl">{currentDate.replace(/\//g, '.')}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 ml-5  lg:grid-cols-4  mt-6 mx-aut0 mobile:w-3/4 mobile:ml-16
      ">
        <DashboardCard
          title="Sales Board"
          value={23}
          additionalCount="+20"
          imgSrc="https://via.placeholder.com/30"
        />
        <DashboardCard
          title="Appointments"
          value={43}
          additionalCount="+20"
          imgSrc="https://via.placeholder.com/30"
        />
        <DashboardCard
          title="Information of Sales"
          value={43}
          additionalCount="+20"
          imgSrc="https://via.placeholder.com/30"
        />
        <DashboardCard
          title="Information of Appointments"
          value={43}
          additionalCount="+20"
          imgSrc="https://via.placeholder.com/30"
        />
      </div>
      <div className="flex gap-2  mt-7 text-2xl  mx-auto max-w-7xl px-4 mobile:w-3/4 mobile:ml-11 ">
        <span>Show</span>
        <select className="border rounded" value={entries} onChange={handleChange}>
          <option value={25}>25</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </select>
        <span className='text-2xl'>entries</span>
      </div>
      <Table className="mt-6" />
    </div>
  )
}

export default Dashboard

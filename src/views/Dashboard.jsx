import React from 'react'
import DashboardCard from '../Reuseable/DashboardCard '


function Dashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 mx-auto px-2">
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
  )
}

export default Dashboard

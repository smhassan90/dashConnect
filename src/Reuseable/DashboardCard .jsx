
// import React from 'react';

// const DashboardCard = ({ title, value, additionalCount, imgSrc }) => {
//   return (
//     <div className="bg-gray-800 p-4 rounded-[15px] shadow-md flex flex-col justify-between  md:w-[260px] mobile:mt-5 h-44">
//     <h2 className="text-white text-custom-18 font-normal mb-2">{title}</h2>
//     <div className="flex items-center justify-between ">
//       <div className='mb-10'>
//       <span className="text-white text-2xl ">{value}</span>
//       </div>
//       <div className="flex items-center gap-2">
//         {/* <div className="bg-white text-black font-bold rounded-full px-2 py-1">{additionalCount}</div> */}
//         {/* <img src={imgSrc} alt="Profile Pic" className="rounded-full w-8 h-8" />
//         <img src={imgSrc} alt="Profile Pic" className="rounded-full w-8 h-8" />
//         <img src={imgSrc} alt="Profile Pic" className="rounded-full w-8 h-8" /> */}
     

//         <div className="avatar-group -space-x-3 rtl:space-x-reverse">
        
//   <div className="avatar">
//     <div className="w-8">
//       <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
//     </div>
//   </div>
//   <div className="avatar">
//     <div className="w-8">
//       <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
//     </div>
//   </div>
//   <div className="avatar">
//     <div className="w-8">
//       <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
//     </div>
//   </div>
//   <div className="avatar placeholder">
//     <div className="bg-neutral text-neutral-content w-8">
//       <span>+99</span>
//     </div>
//   </div>
// </div>
//       </div>
//     </div>
//   </div>
//   );
// };

// export default DashboardCard;


import React from 'react';

const DashboardCard = ({ title, value, additionalCount, imgSrc }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-[15px] shadow-md flex flex-col justify-between  md:w-[260px] mobile:mt-5 h-44">
    <h2 className="text-white text-custom-14 font-normal mb-2">{title}</h2>
    <div className="flex items-center justify-between ">
      <div className='mb-10'>
      <span className="text-white text-2xl ">{value}</span>
      </div>
      <div className="flex items-center gap-2">
        {/* <div className="bg-white text-black font-bold rounded-full px-2 py-1">{additionalCount}</div> */}
        {/* <img src={imgSrc} alt="Profile Pic" className="rounded-full w-8 h-8" />
        <img src={imgSrc} alt="Profile Pic" className="rounded-full w-8 h-8" />
        <img src={imgSrc} alt="Profile Pic" className="rounded-full w-8 h-8" /> */}
     

        <div className="avatar-group -space-x-3 rtl:space-x-reverse">
        
  <div className="avatar">
    <div className="w-8">
      <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
    </div>
  </div>
  <div className="avatar">
    <div className="w-8">
      <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
    </div>
  </div>
  <div className="avatar">
    <div className="w-8">
      <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
    </div>
  </div>
  <div className="avatar placeholder">
    <div className="bg-neutral text-neutral-content w-8">
      <span>+99</span>
    </div>
  </div>
</div>
      </div>
    </div>
  </div>
  );
};

export default DashboardCard;
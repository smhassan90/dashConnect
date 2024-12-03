
import React, { useState } from 'react';
import { IoSearch } from 'react-icons/io5';
import { IoClose } from 'react-icons/io5';
import imag5 from '../assests/image5.png';
import Bar from '../Reuseable/Bar';
import image from '../assests/dolori-smart-working-blog-copertina-400x250-removebg-preview.png';
import CustomButton from '../Components/Button';

const integrations = [
  {
    name: 'Acuity',
    icon:
      'https://static.wixstatic.com/media/ec0692_9e284a7992da4b74bcbc91f107606a80~mv2.png/v1/fill/w_220,h_224,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ec0692_9e284a7992da4b74bcbc91f107606a80~mv2.png',
    description: 'You can setup your acuity account as source of data here',
  },
  {
    name: 'Xero',
    icon: imag5,
    description: 'You can set up your Xero account as a source of data here.',
  },
  {
    name: 'MYOB',
    icon: 'https://haadanalytics.com/wp-content/uploads/2024/01/1-1.png',
    description: 'You can set up your QuickBooks account as a source of data here.',
  },
  {
    name: 'MYOB',
    icon: 'https://haadanalytics.com/wp-content/uploads/2024/01/1-1.png',
    description: 'You can set up your Square account as a source of data here.',
  },
];

function Integration() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConnectEnabled, setIsConnectEnabled] = useState(false); // Controls "Connect" button state
  
  const handleTestClick = () => {
    setIsConnectEnabled(true); // Enable the "Connect" button
  };

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="mobile:w-[400px] mobile:ml-20">
      <Bar title="Integration" type="search" />

      {/* Search Bar Container */}
      <div className="mt-14 ml-7 bg-custom-gray text-white p-4 rounded-[20px] h-[200px] flex items-center mobile:h-20 mobile:w-[400px]">
        <div className="w-full h-[35px] mobile:w-[400px] relative">
          <input
            type="text"
            className="bg-white text-b border-blue-500 rounded-[12px] w-full h-full pl-10 pr-20 mobile:w-full"
            placeholder="Search Integration..."
          />
          <span className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500">
            <IoSearch className="text-2xl" />
          </span>
        </div>

        {/* Image */}
        <img
          src={image}
          alt="Integration"
          className="ml-16 mb-16 h-[260px] rounded-lg mobile:hidden mobile:w-36 mobile:h-36"
        />
      </div>
      <div className=" ml-7 flex gap-7 mt-10  mobile:w-full">
        <p className=" ml-7 category group cursor-pointer relative pb-1 text-gray-600 hover:text-blue-500">
        ALL
      <span className=" ml-7 absolute left-0 right-0 bottom-0 h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>         </p>
      </div>
      <hr className=" ml-7 mt-2 border-t border-gray-500" />
      <div className="ml-7 mt-12 rounded-[12px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-14 items-center">
  {integrations.map((integration, index) => (
    <div
      key={index}
      className="  rounded-[11px] w-full h-[200px] bg-cover bg-center text-white flex flex-col  mobile:w-full mobile:mb-4"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/premium-vector/geometric-dark-message-board-wallpaper-with-copy-space-modern-designs_796268-123.jpg')",
      }}
    >
      <div className="flex items-center mb-2"> 
        <img
          src={integration.icon}
          alt={`${integration.icon} Icon`}
          className="w-32 h-32 mt-8 ml-2 mobile:w-24 mobile:h-24"
        />
        <div className='flex flex-col gap-2 items-start'>
        <div className="ml-5 w-full mt-5">
          <h3 className="text-lg text-left mb-1 font-sans font-bold">
            Integrate With {integration.name}
          </h3>
          <p className="text-sm text-left mt-3 text-white">
            {integration.description}.
          </p>
        
        </div>
        <div className="ml-4 mt-3">
         <CustomButton text={'Connect'} onClick={handleOpenModal} bg_color="bg-blue-500"  />
        </div>
        </div>
      </div>
    </div>
  ))}
</div>










      


{isModalOpen && (
  <div className="w-[1500px] fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full mobile:w-72 mobile:ml-14">
      
      {/* Container for the heading and close button */}
      <div className="flex items-center justify-between mb-4">
        {/* Close Button */}

        {/* Add Employees Heading */}
        <h2 className="text-2xl font-bold mobile:text-center">Intergeration</h2>
        <button
          className="text-gray-600 hover:text-gray-800"
          onClick={handleCloseModal}
        >
          <IoClose size={24} />
        </button>

      </div>

      <form onSubmit={(e) => {
        e.preventDefault();
      }}>
        <div className="">
          <fieldset className="border border-gray-400 rounded p-2 w-96 h-14 mobile:w-60">
            <legend className="text-gray-500 text-sm px-2">UserName</legend>
            <input
              required
              className=" bg-transparent rounded w-full h-5 py-1 px-3 text-gray-700 leading-tight focus:outline-none border-none"
              id="username"
              name="username"
            
            />
          </fieldset>

          <fieldset className=" mt-3 border border-gray-400 rounded p-2 w-96 h-14 mobile:w-60">
            <legend className="text-gray-500 text-sm px-2">Password</legend>
            <input
              type="password"
              required
              className="bg-transparent rounded w-full h-5 py-1 px-3 text-gray-700 leading-tight focus:outline-none border-none"
              id="password"
              name="password"
              
            />
          </fieldset>
        </div>

        

        <div className="flex justify-center space-x-4 mt-10">
        
            <CustomButton
            text="test"
            onClick={handleTestClick}
            className="hover:text-black hover:bg-white border-2 border-black"
  />

         
        
              <CustomButton
                text="connect"

              className={`hover:text-black hover:bg-white border-2 border-black  ${
                isConnectEnabled ? "cursor-pointer" : "cursor-not-allowed "
              }`}
              disabled={!isConnectEnabled} // Disable the button when `isConnectEnabled` is false
            
            
            />

        </div>
      </form>
    </div>
  </div>
)}








    
    </div>
  );
}

export default Integration;


import Sidebar from '../Reuseable/Sidebar'
import React from 'react';
// import Sidebar from '../Reuseable/Sidebar';
import Bar from '../Reuseable/Bar';
import { IoSearch } from 'react-icons/io5'
import imag4 from '../assests/image4.png' 

const integrations = [
    {
      name: 'Acuity',
      icon: {imag4},
      description: 'You can set up your Acuity account as a source of data here.',
    },
    {
      name: 'Xero',
      icon: 'https://www.flaticon.com/free-icons/invoice',
      description: 'You can set up your Xero account as a source of data here.',
    },
    {
      name: 'QuickBooks',
      icon: 'https://www.flaticon.com/free-icons/quickbooks',
      description: 'You can set up your QuickBooks account as a source of data here.',
    },
    {
      name: 'Square',
      icon: 'https://www.flaticon.com/free-icons/square',
      description: 'You can set up your Square account as a source of data here.',
    },
  ];
  


const Integrations = () => {
  return (
    <div className="overflow-hidden">
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-4 sm:ml-0 ml-[45px]">
          <Bar title="Integration" />

          {/* <div className="mt-10 bg-black text-white p-4 rounded-lg w-[1080px] h-[200px]">
            <div className="relative w-[500px] h-[35px] mt-16 ml-5">
              <input
                type="text"
                className="bg-white rounded-[12px] w-full h-full pl-10 pr-4"
                placeholder="Search Integration..."
              />
              <span className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500">
                <IoSearch className="text-2xl" />
              </span>
            </div>
            <img src='https://cdn-bleeo.nitrocdn.com/AaeMEdZeBsunREidvDPNNmqpWUCXDbiq/assets/images/optimized/rev-b3c35fe/www.lazzarospallanzani.it/wp-content/uploads/2021/02/dolori-smart-working-blog-copertina-400x250.jpg'/>

            
          
          
          </div> */}
          <div className="mt-10 bg-black text-white p-4 rounded-lg w-[1080px] h-[200px] flex items-center">
  {/* Search Bar Container */}
  <div className="relative w-[500px] h-[35px] ml-5">
    <input
      type="text"
      className="bg-white rounded-[12px] w-full h-full pl-10 pr-4"
      placeholder="Search Integration..."
    />
    <span className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500">
      <IoSearch className="text-2xl" />
    </span>
  </div>

  {/* Image */}
  <img
    src="https://cdn-bleeo.nitrocdn.com/AaeMEdZeBsunREidvDPNNmqpWUCXDbiq/assets/images/optimized/rev-b3c35fe/www.lazzarospallanzani.it/wp-content/uploads/2021/02/dolori-smart-working-blog-copertina-400x250.jpg"
    alt="Integration"
    className="ml-5 w-[400px] h-[250px] rounded-lg"
  />
</div> 


<div class="flex gap-7 mt-10 ml-5">
    <p class="category group cursor-pointer relative pb-1 text-gray-600 hover:text-blue-500">
        ALL
        <span class="absolute left-0 right-0 bottom-0 h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
    </p>
    <p class="category group cursor-pointer relative pb-1 text-gray-600 hover:text-blue-500">
        Community
        <span class="absolute left-0 right-0 bottom-0 h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
    </p>
    <p class="category group cursor-pointer relative pb-1 text-gray-600 hover:text-blue-500">
        Commercial
        <span class="absolute left-0 right-0 bottom-0 h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
    </p>
</div>
<hr className="mt-2 border-t border-gray-500" /> {/* Horizontal line with margin */}


<div className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {integrations.map((integration, index) => (
          <div key={index} className="bg-black rounded-lg shadow-md  text-white h-52 w-96 flex flex-col  mt-5">
            <div className="flex items-center mb-2">
              <img
                src={imag4}
                alt={`${integration.name} Icon`}
                className="w-32 h-32 mt-7 mr-16" 
              />
              <h3 className="text-lg text-left  mb-24 mr-12">Integrate With {integration.name}</h3>
            </div>
            {/* <p className="text-xs mb-2">{integration.description}</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-md text-sm">
              View Now >
            </button> */}
          </div>
        ))}
      </div>
    </div>




        </div>
      </div>
    </div>
  );
};

export default Integrations;

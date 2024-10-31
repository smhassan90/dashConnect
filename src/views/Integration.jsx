import React from 'react'

import { IoSearch } from 'react-icons/io5'
import imag4 from '../assests/image4.png' 
import imag5 from '../assests/image5.png'
import Bar from '../Reuseable/Bar';
const integrations = [
        {
          name: 'Acuity',
          icon: imag4,
          description: 'You can setup your acuity account as source of data here',
        },
        {
          name: 'Xero',
          icon: imag5 ,
          description: 'You can set up your Xero account as a source of data here.',
        },
        {
          name: 'MYOB',
          icon: imag4,
          description: 'You can set up your QuickBooks account as a source of data here.',
        },
        {
          name: 'MYOB',
          icon: imag5,
          description: 'You can set up your Square account as a source of data here.',
        },
      ];
      

function Integration() {
  return (
    <div className="">

    
        <Bar title="Integeration"/>
       
        <div className="mt-10 bg-custom-gray text-white p-4 rounded-lg  h-[200px] flex items-center mobile:w-80 mobile:h-20">
{/* Search Bar Container */}
<div className=" w-full h-[35px]  mobile: mobile:w-20">
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
  className="ml-16  h-[250px] rounded-lg mobile:w-40 mobile:h-28" 
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


<div className="mt-4">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 ">
      {integrations.map((integration, index) => (
        <div key={index} className="bg-black rounded-lg shadow-md  text-white h-48  flex flex-col  mt-5">
          {/* <div className="flex items-center mb-2">
            <img
              src={imag4}
              alt={`${integration.name} Icon`}
              className="w-32 h-32 mt-7 mr-16" 
            />
          </div>
          <h3 className="text-lg text-left  mb-24 mr-12">Integrate With {integration.name}</h3> */}
    <div className="flex items-center mb-2">
  <img
    src={integration.icon}
    alt={`${integration.icon} Icon`}
    className="w-48 h-32 mt-7 "  // Adjust margins as necessary
  />
  <div className="ml-5 w-full m-auto w-56"> {/* Added a container for title and description */}
    <h3 className="text-lg text-left  mb-1 font-sans font-bold">Integrate With {integration.name}</h3>
    <p className="text-sm text-left mt-5 text-white"> {/* Description below the title */}
      {integration.description}.
    </p>
  </div>
</div>
          
           <button className= "  mr-3 text-right  hover:bg-blue-700 text-white font-bold  rounded-md text-sm">
            View Now >>>
          </button> */
        </div>
      ))}
    </div>
  </div>




        
    
  </div>
  )
}

export default Integration
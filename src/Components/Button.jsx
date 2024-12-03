import React from 'react';

const CustomButton = ({ text, onClick,icon = null,className = "", hoverEffect = " hover:bg-gray-800" , bg_color }) => {
  return (
    <button
      className={`bg-black ${bg_color} w-[158px] py-2 px-3 rounded-[10px] h-[44px] transition duration-300 text-custom-14 font-normal  text-white ${text} ${className} ${hoverEffect}`}
      onClick={onClick}
    >

      {text}
    </button>
  );
};

export default CustomButton;
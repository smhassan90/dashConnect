import React from 'react';

const CustomButton = ({ text, onClick }) => {
  return (
    <button
      className={`bg-black w-[158px] py-2 px-3 rounded-[10px] h-[44px] hover:bg-gray-800 transition duration-300 text-custom-16 font-normal  text-white ${text}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default CustomButton;
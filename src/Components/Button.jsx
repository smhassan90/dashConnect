import React from 'react';

const CustomButton = ({ text, textColor = 'text-white', fontSize = 'text-lg', onClick }) => {
  return (
    <button
      className={`bg-black ${textColor} font-semibold w-[110px] sm:w-32 py-2 px-3 rounded-lg hover:bg-gray-800 transition duration-300 text-lg sm:text-base ${fontSize}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default CustomButton;
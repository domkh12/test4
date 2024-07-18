import React from 'react';

function CardTemplateDashboard({ imageSrc, title, onSelect }) {
  return (
    <div className="p-2 bg-gray-200 shadow-md rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 flex flex-col w-full max-w-[350px] h-auto">
      <img src={imageSrc} alt={title} className="w-full h-48 object-cover" />
      <div className="dark:bg-gray-900 bg-white flex justify-between items-center px-3 py-2 border-t-[8px] border-gray-200">
        <h3 className="text-gray-900 text-lg dark:text-gray-100">{title}</h3>
        <button 
          onClick={onSelect} 
          className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-hover transition-colors duration-300"
        >
          Select
        </button>
      </div>
    </div>
  );
}

export default CardTemplateDashboard;

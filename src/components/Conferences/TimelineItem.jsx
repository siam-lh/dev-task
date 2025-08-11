import React from 'react';
// import { BsLightningChargeFill } from 'react-icons/bs';

export default function TimelineItem({ date, title, description, align }) {
  const isLeft = align === 'left';
  return (
    <div className={`flex w-full ${isLeft ? 'justify-start' : 'justify-end'}`}> 
      <div className="w-[45%]">
        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
            <h3 className="font-semibold text-[#1A1A1A] text-sm md:text-base">{title}</h3>
          </div>
          <p className="text-sm text-gray-500 mt-1">{description}</p>
        </div>
        <p className={`text-xs text-gray-400 mt-2 ${isLeft ? 'text-left' : 'text-right'}`}>{date}</p>
      </div>
    </div>
  );
}

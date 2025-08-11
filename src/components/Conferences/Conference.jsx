import React from "react";
import ConferenceCard from "./ConferenceCard";
import data from "../../data/conferences.json";

const Conference = () => {
  return (
    <div className="mt-[56px] md:mt-[6.25rem] mb-[40px] sm:px-[29px] xl:px-0 md:py-25">
      <h1 className=" font-bold text-[24px] md:text-[48px] teext-[#0A142F] leading-[100%] tracking-[0] text-center mb-8">Conference</h1>
      {/* Timeline container */}
      <div className="relative max-w-6xl mx-auto mt-[5.68rem]">
        
        {data.map((conference, index) => {
          const isLeft = index % 2 === 0;
          const isLast = (data?.length - 1) === index;
          
          return (
            <div
              key={conference.id}
              className="relative"
            >
              <ConferenceCard 
                conference={conference} 
                isLeft={isLeft} 
                isLast={isLast}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Conference;


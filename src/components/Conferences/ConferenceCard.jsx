import React from "react";
import YellowCircleMarker from "../shared/svg/YellowCircleMarker";
import StromIcon from "../shared/svg/StromIcon";

const ConferenceCard = ({ conference, isLeft, isLast }) => {
  return (
    <div className="flex flex-col md:flex-row justify-start w-full mb-[0.25rem]">
      {/* === Mobile Layout === */}
      <div className="flex md:hidden w-full  ">
        {/* Left Column: Icon + Line */}
        <div className="w-1/5 flex flex-col items-center pt-1">
          <div>
            <StromIcon isActive={conference?.finished}/>
          </div>

          <div className={`w-0.5 min-h-[150px] mt-2 ${
              isLast ? "bg-transparent" : conference?.finished==true?"bg-[#FFC93E]":"bg-gray-300"
            }`}
          />
        </div>

        {/* Right Column: Date + Card */}
        <div className="w-4/5 flex flex-col pr-[1.5rem] -mt-12">
          <div className="text-[#617187] text-[0.875rem] font-medium mb-[0.88rem] pt-1 ">
            {conference?.date}
          </div>

          <div className="min-w-[16.25rem] mt-[14px] mb-4 px-[0.63rem] py-[0.75rem] rounded-[0.5rem] bg-[#F9FAFB] border-t-4 border-[#CDCDCD] " style={{ boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.06)' }}>
            <div className="p-[0.625rem] flex flex-col gap-[0.625rem] justify-center">
              <div className="flex items-center gap-[0.625rem]">
                <div className="h-[1rem] md:h-[1rem]">
                  <YellowCircleMarker  className="max-h-full"/>
                </div>

                <h2 className="text-[1.125rem] font-medium leading-normal text-[#111D5E] ">
                  {conference?.title}
                </h2>
              </div>
              <div className="flex items-start gap-[0.625rem]">
                <div className="w-[1rem]" />
                <p className="text-[#617187] text-[0.875rem] font-normal leading-normal">
                  {conference?.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* === Desktop Layout === */}
      <div className="hidden md:flex justify-center w-full">
        {isLeft ? (
          <>
            {/* Card */}
            <div className="w-[15.1875rem] md:w-[30rem] mr-10 pb-4">
              <div className="w-full h-[6.75rem] md:h-[6.5rem] rounded-[0.5rem] bg-[#F9FAFB] border-t-4 border-[#CDCDCD]">
                <div className="w-full h-full p-[0.625rem] flex flex-col gap-[0.625rem] justify-center">
                  <div className="flex items-center gap-[0.625rem]">
                    <YellowCircleMarker />
                    <h2 className="text-[1.125rem] font-medium leading-none text-[#111D5E]">
                      {conference?.title}
                    </h2>
                  </div>
                  <div className="flex items-start gap-[0.625rem]">
                    <div className="w-[1rem] md:w-[1.125rem]" />
                    <p className="text-[#617187] text-[0.75rem] font-normal leading-none">
                      {conference?.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="flex flex-col items-center justify-start h-full">
              <StromIcon isActive={conference?.finished}/>
              <div
                className={`w-0.5 h-[100px] ${
                  isLast ? "bg-transparent" : conference?.finished==true?"bg-[#FFC93E]":"bg-gray-300"
                } mt-2`}
              />
            </div>

            {/* Date */}
            <div className="w-[15.1875rem] md:w-[30rem] ml-10 pb-4 flex">
              <div className="text-[#617187] text-sm font-medium justify-start pt-4">
                {conference?.date}
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Date */}
            <div className="w-[15.1875rem] md:w-[30rem] mr-10 pb-4 flex justify-end">
              <div className="text-[#617187] text-sm font-medium pt-4">
                {conference?.date}
              </div>
            </div>

            {/* Timeline */}
            <div className="flex flex-col items-center justify-start h-full">
              <StromIcon />
              <div
                className={`w-0.5 h-[100px] ${
                  isLast ? "bg-transparent" : "bg-gray-300"
                } mt-2`}
              />
            </div>

            {/* Card */}
            <div className="w-[15.1875rem] md:w-[30rem] ml-10 pb-4">
              <div className="w-full h-[6.75rem] md:h-[6.5rem] rounded-[0.5rem] bg-[#F9FAFB] border-t-4 border-[#CDCDCD]">
                <div className="w-full h-full p-[0.625rem] flex flex-col gap-[0.625rem] justify-center">
                  <div className="flex items-center gap-[0.625rem]">
                    <YellowCircleMarker />
                    <h2 className="text-[1.125rem] font-medium leading-none text-[#111D5E]">
                      {conference?.title}
                    </h2>
                  </div>
                  <div className="flex items-start gap-[0.625rem]">
                    <div className="w-[1rem] md:w-[1.125rem]" />
                    <p className="text-[#617187] text-[0.75rem] font-normal leading-none">
                      {conference?.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ConferenceCard;


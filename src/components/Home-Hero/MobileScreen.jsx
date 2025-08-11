import React from "react";
import Image from "next/image";
import BuyTicketIcon from "../shared/svg/BuyTicketIcon";
import StarIcon from "../shared/svg/StarIcon";
import CircleRebonIcon from "../shared/svg/CircleRebonIcon";
import ReactCapIcon from "../shared/svg/ReactCapIcon";
const MobileScreen = () => {
  return (
    <div className="md:hidden relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="324"
        height="436"
        viewBox="0 0 324 436"
        fill="none"
        className="absolute -top-5 right-5"
      >
        <path
          d="M161.5 84.0948C198.974 88.5351 301.831 86.8276 310.5 35.7117C321.336 -28.1831 169.5 -1.99996 291 114.712C376.908 197.234 289.5 403.288 -20.5 434.5"
          stroke="#FFC93E"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="10 10"
        />
      </svg>
      <div className="relative">
        <div className="mt-[4rem] mb-[2.69rem]">
          <div className="px-[29px]">
            <div className="relative text-[#111D5E] text-end font-inter text-[3rem] not-italic font-bold leading-none pr-[1.3rem]">
              <h1>React</h1>
              <h1>Conference</h1>
              <ReactCapIcon/>
            </div>

            <div className="py-8 text-base font-normal leading-normal text-[#0A142F] font-inter">
              <p>
                Lorem uis diam turpis quam id fermetum.In quis diam turpis quam
                id fermentu me.In quis diam turpis quam id fermentum.
              </p>
            </div>
            <div className="mb-[1.5rem] flex flex-row justify-center">
              <button className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-[1.875rem] bg-[#FFC93E] text-[18px]">
                Buy Tickets
                <BuyTicketIcon/>
              </button>
            </div>
          </div>

          <div className="relative">
            <div
              className="absolute left-0 bottom-0 h-60 w-1/2 pointer-events-none z-0"
              style={{
                background:
                  "linear-gradient(to right, rgba(213, 232, 243, 0.75), rgba(255, 255, 255, 0))",
                backdropFilter: "blur(100px)",
                WebkitMaskImage: `linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)`,
                maskImage: `linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)`,
                WebkitMaskComposite: "destination-in",
                maskComposite: "intersect",
              }}
            ></div>
            <div className="flex flex-row justify-center mt-[2.5rem]">
              <div>
                <div className="relative min-w-[22.4375rem] min-h-[22.83981rem] w-full h-auto">
                  <Image
                    alt="Hero Image"
                    src="/hero-Image-coding.png"
                    fill
                    className="object-cover"
                    priority
                  />
                  <StarIcon className="w-[5rem] h-[5rem] bottom-0 right-8 transform translate-x-1/2 translate-y-1/2 rotate-[9deg] origin-center"/>
                </div>
              </div>
            </div>

            <div className="flex justify-between gap-4 mt-[4.1rem]">
              <div className="pl-[29px] pb-[1.2rem]">
                <div className="relative min-w-[9.81269rem] min-h-[12.5rem] w-full h-auto">
                  <Image
                    src="/hero-image-speaking.png"
                    alt="Hero Image"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="pt-15 flex items-end pb-4">
                <CircleRebonIcon/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileScreen;

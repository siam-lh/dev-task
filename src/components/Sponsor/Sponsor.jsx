import React from "react";
import LayersLogo from "../shared/svg/LayersLogo";
import Sisyphus from "../shared/svg/SisyphusGold";
import CircoolesLogo from "../shared/svg/CircoolesSilverLogo";
import CatalogLogo from "../shared/svg/CatalogLogo";
import GeforceLogo from "../shared/svg/GeforceLogo";
import SisyphusBronze from "../shared/svg/SisyphusBronze";
import QuotientLogo from "../shared/svg/QuotientLogo";
import CircoolesBronzeLogo from "../shared/svg/CircoolesBronzeLogo";
const Sponsor = () => {
  return (
    <div className="bg-[#F9FAFB] flex flex-col items-center justify-center py-14 md:py-20">
      <h2 className="font-bold text-[20px] md:text-[48px] text-[#0A142F] leading-[100%] tracking-[0]">
        Our Sponsor
      </h2>
      <div>
        {/* Gold Sponsor */}
        <div className="mt-5 md:mt-8">
          <p className="text-[#667085] font-medium text-[12px] md:text-base leading-[100%] tracking-[0] text-center">
            🥇 Gold Sponsor
          </p>
          <div className="flex flex-row items-center justify-center gap-11 pt-4 md:pt-8">
            <div className="h-[2.25rem] md:h-[4.07156rem] w-[6.68038rem]  md:w-[13.59988rem] overflow-hidden flex items-center justify-center">
              <LayersLogo className="max-h-full" />
            </div>
            <div className="h-[2rem] md:h-[4.125rem] w-[7.00588rem]  md:w-[15.76325rem] overflow-hidden flex items-center justify-center">
              <Sisyphus className="max-h-full" />
            </div>
          </div>
        </div>
        {/* silver Sponsor */}
        <div className="mt-8">
          <p className="text-[#667085] font-medium text-[12px] md:text-base leading-[100%] tracking-[0] text-center">
            🥈 Silver Sponsor
          </p>
          <div className="flex flex-wrap justify-center gap-x-14 gap-y-6 pt-8">
            <div className="h-[2rem] md:h-[4.125rem] w-[7.00588rem]  md:w-auto overflow-hidden flex items-center justify-center">
              <CircoolesLogo className="max-h-full" />
            </div>
            <div className="h-[2rem] md:h-[4.125rem] w-[7.00588rem]  md:w-[15.76325rem] overflow-hidden flex items-center justify-center">
              <CatalogLogo className="max-h-full" />
            </div>
            <div className="h-[2rem] md:h-[4.125rem] w-[7.00588rem]  md:w-[15.76325rem] overflow-hidden flex items-center justify-center">
              <GeforceLogo className="max-h-full" />
            </div>
          </div>
        </div>

        {/* Bronze Sponsor */}
        <div className="mt-4 md:mt-8">
          <p className="text-[#667085] font-medium text-[12px] md:text-base leading-[100%] tracking-[0] text-center">
            🥉 Bronze Sponsor
          </p>
          <div className="flex flex-wrap justify-center gap-x-14 gap-y-6 pt-4 md:pt-8">
            <div className="h-[2rem] md:h-[4.125rem] w-[7.00588rem]  md:w-[15.76325rem] overflow-hidden flex items-center justify-center">
              <SisyphusBronze className="max-h-full" />
            </div>
            <div className="h-[2rem] md:h-[4.125rem] w-[8.47913rem]  md:w-[17.48819rem] overflow-hidden flex items-center justify-center">
              <QuotientLogo className="max-h-full" />
            </div>
            <div className="h-[2rem] md:h-[4.125rem] w-[6.68038rem]  md:w-[13.59988rem] overflow-hidden flex items-center justify-center">
              <LayersLogo className="max-h-full" />
            </div>
            <div className="h-[2rem] md:h-[4.125rem] w-[8.31231rem]  md:w-[17.14419rem] overflow-hidden flex items-center justify-center">
              <CircoolesBronzeLogo className="max-h-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsor;

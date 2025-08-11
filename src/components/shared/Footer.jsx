import React from "react";
import RaectIconFooter from "./svg/RaectIconFooter";
import TwitterIcon from "./svg/TwitterIcon";
import LinkedinIcon from "./svg/LinkedinIcon";
import FacebookIcon from "./svg/FacebookIcon";
import SocialIcon from "./svg/SocialIcon";

const Footer = () => {
  return (
    <footer className="bg-[#111D5E] flex flex-col items-center justify-center gap-[24px] py-16 px-base">
      <div className="w-full flex justify-center">
        <div className="w-[116.91px] h-[32px] md:w-[175.37px] md:h-[48px] overflow-hidden">
          <RaectIconFooter />
        </div>
      </div>

      <div className="flex flex-row justify-center gap-[1.7rem] md:gap-7 mt-7">
        <TwitterIcon />
        <LinkedinIcon />
        <FacebookIcon />
        <SocialIcon />
      </div>
      <div>
        <p className="font-normal text-base text-[#FFFFFF] leading-[24px] tracking-[0]">
          © 2023 Lemonhive. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import MobileScreen from "./MobileScreen";
import LagreScrren from "./LagreScrren";
const Hero = () => {
  return (

      <div className="pb-[4rem] lg:pb-[8rem]">
        <LagreScrren />
        <MobileScreen />
      </div>
  );
};

export default Hero;

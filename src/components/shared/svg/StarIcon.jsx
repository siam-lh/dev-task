import React from "react";

const StarIcon = ({className="w-20 h-20 -left-[40px] -bottom-[40px] z-10"}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 90 89"
      fill="none"
      className={`absolute ${className}`}
    >
      <path
        d="M65.7459 0.870674L52.367 37.621L89.1452 50.923L50.0592 49.5553L48.7734 88.6441L37.9959 51.0485L0.422946 61.9047L32.8481 40.037L10.9125 7.6577L41.7299 31.7383L65.7459 0.870674Z"
        fill="#FFC93E"
      />
    </svg>
  );
};

export default StarIcon;

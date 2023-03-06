import React from "react";
import Countdown from "react-countdown";
import MACAU from "../assets/macau_lg.png";

const Landing = () => {
  // Random component
  const Completionist = () => <span>You are good to go!</span>;

  // Renderer callback with condition
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a complete state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <p className="text-4xl lg:text-9xl font-bold mt-8 lg:mt-16">
          {days}
          <span className="text-2xl lg:text-7xl ml-2 lg:ml-4">D</span> {hours}
          <span className="text-2xl lg:text-7xl ml-2 lg:ml-4">H</span> {minutes}
          <span className="text-2xl lg:text-7xl ml-2 lg:ml-4">M</span> {seconds}
          <span className="text-2xl lg:text-7xl ml-2 lg:ml-4">S</span>
        </p>
      );
    }
  };

  return (
    <div className="gradientBG w-full text-white flex flex-col items-center">
      <img
        src={MACAU}
        alt="MACAU"
        className="mt-[3.875rem] lg:mt-[5.3125rem]"
      />
      <Countdown date="2023-06-01T00:00:00" renderer={renderer} />
      <a
        href="#"
        className="underline font-spacegrotesk font-light text-base lg:text-2xl mt-8 lg:mt-[3.75rem]"
      >
        Click here for more information
      </a>
      <p className="mt-[11.9375rem] lg:mt-[13.1875rem] font-spacegrotesk font-light text-xs lg:text-2xl mb-[17px] lg:mb-[2.75rem]">
        Copyright {new Date().getFullYear()} ClubMacau | All Rights Reserved.
      </p>
    </div>
  );
};

export default Landing;

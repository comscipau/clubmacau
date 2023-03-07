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
        <p className="mt-8 text-4xl font-bold lg:text-9xl lg:mt-16">
          {days}
          <span className="ml-2 text-2xl lg:text-7xl lg:ml-4">D</span> {hours}
          <span className="ml-2 text-2xl lg:text-7xl lg:ml-4">H</span> {minutes}
          <span className="ml-2 text-2xl lg:text-7xl lg:ml-4">M</span> {seconds}
          <span className="ml-2 text-2xl lg:text-7xl lg:ml-4">S</span>
        </p>
      );
    }
  };

  return (
    <div className="flex flex-col items-center w-full h-screen text-white gradientBG">
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
      <p className="mt-[11.9375rem] lg:mt-[13.1875rem] font-spacegrotesk font-light text-xs lg:text-2xl pb-[17px] lg:pb-[2.75rem]">
        Copyright {new Date().getFullYear()} ClubMacau | All Rights Reserved.
      </p>
    </div>
  );
};

export default Landing;

import Countdown from "react-countdown";
import MACAU from "../assets/macau_lg.png";
import { motion } from "framer-motion";
import React from "react";
// import React, { useState, useEffect } from "react";

const Landing = () => {
  const fadeInToUp = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  // Random component
  const Completionist = () => <span>Coming soon!</span>;

  // Renderer callback with condition
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a complete state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <motion.p
          className="mt-8 lg:mt-0 text-4xl font-bold lg:text-7xl"
          variants={fadeInToUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {days}
          <span className="ml-2 text-2xl lg:text-5xl lg:ml-4">D</span> {hours}
          <span className="ml-2 text-2xl lg:text-5xl lg:ml-4">H</span> {minutes}
          <span className="ml-2 text-2xl lg:text-5xl lg:ml-4">M</span> {seconds}
          <span className="ml-2 text-2xl lg:text-5xl lg:ml-4">S</span>
        </motion.p>
      );
    }
  };

  // var myAdjBottom = "bottom-20";
  // const [windowHeight, setWindowHeight] = useState(window.screen.height);
  // useEffect(() => {
  //   const handleWindowResize = () => {
  //     setWindowHeight(window.screen.height);
  //   };
  //   window.addEventListener("resize", handleWindowResize);
  //   return () => {
  //     window.removeEventListener("resize", handleWindowResize);
  //   };
  // });

  // if (windowHeight <= 800) {
  //   myAdjBottom = "bottom-20";
  // } else {
  //   myAdjBottom = "bottom-10";
  // }

  return (
    <div className="flex flex-col items-center text-white gradientBG relative h-screen">
      {/* <p>{windowHeight}</p> */}
      <motion.img
        src={MACAU}
        alt="MACAU"
        className="mt-[3.875rem] lg:mt-0 lg:scale-75"
        variants={fadeInToUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      />
      <Countdown date="2023-06-01T00:00:00" renderer={renderer} />
      <motion.a
        href="#"
        className="underline font-spacegrotesk font-light text-base lg:text-2xl mt-8 lg:mt-[3.75rem]"
        variants={fadeInToUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Click here for more information
      </motion.a>
      <motion.p
        // className="font-spacegrotesk font-light text-xs absolute mx-0 top-40 lg:hidden"
        className={`font-spacegrotesk font-light text-xs lg:text-2xl absolute mx-0 bottom-20 lg:bottom-4`}
        variants={fadeInToUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Copyright {new Date().getFullYear()} ClubMacau | All Rights Reserved.
      </motion.p>
      {/* <motion.p
        className="lg:mt-[14rem] font-spacegrotesk font-light text-xs lg:text-2xl pb-[17px] lg:pb-[2.75rem] hidden lg:block"
        variants={fadeInToUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Copyright {new Date().getFullYear()} ClubMacau | All Rights Reserved.
      </motion.p> */}
    </div>
  );
};

export default Landing;

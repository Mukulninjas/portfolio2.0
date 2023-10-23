import React from "react";
import mukul from "../assets/Mukul.png";

const Footer = () => {
  return <div className="col-start-1 col-end-9">
    <section className="w-full bg-gray-800 dark:bg-black flex flex-col items-center">
      <div className='w-40'>
        <img src={mukul} alt="logo" />
      </div>
      <div className='w-full h-fit p-2 bg-gray-950 text-slate-300 flex flex-col md:flex-row justify-center align-middle items-center space-y-2 md:space-x-5 md:space-y-0'>
        <a href="mailto:mukulninjas@gmail.com">mukulninjas@gmail.com</a>
        <a href="tel:9582688985">+919582688985</a>
      </div>
      <div className='text-slate-300'>
        <div>Designed and Developed by Mukul Kumar😉</div>
        <div>©️ Copyright 2022, All Rights Reserved</div>
      </div>
    </section>
  </div>;
};

export default Footer;

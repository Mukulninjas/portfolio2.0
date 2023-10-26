import React from "react";

const Bio = () => {
  return <div className="col-start-2 col-end-8">
    <div className="min-h-screen flex flex-col justify-evenly" id="bio">
      <div className="flex justify-center">
        <div className="text-4xl md:text-6xl font-bold text-slate-600 font-serif dark:text-slate-100">Bio</div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 flex flex-col items-center py-10 space-y-6 m-auto">
          <div className="text-5xl font-bold text-slate-700 dark:text-slate-100">
            <p >UI/UX Designer</p>
          </div>
          <div className="text-4xl font-semibold text-slate-700 dark:text-slate-200">
            <p >and a</p>
          </div>
          <div className="text-5xl font-bold text-slate-700 dark:text-slate-200">
            <p >Full Stack</p>
          </div>
          <div className="text-5xl font-bold text-slate-700 dark:text-slate-200">
            <p >MERN DEVELOPER</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-center py-5 text-lg md:text-2xl text-slate-600 dark:text-slate-300">
          "I am Mukul Kumar a Software Developer 🧑‍💻 with 1.5 years of industry experience in MERN Stack development,
          specializing in
          healthcare and
          payment provider web applications. I have honed my skills of HTML5, CSS3, JavaScript, ReactJS,
          NodeJS,
          ExpressJS,
          MongoDB and many more technologies.<br />
          &emsp; Passionate about creating robust and user-friendly web applications, I thrive in
          collaborative
          environments where I can
          contribute my technical expertise and problem-solving abilities.With this I am dedicated to creating
          efficient
          and
          scalable solutions.<br />
          &emsp; My work experience has provided me with a deep understanding of industry best practices,
          compliance
          standards, and data
          security. I am constantly staying updated with the latest technologies and trends in web development
          to
          ensure
          the
          applications I build are modern, intuitive, and meet the evolving needs of users."
        </div>
      </div>
    </div>
  </div>;
};

export default Bio;

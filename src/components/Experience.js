import React from "react";

const Experience = () => {
  return <div className="col-start-2 col-end-8">
    <div className="min-h-screen flex flex-col justify-evenly" id="project">
      <div className="flex justify-center my-5">
        <div className="text-4xl md:text-6xl font-bold text-slate-600 font-serif dark:text-slate-100">About</div>
      </div>
      <div className="">
        <div className="text-3xl text-slate-600 font-serif dark:text-slate-100 my-3">Experience</div>
        <div className="text-2xl text-slate-600 dark:text-slate-100">Wittybrains Software Pvt. Ltd.</div>
        <div className="text-slate-900 dark:text-slate-300">02-2022 - Present</div>
        <ul className="list-disc text-slate-900 dark:text-slate-300">
          <li>Experience on building extensive web application in the
            domain of Healthcare and Payment Providers</li>
          <li>Collaborated with cross-functional teams including
            designers and product managers to define project
            requirements and scope</li>
          <li>Ensured code quality and maintainability through unit
            testing and code reviews, following industry-standard best
          </li>
        </ul>
      </div>
      <div className="">
        <div className="text-3xl text-slate-600 font-serif dark:text-slate-100 my-3">Skills</div>
        <div className="flex justify-around">
          <div>
            <div className="text-xl text-slate-500">Languages</div>
            <ul className="text-slate-900 dark:text-slate-100">
              <li>C++</li>
              <li>JavaScript</li>
              <li>Python</li>
            </ul>
          </div>
          <div>
            <div className="text-xl text-slate-500">Frontend</div>
            <ul className="text-slate-900 dark:text-slate-100">
              <li>HTML</li>
              <li>CSS</li>
              <li>Tailwind CSS</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>ReactJS</li>
              <li>Angular</li>
            </ul>
          </div>
          <div>
            <div className="text-xl text-slate-500">Backend</div>
            <ul className="text-slate-900 dark:text-slate-100">
              <li>Nodejs</li>
              <li>ExpressJs</li>
              <li>MongoDB</li>
              <li>Mongoose</li>
            </ul>
          </div>
          <div>
            <div className="text-xl text-slate-500">Others</div>
            <ul className="text-slate-900 dark:text-slate-100">
              <li>Jira</li>
              <li>Postman</li>
              <li>Git</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>;
};

export default Experience;

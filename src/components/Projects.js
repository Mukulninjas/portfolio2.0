import React from "react";
import Ticketing from '../assets/Algo-Visualizer.png'

const Projects = () => {

  const projects = [
    {
      title: 'Portfolio Website',
      subtitle: 'A website to showcase my Skills',
      img_url: 'Portfolio-Image.png',
      source_code: 'https://github.com/Mukulninjas/portfolio',
      live: 'https://mukulninjas.github.io/portfolio/#project'
    },
    {
      title: 'IT Ticketing',
      subtitle: 'Ticketing app to handle IT support workload',
      img_url: 'Ticketing-Image.png',
      source_code: 'https://bitbucket.org/WittyIT/witty-ticketing/src/master/v',
      live: 'https://mukulninjas.github.io/portfolio/#project'
    },
    {
      title: 'Sorting Visualizer',
      subtitle: 'Visualization of different sorting algorithm',
      img_url: 'Algo-Visualizer.png',
      source_code: 'https://github.com/Mukulninjas/sorting-algo',
      live: 'https://mukulninjas.github.io/sorting-algo/'
    }
  ];

  return <div className="col-start-2 col-end-8">
    <div className="min-h-screen flex flex-col justify-evenly" id="project">
      <div className="flex justify-center my-5">
        <div className="text-4xl md:text-6xl font-bold text-slate-600 font-serif dark:text-slate-100">Projects</div>
      </div>
      <div className="">
        {/* <i id="left" className="fa-solid fa-angle-left"></i> */}
        <div className="flex flex-grow flex-shrink flex-wrap w-full justify-evenly">
          {projects.map((index, key) => {
            return (
              <div className="h-96 min-w-[300px] my-5 bg-slate-300 rounded-lg p-2">
                <img className="w-full h-36" src={require('../assets/'+index.img_url)} alt="project_image" />
                <div className="text-2xl">{index.title}</div>
                <div className="text-xl">{index.subtitle}</div>
                <div className="flex justify-between">
                  <div className="w-32 text-center rounded-lg bg-slate-800 p-2 text-lg text-slate-200"><a href={index.source_code} target="_blank">Source Code</a></div>
                  <div className="w-32 text-center rounded-lg bg-slate-800 p-2 text-lg text-slate-200"><a href={index.live} target="_blank">Live</a></div>
                </div>
              </div>)
          })}
        </div>
        {/* <i id="right" className="fa-solid fa-angle-right"></i> */}
      </div>
    </div>
  </div>;
};

export default Projects;

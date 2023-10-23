import React, { useEffect, useState } from "react";
import sun from '../assets/sun.gif';
import moon from "../assets/moon.png";
import mukul from "../assets/Mukul.png";

const Hero = () => {
    const [theme, setTheme] = useState("light");

    const handleThemeSwitch = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    useEffect(() => {
        const words = ["Software Developer", "Web Developer", "Web Designer", "UI/UX Designer"];
        let i = 0;
        let timer;

        function typeWriter() {
            const heading = document.getElementById("typewriter");
            const word = words[i];
            const speed = 250;

            if (heading.textContent.length < word.length) {
                heading.textContent += word.charAt(heading.textContent.length);
                timer = setTimeout(typeWriter, speed);
            } else {
                clearTimeout(timer);
                setTimeout(deleteText, speed * 2);
            }
        }

        function deleteText() {
            const heading = document.getElementById("typewriter");
            const word = words[i];
            const speed = 75;

            if (heading.textContent.length > 0) {
                heading.textContent = word.substring(0, heading.textContent.length - 1);
                timer = setTimeout(deleteText, speed);
            } else {
                i = (i + 1) % words.length;
                setTimeout(typeWriter, speed * 2);
            }
        }

        typeWriter();
    }, []);


    useEffect(() => {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    }, []);

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);

    return <div className="col-start-2 col-end-8">
        <div className="min-h-screen flex flex-col">
            <nav className="flex justify-between py-5">
                <div className="text-3xl md:text-5xl font-extrabold text-slate-600 font-serif dark:text-slate-200">NINJAS <b>.</b></div>
                <ul className="flex space-x-5 text-2xl">
                    <li className="hidden lg:block font-semibold text-slate-600 font-serif dark:text-slate-200"><a href="#home">Home</a></li>
                    <li className="hidden lg:block font-semibold text-slate-600 font-serif dark:text-slate-200"><a href="#bio">Bio</a></li>
                    <li className="hidden lg:block font-semibold text-slate-600 font-serif dark:text-slate-200"><a href="#about">Experience</a></li>
                    <li className="hidden lg:block font-semibold text-slate-600 font-serif dark:text-slate-200"><a href="#project">Project</a></li>
                    <li>
                        <button
                            onClick={() => handleThemeSwitch()}
                        >
                            {theme === "dark" ?
                                <img className="animate-spin w-8" src={moon} />
                                : <img className="animate-spin mix-blend-multiply w-8" src={sun} />}
                        </button>
                    </li>
                </ul>
            </nav>

            <div className="m-auto">
                <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-1/2 flex justify-center align-middle">
                        <img src={mukul} />
                    </div>
                    <div className="w-full md:w-1/2 space-y-3">
                        <span className="text-4xl font-semibold text-slate-600 dark:text-slate-100">Hello<span className="font-extrabold text-purple-600">_</span></span>
                        <h1 className="text-slate-700 font-extrabold h-32 text-5xl dark:text-slate-100">I'm <span className="text-purple-600" id="typewriter">Software Engineer</span></h1>
                        <p className="text-2xl text-slate-600 dark:text-slate-100">Software Engineering graduate and a Coding Enthusiast with strong technical skills anchored
                            on
                            extensive engineering coursework and a special focus on Full Stack Web Development. Let's
                            create something
                            extraordinary together!</p>
                        <div className="">
                            <button className="w-52 h-16 bg-slate-600 shadow-xl shadow-slate-600 dark:shadow-slate-950 text-slate-50 text-2xl font-semibold font-serif"><a
                                href="https://drive.google.com/file/d/19uWjImRV4P4tfPLPZxIMVeG5WQUDpE19/view?usp=drivesdk"
                                target="_blank"
                                download>Download CV</a></button>
                        </div>
                        <section className="space-x-5 text-5xl text-violet-900 py-10">
                            <a href="https://www.linkedin.com/in/mukul-kumar-31a2a71b0/"><i className="fab fa-linkedin"></i></a>
                            <a href="https://github.com/Mukulninjas"><i className="fab fa-github-square"></i></a>
                            <a href="mailto:mukulninjas@gmail.com"><i className="fa fa-envelope"></i></a>
                            <a href="tel:9582688985"><i className="fa fa-phone"></i></a>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </div>;
};

export default Hero;

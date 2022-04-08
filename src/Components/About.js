import React, { useState } from "react";
import image from "../Images/IMG_1454.png";
const About = () => {
  return (
    <div className="h-fit bg-primary2 min-h-screen" id="About">
      <div className=" w-4/5 mx-auto ">
        <div className="inline-block   w-full h-full mt-4">
          <div className="flex sm:flex-col smd:flex-row">
            <div className="basis-0 grow w-full  sm:w-full smd:w-6/12 md:w-6/12 max-h-screen ">
              <img
                src={image}
                alt="Abel Mdala"
                className="w-3/5 h-full block mx-auto AboutImage"
              />
            </div>
            <div className="flex basis-0 grow w-full flex-col ">
              <h3 className="sm:mx-auto text-white text-2xl mt-4 ">
                About Me
                <div className="h-0.5 bg-secondary mt-4"></div>
              </h3>

              <p className="mt-4 text-lg text-white">
                I Graduated from St John Paul College with an Advanced Diploma
                in Network Engineering, and I then later fell in love with
                programming and started Learning it. I have experience
                developing websites and web-based applications using plain HTML,
                CSS, and JavaScript but also using advanced frameworks and
                technologies such as React, Node.js, TailwindCss, and MongoDB
                and I am currently working as a Full-Stack software developer at
                M-technologies Limited.
              </p>

              <p className="mt-4 text-lg text-white">
                I am passionate about learning new technologies and how i can
                integrate them into my daily work.
              </p>
              <button className="border my-4  py-2 rounded-sm text-secondary border-secondary hover:bg-secondary hover:text-primary  md:block w-2/5">
                My Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

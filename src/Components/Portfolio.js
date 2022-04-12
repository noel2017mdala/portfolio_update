import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import whatsappImage from "../Images/Projects/webWhastapp_clone.jpg";
import photo_gallery from "../Images/Projects/photo_gallery.png";
import { Link } from "react-router-dom";
const Portfolio = (props) => {
  const { ref, inView, entry } = useInView();
  const [moduleView, setModuleVue] = useState(inView);
  const { tabState, setTabState } = props.navState;

  useEffect(() => {
    if (inView) {
      setTabState({
        ...tabState,

        about: false,
        portfolio: true,
        skills: false,
        contact: false,
      });
    }
  }, [inView]);

  return (
    <div className="h-fit min-h-screen bg-primary" id="Portfolio">
      <div className="w-11/12 m-auto ">
        <div className="inline-block   w-full h-full mt-4 " ref={ref}>
          <div className="w-fit">
            <h3 className="sm:mx-auto text-white text-2xl mt-4 w-fit">
              Portfolio
              <div className="h-0.5 bg-secondary mt-4"></div>
            </h3>
          </div>
        </div>

        <div className="grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
          <div className="shadow-xl  cursor-pointer  relative rounded">
            <img src={whatsappImage} className="block w-full" />
          </div>

          <div>
            <h1 className="text-secondary font-bold text-2xl">
              Whatsapp web clone
            </h1>
            <p className="text-white mt-4">
              I was inspired by the way WhatsApp web works so I created a clone
              of it. I enjoyed working on this application because it helped me
              understand more of the tools and technologies I used. This clone
              Application allows users to communicate privately and also create
              groups to have group communications. users can also update their
              Profiles as well as their about and they can also add contacts to
              their contact list. This application was developed using React,
              Redux, TailwindCSS for the frontEnd and also Node.js, Express.js,
              Mongoose, MongoDB, and also AWS for the Back-End.
            </p>

            <div className="flex  flex-row flex-wrap mt-2 w-fit">
              <span className="px-3 mx-2 bg-secondary rounded text-primary sm:mt-4 smd:mt-0 w-fit">
                React
              </span>
              <span className=" px-3 mx-2 bg-secondary rounded text-primary sm:mt-4 smd:mt-0 w-fit">
                Redux
              </span>

              <span className=" px-3 mx-2 bg-secondary rounded text-primary sm:mt-4 smd:mt-0 w-fit">
                Node.js
              </span>

              <span className=" px-3 mx-2 bg-secondary rounded text-primary sm:mt-4 smd:mt-0 w-fit">
                Express.js
              </span>

              <span className=" px-3 mx-2 bg-secondary rounded text-primary sm:mt-4 smd:mt-0 w-fit">
                MongoDb
              </span>
              <span className=" px-3 mx-2  bg-secondary rounded text-primary sm:mt-4 smd:mt-0 w-fit">
                AWS
              </span>
            </div>

            <div className="mt-4 mx-auto flex flex-row">
              <a
                className="text-center border my-4  py-2 rounded-sm text-white border-secondary2 hover:bg-secondary2 hover:text-white  md:block w-3/12 mx-2"
                href="https://github.com/noel2017mdala/whatsapp_clone"
                target="_blank"
              >
                GitHub
              </a>
              <a
                className="text-center border my-4  py-2 rounded-sm text-secondary border-secondary hover:bg-secondary hover:text-primary  md:block w-3/12 mx-2"
                href="http://whatsapp-webb-clone.netlify.app/"
                target="_blank"
              >
                Live Demo
              </a>
            </div>
          </div>

          <div className="shadow-xl  cursor-pointer relative rounded mt-6">
            <img src={photo_gallery} className="block w-full" />
          </div>

          <div className="mt-6">
            <h1 className="text-secondary font-bold text-2xl">Photo Gallery</h1>
            <p className="text-white mt-4">
              In this application, I Created a photo gallery app that uses the
              Unsplash Api to fetch images of different people.
            </p>

            <div className="flex  flex-row flex-wrap mt-2 w-fit">
              <span className="px-3 mx-2 bg-secondary rounded text-primary sm:mt-4 smd:mt-0 w-fit">
                React
              </span>
              <span className=" px-3 mx-2 bg-secondary rounded text-primary sm:mt-4 smd:mt-0 w-fit">
                Redux
              </span>
              <span className=" px-3 mx-2 bg-secondary rounded text-primary sm:mt-4 smd:mt-0 w-fit">
                Styled Components
              </span>

              <span className=" px-3 mx-2 bg-secondary rounded text-primary sm:mt-4 smd:mt-0 w-fit">
                Unsplash API
              </span>
            </div>

            <div className="mt-4 mx-auto flex flex-row">
              <a
                className="border my-4  py-2 rounded-sm text-white border-secondary2 hover:bg-secondary2 hover:text-white  md:block w-3/12 mx-2 text-center"
                href="https://github.com/noel2017mdala/photo_gallery"
                target="_blank"
              >
                GitHub
              </a>
              <a
                className="text-center border my-4  py-2 rounded-sm text-secondary border-secondary hover:bg-secondary hover:text-primary  md:block w-3/12 mx-2"
                href="https://heuristic-wright-38b95c.netlify.app/"
                target="_blank"
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="inline-block my-6  text-center">
            <Link
              to="/Portfolio"
              className="mx-auto border mt-8  p-2 rounded-sm text-secondary border-secondary hover:bg-secondary hover:text-primary  md:block w-fit text-center"
            >
              View more projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

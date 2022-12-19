import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import whatsappImage from "../Images/Projects/webWhastapp_clone.jpg";
import fileVert from "../Images/Projects/filevert.png";
import photo_gallery from "../Images/Projects/imageGenerator.png";
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-12 lg:gap-8 py-14 md:px-8">
          <div className="shadow-xl  cursor-pointer  relative rounded">
            <img src={fileVert} className="block w-full" />
          </div>

          <div>
            <h1 className="text-secondary font-bold text-2xl">File-vert</h1>
            <p className="text-white mt-4">
              File-vert is a subscription based web based application that
              allows users to convert different files to different formats based
              on their subscription type.
            </p>

            <div className="flex items-center justify-start space-x-4 mt-4 space-y-0">
              <span className="px-3 mx-2 bg-secondary rounded text-primary sm:mt-4 smd:mt-0 w-fit">
                React
              </span>
              <span className=" px-3 mx-2 bg-secondary rounded text-primary sm:mt-4 smd:mt-0 w-fit">
                Graphql
              </span>

              <span className=" px-3 mx-2 bg-secondary rounded text-primary sm:mt-4 smd:mt-0 w-fit">
                Node.js
              </span>

              <span className=" px-3 mx-2 bg-secondary rounded text-primary sm:mt-4 smd:mt-0 w-fit">
                Express.js
              </span>

              <span className=" px-3 mx-2 bg-secondary rounded text-primary sm:mt-4 smd:mt-0 w-fit">
                MongoDB
              </span>
              {/* <span className=" px-3 mx-2  bg-secondary rounded text-primary sm:mt-4 smd:mt-0 w-fit">
                AWS
              </span> */}
            </div>

            <div className="mt-4 mx-auto flex flex-row">
              <a
                className="text-center border my-4  py-2 rounded-sm text-white border-secondary2 hover:bg-secondary2 hover:text-white  md:block w-3/12 mx-2"
                href="https://github.com/noel2017mdala/file-vert"
                target="_blank"
              >
                GitHub
              </a>
              <a
                className="text-center border my-4  py-2 rounded-sm text-secondary border-secondary hover:bg-secondary hover:text-primary  md:block w-3/12 mx-2"
                href="https://filevert.netlify.app/"
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
            <h1 className="text-secondary font-bold text-2xl">
              Image generator
            </h1>
            <p className="text-white mt-4">
              OpenAi Image generator is a web-based application that utilizes
              the openAi image generator API to generate images of different
              sizes based on your image description.
            </p>

            <div className="flex items-center justify-start space-x-4 mt-4 space-y-0">
              <span className="px-3 mx-2 bg-secondary rounded text-primary sm:mt-4 smd:mt-0 w-fit">
                Node.js
              </span>
              <span className=" px-3 mx-2 bg-secondary rounded text-primary sm:mt-4 smd:mt-0 w-fit">
                HTML
              </span>
              <span className=" px-3 mx-2 bg-secondary rounded text-primary sm:mt-4 smd:mt-0 w-fit">
                CSS
              </span>

              <span className=" px-3 mx-2 bg-secondary rounded text-primary sm:mt-4 smd:mt-0 w-fit">
                OpenAi API
              </span>
            </div>

            <div className="mt-4 mx-auto flex flex-row">
              <a
                className="border my-4  py-2 rounded-sm text-white border-secondary2 hover:bg-secondary2 hover:text-white  md:block w-3/12 mx-2 text-center"
                href="https://github.com/noel2017mdala/openAi-imageGenerator"
                target="_blank"
              >
                GitHub
              </a>
              <a
                className="text-center border my-4  py-2 rounded-sm text-secondary border-secondary hover:bg-secondary hover:text-primary  md:block w-3/12 mx-2"
                href="https://openai-imagegenerator-production.up.railway.app/"
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

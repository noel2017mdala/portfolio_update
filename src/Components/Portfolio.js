import React from "react";
import whatsappImage from "../Images/Projects/webWhastapp_clone.jpg";
import photo_gallery from "../Images/Projects/photo_gallery.png";
import { Link } from "react-router-dom";
const Portfolio = () => {
  return (
    <div className="h-fit min-h-screen bg-primary" id="Portfolio">
      <div className="w-11/12 m-auto ">
        <div className="inline-block   w-full h-full mt-4 ">
          <div className="w-1/6">
            <h3 className="sm:mx-auto text-white text-2xl mt-4 ">
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
              A simple website that allows new and returning students to learn
              about the ACM club and keep them updated on upcoming events.
              Implemented using React for frontend and Sanity.io for headless
              content management system that allows current board members to
              edit/add events and member information without touching code.
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
              <button className="border my-4  py-2 rounded-sm text-white border-secondary2 hover:bg-secondary2 hover:text-white  md:block w-3/12 mx-2">
                GitHub
              </button>
              <button className="border my-4  py-2 rounded-sm text-secondary border-secondary hover:bg-secondary hover:text-primary  md:block w-3/12 mx-2">
                Live Demo
              </button>
            </div>
          </div>

          <div className="shadow-xl  cursor-pointer relative rounded mt-6">
            <img src={photo_gallery} className="block w-full" />
          </div>

          <div className="mt-6">
            <h1 className="text-secondary font-bold text-2xl">Photo Gallery</h1>
            <p className="text-white mt-4">
              A simple website that allows new and returning students to learn
              about the ACM club and keep them updated on upcoming events.
              Implemented using React for frontend and Sanity.io for headless
              content management system that allows current board members to
              edit/add events and member information without touching code.
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
              <button className="border my-4  py-2 rounded-sm text-white border-secondary2 hover:bg-secondary2 hover:text-white  md:block w-3/12 mx-2">
                GitHub
              </button>
              <button className="border my-4  py-2 rounded-sm text-secondary border-secondary hover:bg-secondary hover:text-primary  md:block w-3/12 mx-2">
                Live Demo
              </button>
            </div>
          </div>
        </div>

        <div className="">
          <button className=" mx-auto border mt-8  p-2 rounded-sm text-secondary border-secondary hover:bg-secondary hover:text-primary  md:block">
            <Link to="/Portfolio">View more projects</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

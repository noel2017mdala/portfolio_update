import React from "react";
import whatsappImage from "../Images/Projects/webWhastapp_clone.jpg";
import photo_gallery from "../Images/Projects/photo_gallery.png";
import FMS from "../Images/Projects/fms.png";
import { Link } from "react-router-dom";

const PersonalProjects = () => {
  return (
    <div className=" h-fit">
      <div className="grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="shadow-2xl  cursor-pointer transform transition duration-500 hover:scale-95 relative rounded">
          <img src={whatsappImage} className="block w-full" />
          <div className="absolute top-0 left-0 w-full h-full bg-black flex flex-col items-center justify-center opacity-0 transition-opacity  hover:opacity-70">
            <h3 className="text-white text-2xl font-bold">
              Whatsapp Web Clone
            </h3>

            {/* <Link
              className="bg-primary p-4 mt-4 rounded text-white  transform transition duration-500 hover:scale-110"
              to="/Portfolio"
            >
              Learn More
            </Link> */}
          </div>
        </div>

        <div className="shadow-2xl  cursor-pointer transform transition duration-500 hover:scale-95 relative rounded">
          <img src={photo_gallery} className="block w-full" />
          <div className="absolute top-0 left-0 w-full h-full bg-black flex flex-col items-center justify-center  opacity-0 transition-opacity  hover:opacity-70 ">
            <h3 className="text-white text-2xl font-bold">Photo gallery App</h3>

            {/* <Link
              className="bg-primary p-4 mt-4 rounded text-white  transform transition duration-500 hover:scale-110 z-50"
              to="/Portfolio"
            >
              Learn More
            </Link> */}
          </div>
        </div>

        <div className="shadow-2xl  cursor-pointer transform transition duration-500 hover:scale-95 relative rounded">
          <img src={FMS} className="block w-full" />
          <div className="absolute top-0 left-0 w-full h-full bg-black flex flex-col items-center justify-center  opacity-0 transition-opacity  hover:opacity-70 ">
            <h3 className="text-white text-2xl font-bold">
              Financial Management System
            </h3>

            {/* <Link
              className="bg-primary p-4 mt-4 rounded text-white  transform transition duration-500 hover:scale-110 z-50"
              to="/Portfolio"
            >
              Learn More
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalProjects;

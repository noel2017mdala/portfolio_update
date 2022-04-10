import React from "react";
import Simpo from "../Images/Projects/Simpo.jpg";
import SmartSchools from "../Images/Projects/smartschools.png";
import MMCN from "../Images/Projects/mulanjeMission.png";

const WorkProjects = () => {
  return (
    <div className=" h-fit">
      <div className="grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="shadow-2xl  cursor-pointer transform transition duration-500 hover:scale-95 relative rounded">
          <img src={Simpo} className="block w-full" />
          <div className="absolute top-0 left-0 w-full h-full bg-black flex flex-col items-center justify-center opacity-0 transition-opacity  hover:opacity-70">
            <h3 className="text-white text-2xl font-bold">
              Simpo Accounting Solutions
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
          <img src={SmartSchools} className="block w-full" />
          <div className="absolute top-0 left-0 w-full h-full bg-black flex flex-col items-center justify-center  opacity-0 transition-opacity  hover:opacity-70 ">
            <h3 className="text-white text-2xl font-bold">Smart Schools</h3>

            {/* <Link
            className="bg-primary p-4 mt-4 rounded text-white  transform transition duration-500 hover:scale-110 z-50"
            to="/Portfolio"
          >
            Learn More
          </Link> */}
          </div>
        </div>

        <div className="shadow-2xl  cursor-pointer transform transition duration-500 hover:scale-95 relative rounded">
          <img src={MMCN} className="block w-full" />
          <div className="absolute top-0 left-0 w-full h-full bg-black flex flex-col items-center justify-center  opacity-0 transition-opacity  hover:opacity-70 ">
            <h3 className="text-white text-2xl font-bold">MMCN Website</h3>

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

export default WorkProjects;

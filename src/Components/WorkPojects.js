import React from "react";
import Simpo from "../Images/Projects/Simpo.jpg";
import SmartSchools from "../Images/Projects/smartschools.png";
import MMCN from "../Images/Projects/mulanjeMission.png";

const WorkProjects = (props) => {
  const { modalState, SetModalState } = props.modal;
  const { modalData, SetModalData } = props.modalInfo;

  return (
    <div className=" h-fit">
      <div className="grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div
          className="shadow-2xl  cursor-pointer transform transition duration-500 hover:scale-95 relative rounded"
          onClick={() => {
            SetModalState({
              ...modalState,
              modalState: !modalState,
            });

            SetModalData({
              ...modalData,
              title: "Whatsapp Web Clone",
              image: Simpo,
              description:
                "I was inspired by the way WhatsApp web works so I created a clone of it. I enjoyed working on this application because it helped me understand more of the tools and technologies I used. This clone Application allows users to communicate privately and also create groups to have group communications. users can also update their Profiles as well as their about and they can also add contacts to their contact list. This application was developed using React, Redux, TailwindCSS for the frontEnd and also Node.js, Express.js, Mongoose, MongoDB, and also AWS for the Back-End.",
              tools: ["HTML", "PHP", "BootStrap", "CSS", "Javascript", "Mysql"],

              buttons: [
                {
                  demoActive: true,
                  gitActive: false,
                  gitLink: "",
                  demoLink: "",
                  name: "Simple Accounting",
                  link: "https://si-mpo.com/",
                },
              ],
            });
          }}
        >
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

        <div
          className="shadow-2xl  cursor-pointer transform transition duration-500 hover:scale-95 relative rounded"
          onClick={() => {
            SetModalState({
              ...modalState,
              modalState: !modalState,
            });

            SetModalData({
              ...modalData,
              title: "Smart Schools",
              image: SmartSchools,
              description:
                "I was inspired by the way WhatsApp web works so I created a clone of it. I enjoyed working on this application because it helped me understand more of the tools and technologies I used. This clone Application allows users to communicate privately and also create groups to have group communications. users can also update their Profiles as well as their about and they can also add contacts to their contact list. This application was developed using React, Redux, TailwindCSS for the frontEnd and also Node.js, Express.js, Mongoose, MongoDB, and also AWS for the Back-End.",
              tools: ["HTML", "PHP", "BootStrap", "CSS", "Javascript", "Mysql"],

              buttons: [
                {
                  demoActive: true,
                  gitActive: false,
                  gitLink: "",
                  demoLink: "",
                  name: "Smart Schools",
                  link: "https://www.smartschools.mw/",
                },
              ],
            });
          }}
        >
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

        <div
          className="shadow-2xl  cursor-pointer transform transition duration-500 hover:scale-95 relative rounded"
          onClick={() => {
            SetModalState({
              ...modalState,
              modalState: !modalState,
            });

            SetModalData({
              ...modalData,
              title: "Smart Schools",
              image: MMCN,
              description:
                "I was inspired by the way WhatsApp web works so I created a clone of it. I enjoyed working on this application because it helped me understand more of the tools and technologies I used. This clone Application allows users to communicate privately and also create groups to have group communications. users can also update their Profiles as well as their about and they can also add contacts to their contact list. This application was developed using React, Redux, TailwindCSS for the frontEnd and also Node.js, Express.js, Mongoose, MongoDB, and also AWS for the Back-End.",
              tools: [
                "HTML",
                "PHP",
                "BootStrap",
                "CSS",
                "Javascript",
                "Mysql",
                "Wordpress",
              ],

              buttons: [
                {
                  demoActive: true,
                  gitActive: false,
                  gitLink: "",
                  demoLink: "",
                  name: "Mulanje College",
                  link: "http://mmcnm.org/",
                },
              ],
            });
          }}
        >
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

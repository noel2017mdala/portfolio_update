import React, { useState } from "react";
import whatsappImage from "../Images/Projects/webWhastapp_clone.jpg";
import photo_gallery from "../Images/Projects/photo_gallery.png";
import FMS from "../Images/Projects/fms.png";
import { Link } from "react-router-dom";

const PersonalProjects = (props) => {
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
              image: whatsappImage,
              description:
                "I was inspired by the way WhatsApp web works so I created a clone of it. I enjoyed working on this application because it helped me understand more of the tools and technologies I used. This clone Application allows users to communicate privately and also create groups to have group communications. users can also update their Profiles as well as their about and they can also add contacts to their contact list. This application was developed using React, Redux, TailwindCSS for the frontEnd and also Node.js, Express.js, Mongoose, MongoDB, and also AWS for the Back-End.",
              tools: [
                "React",
                "Redux",
                "Node.js",
                "Express.js",
                "MongoDb",
                "AWS",
              ],

              buttons: [
                {
                  demoActive: true,
                  gitActive: true,
                  gitLink: "https://github.com/noel2017mdala/whatsapp_clone",
                  demoLink: "http://whatsapp-webb-clone.netlify.app/",
                  name: "Whatsapp Web Clone",
                  link: "",
                },
              ],
            });
          }}
        >
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

        <div
          className="shadow-2xl  cursor-pointer transform transition duration-500 hover:scale-95 relative rounded"
          onClick={() => {
            SetModalState({
              ...modalState,
              modalState: !modalState,
            });

            SetModalData({
              ...modalData,
              title: "Photo gallery App",
              image: photo_gallery,
              description:
                "This Project was developed using React,Redux and ReactStyled Components and i incorporated The Unsplash API which provides dozens of images that are displayed on this website and you can see different images from different users. I developed the project from the Ground App except the API that is provided buy Unsplash.",
              tools: ["React", "Redux", "Styled Components", "Unsplash API"],

              buttons: [
                {
                  demoActive: true,
                  gitActive: true,
                  gitLink: "https://github.com/noel2017mdala/photo_gallery",
                  demoLink: "https://heuristic-wright-38b95c.netlify.app/",
                  name: "https://github.com/noel2017mdala/fms_back",
                  link: "",
                },
              ],
            });
          }}
        >
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

        <div
          className="shadow-2xl  cursor-pointer transform transition duration-500 hover:scale-95 relative rounded"
          onClick={() => {
            SetModalState({
              ...modalState,
              modalState: !modalState,
            });

            SetModalData({
              ...modalData,
              title: "Financial Management System",
              image: FMS,
              description:
                "This Full-Stack Application was  developed using React, PHP, Laravel and Mysql. This application helps me easily manage my Finances and it provides a graphical representation of how i am spending with Chart.js which i incorporated in the application ",
              tools: ["React", "Redux", "PHP", "Laravel", "Mysql"],

              buttons: [
                {
                  demoActive: false,
                  gitActive: true,
                  gitLink: "",
                  demoLink: "",
                  name: "GitHub",
                  link: "https://github.com/noel2017mdala/fms_back",
                },
              ],
            });
          }}
        >
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

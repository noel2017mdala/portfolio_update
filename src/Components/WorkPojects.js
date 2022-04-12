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
                "Simple is an accounting SAAS Application that helps SME's easily manage their finances and all monetory activities involved. This application is connected to most of the financial institutions here in Malawi that helps in our clients easily make and receive payments",
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
                "SmartSchools is a Web and WhatsApp based school management platform that allows educational institutions to manage and track their day-to-day activities. The platform enables teachers to manage attendance, continuous assessments, examinations, and to also teach online. It helps administration to manage admission processes, generate school reports, manage fees payment and billing information, and also allows administration to send out text message communications to all stakeholders of the institution.",
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
              title: "MULANJE MISSION COLLEGE OF NURSING & MIDWIFERY",
              image: MMCN,
              description:
                "MULANJE MISSION COLLEGE OF NURSING & MIDWIFERY is a Nursing and Midwifery College and i was tasked to develop a website that they can easily manage and configure without the need of a developer, So i developed this site using Wordpress with the Astra Theme and Elementor Page Builder.",
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

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Tab, Tabs, AppBar } from "@material-ui/core";
import PersonalProjects from "./PersonalProjects";
import WorkProjects from "./WorkPojects";

const Nav = () => {
  return (
    <>
      <div className="mobileNav w-full h-16  fixed z-20 sm:block md:hidden lg:hidden ">
        <div className="">
          <div
            className="cursor-pointer  fixed top-4 right-4"
            onClick={() => {
              // !toggleOpen ? setToggle(true) : setToggle(false);
              // !toggleOpen ? setToggle(true) : setToggle(false);
            }}
          >
            {/* <div className="bg-white w-8 h-1 m-1.5"></div>
            <div className="bg-white w-8 h-1 m-1.5"></div>
            <div className="bg-white w-8 h-1 m-1.5"></div> */}

            <div className="float-right mt-2 text-white ">
              <ul className="inline mr-2">
                <Link
                  to="/"
                  className="mr-2 text-xl bg-secondary text-white p-2 rounded  text-center"
                >
                  Back
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <nav className="absolute w-full shadow ">
        <div className="basis-0 grow w-full bg-secondary sm:hidden md:block section stickyPosition">
          <div className="float-right mt-3 text-white ">
            <ul className="inline mr-6">
              <Link
                to="/"
                className="mr-2 text-xl bg-secondary text-white p-2 rounded  text-center"
              >
                Back
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

const Projects = () => {
  const [SelectedTab, setSelectedTab] = useState(0);

  const [modalState, SetModalState] = useState(false);
  const [modalData, SetModalData] = useState({
    title: "",
    image: "",
    description: "",
    tools: [],
    buttons: [
      {
        demoActive: false,
        gitActive: false,
        gitLink: "",
        demoLink: "",
        name: "",
        link: "",
      },
    ],
  });

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <div className="h-fit min-h-screen bg-primary relative" id="Portfolio">
      <Nav />
      <div className="w-11/12 m-auto ">
        <div className="inline-block   w-full h-full mt-4 ">
          <div className="w-1/6">
            <h3 className="sm:mx-auto text-white text-2xl mt-4 ">
              Portfolio
              <div className="h-0.5 bg-secondary mt-4"></div>
            </h3>
          </div>

          <div className="mt-8 ">
            <AppBar
              style={{ background: "#313131" }}
              position="static"
              className="md:max-w-3xl mx-auto rounded"
            >
              <Tabs
                value={SelectedTab}
                indicatorColor="primary"
                textColor="inherit"
                centered
                TabIndicatorProps={{
                  style: {
                    backgroundColor: "#FFB533",
                  },
                }}
                onChange={handleChange}
              >
                <Tab label="Personal Projects" />
                <Tab label="Work Projects" />
              </Tabs>
            </AppBar>
            <div className="mt-6">
              {SelectedTab === 0 ? (
                <PersonalProjects
                  modal={{ modalState, SetModalState }}
                  modalInfo={{ modalData, SetModalData }}
                />
              ) : (
                <WorkProjects
                  modal={{ modalState, SetModalState }}
                  modalInfo={{ modalData, SetModalData }}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {modalState ? (
        <div
          className="w-screen h-screen bg-red-200 fixed flex items-center justify-center top-0 mobileNav z-20"
          // onClick={() => {
          //   SetModalState(!modalState);
          // }}
        >
          <div className="bg-white w-3/4  h-3/4 rounded shadow-xl overflow-auto">
            <button
              className="float-right mx-6 mt-4 absolute right-4 top-1 text-white text-2xl"
              onClick={() => {
                SetModalState(!modalState);
                SetModalData({});
              }}
            >
              X
            </button>
            <div className="flex flex-col items-center justify-center">
              <div className="text-center mt-4 text-2xl uppercase tracking-wider text-secondary">
                {modalData.title}
              </div>
              <div>
                <img
                  src={modalData.image}
                  alt=""
                  className="w-2/3 h-2/3 block mx-auto my-4 cursor-pointer"
                />
              </div>
              <div className=" my-6 w-4/5 mx-auto text-md">
                {modalData.description}
              </div>

              <div className="flex  flex-row flex-wrap mt-2 w-fit">
                {modalData.tools.map((e, i) => (
                  <span
                    className="px-3 mx-2 mt-2 bg-secondary rounded text-primary sm:mt-4 smd:mt-0 w-fit"
                    key={i}
                  >
                    {e}
                  </span>
                ))}
              </div>
            </div>

            <div className="">
              <div className=" flex items-center justify-center">
                {modalData.buttons.map((items, i) =>
                  items.demoActive && items.gitActive ? (
                    <span
                      key={i}
                      className=" w-2/5 flex flex-row items-center justify-center "
                    >
                      <a
                        className="border m-6 px-4 py-2   bg-secondary2 text-white rounded  block w-fit text-center"
                        target="_blank"
                        href={items.gitLink}
                      >
                        GitHub
                      </a>

                      <a
                        className="border  m-4 px-4 py-2  bg-secondary2 text-white rounded   block w-fit text-center"
                        target="_blank"
                        href={items.demoLink}
                      >
                        demo
                      </a>
                    </span>
                  ) : items.demoActive || items.gitActive ? (
                    <span
                      key={i}
                      className=" w-2/5 flex flex-row items-center justify-center "
                    >
                      <a
                        className="border m-6 px-4 py-2   bg-secondary2 text-white rounded  block w-fit text-center"
                        target="_blank"
                        href={items.link}
                      >
                        {items.name}
                      </a>
                    </span>
                  ) : (
                    ""
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Projects;

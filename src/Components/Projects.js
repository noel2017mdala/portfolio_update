import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Tab, Tabs, AppBar } from "@material-ui/core";
import PersonalProjects from "./PersonalProjects";
import WorkProjects from "./WorkPojects";

const Nav = () => {
  return (
    <>
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

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <div className="h-fit min-h-screen bg-primary" id="Portfolio">
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
                textColor="#FFFFFF"
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
              {SelectedTab === 0 ? <PersonalProjects /> : <WorkProjects />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

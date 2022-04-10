import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

import HTML from "../Images/Skills/html.af7415b4.svg";
import CSS from "../Images/Skills/css.9ed7063d.svg";
import JavaScript from "../Images/Skills/javascript.7279defd.svg";
import ReactImg from "../Images/Skills/react.e8433ebf.svg";
import NodeJS from "../Images/Skills/nodejs.cccdafa9.svg";
import MongoDB from "../Images/Skills/1012822_code_development_logo_mongodb_programming_icon.svg";
import Express from "../Images/Skills/express.b78e9cd2.svg";
import Mongoose from "../Images/Skills/mongoose.92d62dac.png";
import GIT from "../Images/Skills/git.43d387b7.svg";
import SQL from "../Images/Skills/SQL.png";
import TailwindCSS from "../Images/Skills/tailwind-css-1.svg";
import Linux from "../Images/Skills/Linux.png";
import StyledComponents from "../Images/Skills/logo.png";
import logo from "../Images/Skills/react.e8433ebf.svg";

const list = [
  {
    image: HTML,
    name: "HTML",
  },
  {
    image: CSS,
    name: "CSS",
  },
  {
    image: TailwindCSS,
    name: "TailwindCSS",
  },

  {
    image: StyledComponents,
    name: "Styled Components",
  },
  {
    image: JavaScript,
    name: "Javascript",
  },
  {
    image: logo,
    name: "React and React Native",
  },
  {
    image: NodeJS,
    name: "Node.js",
  },

  {
    image: Express,
    name: "Express.js",
  },
  {
    image: MongoDB,
    name: "MongoDB",
  },

  {
    image: SQL,
    name: "SQL",
  },

  {
    image: Mongoose,
    name: "Mongoose",
  },

  {
    image: GIT,
    name: "Git",
  },

  {
    image: Linux,
    name: "Linux",
  },
];

const Skills = (props) => {
  const { ref, inView, entry } = useInView();

  const [moduleView, setModuleVue] = useState(inView);
  const { tabState, setTabState } = props.navState;

  // console.log(moduleView);

  useEffect(() => {
    if (inView) {
      setTabState({
        ...tabState,

        about: false,
        portfolio: false,
        skills: true,
        contact: false,
      });
    }
  }, [inView]);

  return (
    <div className="h-fit min-h-screen bg-primary2" id="Skills">
      <div className="w-11/12 m-auto " ref={ref}>
        <div className="inline-block   w-full h-full mt-4 ">
          <div className="w-1/6">
            <h3 className="sm:mx-auto text-white text-2xl mt-4 ">
              My Skills
              <div className="h-0.5 bg-secondary mt-4"></div>
            </h3>
          </div>
        </div>
      </div>

      <div className=" w-4/5 mx-auto mt-8 grid_template">
        {list.map((data, key) => (
          <div
            key={key}
            className="grid_box bg-white text-primary cursor-pointer"
          >
            <img
              src={data.image}
              className={`skills_images${
                data.name === "Linux" ? `w-3/12 h-3/12 m-auto` : ``
              }`}
            />

            <p>{data.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

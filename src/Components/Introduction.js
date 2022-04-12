import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Resume from "../Documents/Resume.pdf";

import image from "../Images/IMG_1454.png";

const Introduction = (props) => {
  const { ref, inView, entry } = useInView();

  const [moduleView, setModuleVue] = useState(inView);
  const { tabState, setTabState } = props.navState;

  useEffect(() => {
    if (inView) {
      setTabState({
        ...tabState,

        about: false,
        portfolio: false,
        skills: false,
        contact: false,
      });
    }
  }, [inView]);

  return (
    <div className="w-full h-full flex ">
      <div className="bg-primary w-full basis-40 grow">
        <div className="w-9/12 h-3/4">
          <div className="flex items-center justify-center h-full" ref={ref}>
            <div className="w-5/6 mt-20">
              <h3 className="text-white text-2xl font-semibold">Hello 👋</h3>
              <p className="text-secondary text-2xl mt-2">I'm Abel M'dala</p>
              <p className="text-white text-2xl mt-2 absolute animationData">
                Full-stack software developer.&nbsp;
              </p>

              <a
                className="border mt-20 px-4 py-2 rounded-sm text-secondary border-secondary hover:bg-secondary hover:text-primary  block w-fit text-center"
                href={Resume}
                target="_blank"
              >
                My Resume
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="basis-0 grow w-full bg-secondary sm:hidden md:block">
        <div className="absolute h-full  w-fit positioned ">
          <img src={image} alt="Abel Mdala" className=" h-full" />
        </div>
      </div>
    </div>
  );
};

export default Introduction;

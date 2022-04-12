import React from "react";
import Contact from "./Contact";

const ContactBody = (props) => {
  return (
    <div className="h-fit min-h-screen bg-primary" id="Contact">
      <div className="w-11/12 m-auto ">
        <div className="inline-block   w-fit h-full mt-4 ">
          <div className="w-1/6">
            <h3 className="sm:mx-auto text-white text-2xl mt-4 w-fit">
              Contact
              <div className="h-0.5 bg-secondary mt-4"></div>
            </h3>
          </div>
        </div>
      </div>

      <div>
        <Contact navState={props.navState} />
      </div>
    </div>
  );
};

export default ContactBody;

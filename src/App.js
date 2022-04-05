import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import image from "./Images/IMG_1454.png";
import whatsappImage from "./Images/Projects/webWhastapp_clone.jpg";
import photo_gallery from "./Images/Projects/photo_gallery.png";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="h-screen">
        <div className="w-full h-full flex ">
          <div className="bg-primary w-full basis-40 grow">
            <div className="w-9/12 h-3/4">
              <div className="flex items-center justify-center h-full">
                <div className="w-5/6 mt-20">
                  <h3 className="text-white text-2xl font-semibold">
                    Hello 👋
                  </h3>
                  <p className="text-secondary text-2xl mt-2">
                    I'm Abel M'dala
                  </p>
                  <p className="text-white text-2xl mt-2 absolute animationData">
                    Full-stack software developer.&nbsp;
                  </p>

                  <button className="border mt-20 px-4 py-2 rounded-sm text-secondary border-secondary hover:bg-secondary hover:text-primary  md:block">
                    My Resume
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="basis-0 grow w-full bg-secondary sm:hidden md:block">
            {/* Navigation */}

            <div className="basis-0 grow w-full bg-secondary sm:hidden md:block section relative">
              <div className="float-right mt-4 text-white">
                <Link className="mr-3 text-xl cursor-pointer" to="/About">
                  About
                </Link>
                <Link className="mr-3 text-xl cursor-pointer" to="/Resume">
                  Resume
                </Link>
                <Link className="mr-3 text-xl cursor-pointer" to="/Projects">
                  Projects
                </Link>
                <Link
                  className="mr-3 text-xl bg-primary text-white p-2 rounded font-bold"
                  to="/Contact"
                >
                  Contact
                </Link>
              </div>
            </div>

            {/* Navigation */}

            <div className="absolute h-full  w-3/5 positioned">
              <img src={image} alt="Abel Mdala" className=" h-full" />
            </div>
          </div>
        </div>
        <div className="h-fit bg-primary2 min-h-screen">
          <div className=" w-4/5 mx-auto ">
            <div className="inline-block   w-full h-full mt-4">
              <div className="flex sm:flex-col smd:flex-row">
                <div className="basis-0 grow w-full  sm:w-full smd:w-6/12 md:w-6/12 max-h-screen ">
                  <img
                    src={image}
                    alt="Abel Mdala"
                    className="w-3/5 h-full block mx-auto AboutImage"
                  />
                </div>
                <div className="flex basis-0 grow w-full flex-col ">
                  <h3 className="sm:mx-auto text-white text-2xl mt-4 ">
                    About Me
                    <div className="h-0.5 bg-secondary mt-4"></div>
                  </h3>

                  <p className="mt-4 text-lg text-white">
                    I Graduated from St John Paul College with an Advanced
                    Diploma in Network Engineering, and I then later fell in
                    love with programming and started Learning it. I have
                    experience developing websites and web-based applications
                    using plain HTML, CSS, and JavaScript but also using
                    advanced frameworks and technologies such as React, Node.js,
                    TailwindCss, and MongoDB and I am currently working as a
                    Full-Stack software developer at M-technologies Limited.
                  </p>

                  <p className="mt-4 text-lg text-white">
                    I am passionate about learning new technologies and how i
                    can integrate them into my work.
                  </p>
                  <button className="border my-4  py-2 rounded-sm text-secondary border-secondary hover:bg-secondary hover:text-primary  md:block w-2/5">
                    My Resume
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-fit min-h-screen bg-primary">
          <div className="w-11/12 m-auto ">
            <div className="inline-block   w-full h-full mt-4 ">
              <div className="w-1/6">
                <h3 className="sm:mx-auto text-white text-2xl mt-4 ">
                  Portfolio
                  <div className="h-0.5 bg-secondary mt-4"></div>
                </h3>
              </div>
            </div>

            <div className="grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
              <div className="shadow-xl  cursor-pointer  relative rounded">
                <img src={whatsappImage} className="block w-full" />
              </div>

              <div>
                <h1 className="text-secondary font-bold text-2xl">
                  Whatsapp web clone
                </h1>
                <p className="text-white mt-4">
                  A simple website that allows new and returning students to
                  learn about the ACM club and keep them updated on upcoming
                  events. Implemented using React for frontend and Sanity.io for
                  headless content management system that allows current board
                  members to edit/add events and member information without
                  touching code.
                </p>
              </div>

              <div className="shadow-xl  cursor-pointer relative rounded mt-8">
                <img src={photo_gallery} className="block w-full" />
              </div>

              <div className="mt-8">
                <h1 className="text-secondary font-bold text-2xl">
                  Photo Gallery
                </h1>
                <p className="text-white mt-4">
                  A simple website that allows new and returning students to
                  learn about the ACM club and keep them updated on upcoming
                  events. Implemented using React for frontend and Sanity.io for
                  headless content management system that allows current board
                  members to edit/add events and member information without
                  touching code.
                </p>
              </div>
            </div>

            <div className="">
              <button className=" mx-auto border my-4  p-2 rounded-sm text-secondary border-secondary hover:bg-secondary hover:text-primary  md:block">
                View more projects
              </button>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

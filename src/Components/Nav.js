import React from "react";

const Nav = (props) => {
  const clickHandler = (e) => {
    e.preventDefault();

    const target = e.target.getAttribute("href");
    const location = document.querySelector(target).offsetTop;

    window.scrollTo({
      left: 0,
      top: location - 56,
    });
  };

  return (
    <>
      <nav className="absolute w-full shadow">
        {/* Navigation */}

        <div className="basis-0 grow w-full bg-secondary sm:hidden md:block section stickyPosition">
          <div className=" w-fit inline-block ml-8 mt-3">
            <li className="text-white text-xl">
              <a
                className="mr-3 text-xl cursor-pointer"
                href="#Home"
                onClick={clickHandler}
              >
                Abel M'dala
              </a>
            </li>
          </div>

          <div className="float-right mt-3 text-white ">
            <ul className="inline ">
              <li
                className={`mr-2 text-xl ${
                  props.navState.tabState.about ? "bg-secondary" : ""
                } text-white p-2 rounded  text-center `}
                onClick={clickHandler}
              >
                <a
                  className="mr-3 text-xl cursor-pointer"
                  href="#About"
                  onClick={clickHandler}
                >
                  About
                </a>
              </li>
              <li
                className={`mr-2 text-xl ${
                  props.navState.tabState.portfolio ? "bg-secondary" : ""
                } text-white p-2 rounded  text-center `}
                onClick={clickHandler}
              >
                <a
                  className="mr-3 text-xl cursor-pointer"
                  href="#Portfolio"
                  onClick={clickHandler}
                >
                  Portfolio
                </a>
              </li>

              <li
                className={`mr-2 text-xl ${
                  props.navState.tabState.skills ? "bg-secondary" : ""
                } text-white p-2 rounded  text-center `}
                onClick={clickHandler}
              >
                <a
                  className="mr-3 text-xl cursor-pointer text-center"
                  href="#Skills"
                  onClick={clickHandler}
                >
                  Skills
                </a>
              </li>
              <li
                className={`mr-2 text-xl ${
                  props.navState.tabState.contact ? "bg-secondary" : ""
                } text-white p-2 rounded  text-center `}
                onClick={clickHandler}
              >
                <a className="mr-3 text-xl cursor-pointer" href="#Contact">
                  Contact
                </a>
              </li>
            </ul>
            {/* <Link className="mr-3 text-xl cursor-pointer" to="#Resume">
                  Resume
                </Link>
                <Link className="mr-3 text-xl cursor-pointer" to="#Projects">
                  Projects
                </Link>
                <Link
                  className="mr-3 text-xl bg-primary text-white p-2 rounded font-bold"
                  to="#Contact"
                >
                  Contact
                </Link> */}
          </div>
        </div>

        {/* Navigation  w-3/5*/}
      </nav>

      <div className="mobileNav w-full h-16  fixed z-20 sm:block md:hidden lg:hidden ">
        <div className="">
          <div
            className="cursor-pointer  fixed top-4 right-4"
            onClick={() => {
              // !toggleOpen ? setToggle(true) : setToggle(false);
              // !toggleOpen ? setToggle(true) : setToggle(false);
            }}
          >
            <div className="bg-white w-8 h-1 m-1.5"></div>
            <div className="bg-white w-8 h-1 m-1.5"></div>
            <div className="bg-white w-8 h-1 m-1.5"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;

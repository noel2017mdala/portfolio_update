import React from "react";

const Nav = () => {
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
      <nav className="absolute w-full ">
        {/* Navigation */}

        <div className="basis-0 grow w-full bg-secondary sm:hidden md:block section stickyPosition">
          <div className=" w-fit inline-block ml-8 mt-3">
            <a href="#Home" className="text-white text-xl">
              Abel M'dala
            </a>
          </div>

          <div className="float-right mt-3 text-white ">
            <ul className="inline ">
              <li className="">
                <a
                  className="mr-3 text-xl cursor-pointer"
                  href="#About"
                  onClick={clickHandler}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className="mr-3 text-xl cursor-pointer"
                  href="#Portfolio"
                  onClick={clickHandler}
                >
                  Portfolio
                </a>
              </li>

              <li>
                <a
                  className="mr-3 text-xl cursor-pointer"
                  href="#Skills"
                  onClick={clickHandler}
                >
                  Skills
                </a>
              </li>
              <li
                className="mr-2 text-xl bg-primary text-white p-2 rounded  text-center "
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
    </>
  );
};

export default Nav;

import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import gitHub from "../Images/Socials/4747499_github_icon.png";
import LinkedIn from "../Images/Socials/5296501_linkedin_network_linkedin logo_icon.png";
import Twitter from "../Images/Socials/317723_social media_tweet_twitter_social_icon.png";
import Instagram from "../Images/Socials/1298747_instagram_brand_logo_social media_icon.png";

const Contact = (props) => {
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
        contact: true,
      });
    }
  }, [inView]);

  const { REACT_APP_SERVICE_KEY, REACT_APP_TEMPLATE_ID, REACT_APP_USER_ID } =
    process.env;

  const [userInput, setUserInput] = useState({
    userName: "",
    email: "",
    subject: "",
    body: "",
  });

  const [notificationError, setNotificationErr] = useState({
    userName: false,
    email: false,
    subject: false,
    body: false,
  });

  const clearInput = () => {
    setUserInput({
      ...userInput,
      userName: "",
      email: "",
      subject: "",
      body: "",
    });
  };

  const clearInputErrors = () => {
    setNotificationErr({
      ...notificationError,
      userName: false,
      email: false,
      subject: false,
      body: false,
    });
  };

  const sendMail = (e) => {
    e.preventDefault();

    if (
      userInput.userName === "" &&
      userInput.email === "" &&
      userInput.subject === "" &&
      userInput.body === ""
    ) {
      setNotificationErr({
        ...notificationError,
        userName: true,
        email: true,
        subject: true,
        body: true,
      });
    } else if (userInput.userName === "") {
      setNotificationErr({
        ...notificationError,
        userName: true,
        email: false,
        subject: false,
        body: false,
      });
    } else if (userInput.email === "") {
      setNotificationErr({
        ...notificationError,
        userName: false,
        email: true,
        subject: false,
        body: false,
      });
    } else if (userInput.subject === "") {
      setNotificationErr({
        ...notificationError,
        userName: false,
        email: false,
        subject: true,
        body: false,
      });
    } else if (userInput.body === "") {
      setNotificationErr({
        ...notificationError,
        userName: false,
        email: false,
        subject: false,
        body: true,
      });
    } else {
      // console.log(e.target.userName);
      // return;
      emailjs
        .sendForm(
          REACT_APP_SERVICE_KEY,
          REACT_APP_TEMPLATE_ID,
          e.target,
          REACT_APP_USER_ID
        )
        .then(
          (result) => {
            clearInput();
            notify();
            //   console.log(result.text);
          },
          (error) => {
            tostErr();
            console.log(error.text);
          }
        );

      e.target.reset();
    }
  };

  const notify = () =>
    toast.success("Email Sent Successfully", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const tostErr = () =>
    toast.error("Failed to send email Please try again later ", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  return (
    <div>
      <div className="w-full sm:max-w-xs md:max-w-md m-auto pb-4 mt-4">
        <form
          className="bg-white rounded px-8 pt-6 pb-8 mb-4 dark:bg-darkSecondary"
          onSubmit={sendMail}
          ref={ref}
        >
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2 uppercase dark:text-black">
              Your Name
            </label>

            <input
              className="  shadow
            appearance-none
            border
            rounded
            w-full
            py-3
            px-3
            text-black
            leading-tight
            focus:outline-none focus:shadow-outline
            dark:text-black
            dark:shadow-lg"
              type="text"
              name="username"
              value={userInput.userName}
              placeholder="Your Name"
              onChange={(e) => {
                clearInputErrors();
                setUserInput({
                  ...userInput,
                  userName: e.target.value,
                });
              }}
            />

            <p className="text-red-500 text-sm italic pt-3">
              {notificationError.userName ? "Please enter your name" : null}
            </p>
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2 uppercase dark:text-black">
              Email
            </label>

            <input
              className="
            shadow
            appearance-none
            border
            rounded
            w-full
            py-3
            px-3
            text-black
            mb-3
            leading-tight
            focus:outline-none 
            focus:shadow-outline
            dark:text-black
            "
              type="Email"
              name="email"
              placeholder="Email"
              value={userInput.email}
              onChange={(e) => {
                clearInputErrors();
                setUserInput({
                  ...userInput,
                  email: e.target.value,
                });
              }}
            />

            <p className="text-red-500 text-sm italic pt-3">
              {notificationError.email
                ? "Please enter a valid Email Address"
                : null}
            </p>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2 uppercase dark:text-black">
              Subject
            </label>

            <input
              className="shadow
            
            border
            rounded
            w-full
            py-3
            px-3
            text-black
            leading-tight
            focus:outline-none focus:shadow-outline
            dark:text-black
            dark:shadow-lg"
              type="text"
              name="subject"
              value={userInput.subject}
              placeholder="Subject"
              onChange={(e) => {
                clearInputErrors();
                setUserInput({
                  ...userInput,
                  subject: e.target.value,
                });
              }}
            />

            <p className="text-red-500 text-sm italic pt-3">
              {notificationError.subject ? "Please enter your subject" : null}
            </p>
          </div>

          <label className="block text-gray-700 text-sm font-bold mb-2 uppercase dark:text-black">
            Message
          </label>
          <textarea
            id="w3review"
            name="message"
            value={userInput.body}
            rows="4"
            cols="50"
            className="shadow
          appearance-none
          border
          rounded
          w-full
          py-3
          px-3
          text-black
          leading-tight
          focus:outline-none focus:shadow-outline
          dark:text-black
          dark:shadow-lg"
            onChange={(e) => {
              clearInputErrors();
              setUserInput({
                ...userInput,
                body: e.target.value,
              });
            }}
          ></textarea>

          <p className="text-red-500 text-sm italic pt-3">
            {notificationError.body ? "Please enter a message Body" : null}
          </p>

          <button className="sm:mt-4 bg-blue-500 p-3 font-light  rounded text-white mr-6 hover:bg-blue-400 transform transition duration-500 hover:scale-110 ">
            Submit
          </button>
        </form>

        <div>
          <h3 className="text-center font-bold text-white">
            Please Feel Free To Reach Out On The Following Platforms{" "}
          </h3>

          <div className="flex sm:justify-between mt-8 p-4">
            <div className="cursor-pointer transform transition duration-500 hover:scale-110">
              <a href="https://github.com/noel2017mdala/">
                <img className="w-8 h-8 rounded" src={gitHub} />
              </a>
            </div>

            <div className="cursor-pointer transform transition duration-500 hover:scale-110">
              <a href="https://www.linkedin.com/in/abel-mdala/">
                <img className="w-8 h-8 rounded" src={LinkedIn} />
              </a>
            </div>
            {/* <div className="cursor-pointer transform transition duration-500 hover:scale-110">
<img className="w-8 h-8 rounded" src={Gmail} />
</div> */}
            <div className="cursor-pointer transform transition duration-500 hover:scale-110">
              <a href="https://twitter.com/MdalaNoel">
                <img className="w-8 h-8 rounded" src={Twitter} />
              </a>
            </div>
            <div className="cursor-pointer transform transition duration-500 hover:scale-110">
              <a href="https://www.instagram.com/abelgmdala/">
                <img className="w-8 h-8 rounded" src={Instagram} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default Contact;

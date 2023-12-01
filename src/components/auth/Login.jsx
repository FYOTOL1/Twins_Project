import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  // eslint-disable-next-line no-unused-vars
  const [Email, setEmail] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [Password, setPassword] = useState("");

  const formRef = useRef();

  const Signup_Handler = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Link to={"/"}>
        <img
          className="w-20 h-20 m-auto mb-10 cursor-pointer"
          src="../../../icon.png"
          alt="Icon of Platform"
        />
      </Link>

      <form
        ref={formRef}
        action="/"
        method="POST"
        encType="multipart/form-data"
      >
        <div className="relative text-gray-50 mb-4">
          <div className="flex w-full mb-4">
            <input
              type="text"
              className="relative text-gray-50 m-0 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
              placeholder="Email"
              name="email"
              aria-label="Email"
              aria-describedby="email"
              autoFocus="on"
            />
            <span
              className="flex items-center whitespace-nowrap rounded-r border border-l-0 border-solid border-neutral-300 px-3 py-[0.25rem] text-center text-base font-normal leading-[1.6] dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
              id="email"
            >
              @example.com
            </span>
          </div>
          <div className="flex w-full mb-4">
            <input
              type="text"
              className="relative text-gray-50 m-0 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
              placeholder="Password"
              name="password"
              aria-label="Password"
              aria-describedby="password"
            />
            <span
              className="flex items-center whitespace-nowrap rounded-r border border-l-0 border-solid border-neutral-300 px-3 py-[0.25rem] text-center text-base font-normal leading-[1.6] dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
              id="password"
            >
              <i className="fa-solid fa-lock"></i>
            </span>
          </div>
        </div>

        <button
          onClick={(e) => Signup_Handler(e)}
          type="submit"
          className="btn w-full bg-transparent transition-all [text-wrap:nowrap] hover:bg-teal-500 text-teal-700 font-semibold hover:text-white py-1 px-4 border border-teal-500 hover:border-transparent rounded"
        >
          Sign up
        </button>
      </form>

      <Link
        className="flex justify-end gap-1 mt-5 items-baseline transition-all text-gray-50 text-lg hover:text-gray-500 flex-row-reverse"
        to={"/auth/signup"}
      >
        <p>Sign up</p>
        <i className="fa-solid fa-arrow-left"></i>
      </Link>
    </>
  );
}

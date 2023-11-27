import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  const imgRef = useRef();
  const formRef = useRef();
  const [Src, setSrc] = useState("");

  const Avatar_Handler = () => {
    const data = new FormData(formRef.current);
    const src = URL.createObjectURL(data.get("avatar"));
    imgRef.current.src = src;
    setSrc(src);
  };

  const Signup_Handler = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <form
        ref={formRef}
        action="/"
        method="POST"
        encType="multipart/form-data"
      >
        <div className="avatar flex items-center text-gray-100 text-center flex-col">
          <label
            htmlFor="avatar"
            className="relative block rounded-full transition-all hover:rotate-12 cursor-pointer h-20 w-20 bg-[white] overflow-hidden"
          >
            <img
              className="w-full h-full object-cover"
              ref={imgRef}
              src={
                "https://i.pinimg.com/564x/2e/60/80/2e60808c2b288e393128ebed7ee988b6.jpg"
              }
              alt=""
            />
          </label>
          <input
            onChange={() => Avatar_Handler()}
            type="file"
            className="[display:none]"
            id="avatar"
            name="avatar"
          />
          <p>80x80</p>
        </div>
        <div className="relative text-gray-50 mb-4 mt-10 flex flex-wrap items-stretch">
          <span
            className="flex items-center whitespace-nowrap rounded-l border border-r-0 border-solid border-neutral-300 px-3 py-[0.25rem] text-center text-base font-normal leading-[1.6] dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
            id="basic-addon1"
          >
            @
          </span>
          <input
            type="text"
            className="relative text-gray-50 m-0 block w-[1px] min-w-0 flex-auto rounded-r border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
            placeholder="Username"
            name="username"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>

        <div className="relative text-gray-50 mb-4">
          <div className="flex w-full mb-4">
            <input
              type="text"
              className="relative text-gray-50 m-0 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
              placeholder="Email"
              name="email"
              aria-label="Email"
              aria-describedby="email"
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

        <div className="last_inputs relative text-gray-50 gap-1 mb-4 flex items-center">
          <div className="flex w-full">
            <input
              type="text"
              className="relative [border-radius:4px_0px_0px_4px] text-gray-50 m-0 block w-[1px] min-w-0 flex-auto border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
              aria-label="Country"
              name="country"
              placeholder="Country"
            />
            <span
              className="flex items-center whitespace-nowrap rounded-r border border-l-0 border-solid border-neutral-300 px-3 py-[0.25rem] text-center text-base font-normal leading-[1.6] dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
              id="Country"
            >
              <i className="fa-solid fa-flag"></i>
            </span>
          </div>
          <div className="flex w-full">
            <input
              type="text"
              className="relative [border-radius:4px_0px_0px_4px] text-gray-50 m-0 block w-[1px] min-w-0 flex-auto border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
              aria-label="age"
              name="age"
              placeholder="Age"
            />
            <span
              className="flex items-center whitespace-nowrap rounded-r border border-l-0 border-solid border-neutral-300 px-3 py-[0.25rem] text-center text-base font-normal leading-[1.6] dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
              id="age"
            >
              <i className="fa-solid fa-calendar-days"></i>
            </span>
          </div>
          <button
            onClick={(e) => Signup_Handler(e)}
            type="submit"
            className="btn bg-transparent transition-all [text-wrap:nowrap] hover:bg-teal-500 text-teal-700 font-semibold hover:text-white py-1 px-4 border border-teal-500 hover:border-transparent rounded"
          >
            Sign up
          </button>
        </div>
      </form>

      <Link
        className="flex justify-end gap-1 mt-5 items-baseline transition-all text-gray-50 text-lg hover:text-gray-500"
        to={"/auth/login"}
      >
        <p>Login</p>
        <i class="fa-solid fa-arrow-right"></i>
      </Link>
    </>
  );
}

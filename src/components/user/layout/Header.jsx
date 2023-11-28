import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className="user-header h-[70px]">
        <div className="container h-full flex justify-between items-center">
          <div className="Logo-Search flex gap-4 items-center">
            <div className="Logo">
              <Link to="/">
                <img
                  className="w-10 h-10"
                  src="../../../../icon.png"
                  alt="Logo"
                />
              </Link>
            </div>
            <div className="Search relative rounded-full bg-[#1f2937]">
              <input
                id="search"
                className="ps-9 pe-6 max-w-[300px] w-full h-9 rounded-full border-none outline-none outline-[#3f5470] focus:outline-offset-[3.5px] text-[whiteSmoke] text-lg bg-[#253244]"
                type="text"
                placeholder="Search..."
                autoComplete="off"
              />
              <label
                className="absolute top-[50%] left-3 translate-y-[-50%] text-gray-400"
                htmlFor="search"
              >
                <i class="fa-solid fa-magnifying-glass"></i>
              </label>
            </div>
          </div>

          <nav className="nav">
            <ul className="ul-List flex gap-16">
              <li className="active-nav flex items-baseline flex-row-reverse gap-2 text-lg text-[gainsboro] transition-all hover:text-white cursor-pointer relative">
                <p>Home</p>
                <i class="fa-solid fa-house"></i>
              </li>
              <li className="flex items-baseline flex-row-reverse gap-2 text-lg text-[gainsboro] transition-all hover:text-white cursor-pointer relative">
                <p>Groups</p>
                <i class="fa-solid fa-users"></i>
              </li>
              <li className="flex items-baseline flex-row-reverse gap-2 text-lg text-[gainsboro] transition-all hover:text-white cursor-pointer relative">
                <p>Reels Video</p>
                <i class="fa-solid fa-circle-play"></i>
              </li>
              <li className="flex items-baseline flex-row-reverse gap-2 text-lg text-[gainsboro] transition-all hover:text-white cursor-pointer relative">
                <p>Notification</p>
                <i class="fa-solid fa-bell"></i>
              </li>
              <li className="flex items-baseline flex-row-reverse gap-2 text-lg text-[gainsboro] transition-all hover:text-white cursor-pointer relative">
                <p>Messenger</p>
                <i class="fa-solid fa-message"></i>
              </li>
            </ul>
          </nav>

          <div className="flex items-center flex-row-reverse">
            <div className="Profile w-12 h-12 object-fill overflow-hidden rounded-full outline outline-offset-2 outline-[#3f5470] outline-1">
              <img src="../../../../icon.png" alt="Profile" />
            </div>
            <Link
              className="Lines-List hidden text-[whiteSmoke] text-[20px] px-4 py-1"
              to="/list"
            >
              <i class="fa-solid fa-bars"></i>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}

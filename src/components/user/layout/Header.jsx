import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [List, setList] = useState(false);
  const [Authed, setAuthed] = useState(true);
  const [path, setPath] = useState("");
  useEffect(() => {
    setPath(window.location.pathname.replace("/", ""));
    setAuthed(true);
  }, []);

  return (
    <>
      <header className="user-header h-[70px]">
        <div className="container h-full flex justify-between items-center">
          <div className="Logo-Search flex gap-4 items-center">
            <div className="Logo">
              <Link
                className="flex items-baseline flex-row-reverse gap-2
              "
                to="/"
              >
                <img
                  className="w-10 h-10 object-contain"
                  src="../../../../icon.png"
                  alt="Logo"
                />
              </Link>
            </div>
            <div className="Search relative rounded-full bg-[#1f2937]">
              <input
                id="search"
                className="ps-9 pe-6 max-w-[300px] w-full h-9 rounded-full border-none outline-none outline-offset-0 outline-[#3f5470] focus:outline-offset-[3.5px] text-[whiteSmoke] transition-all hover:opacity-75 text-lg bg-[#253244]"
                type="text"
                placeholder="Search..."
                autoComplete="off"
              />
              <label
                className="absolute top-[50%] left-3 translate-y-[-50%] text-gray-400"
                htmlFor="search"
              >
                <i className="fa-solid fa-magnifying-glass"></i>
              </label>
            </div>
          </div>
          <nav className="nav">
            <ul className="ul-List flex gap-16">
              <li
                className={`${
                  path === "" ? "active-nav" : null
                } text-lg text-[gainsboro] transition-all hover:text-white cursor-pointer relative`}
              >
                <Link
                  className="flex items-baseline flex-row-reverse gap-2
                "
                  to={"/"}
                >
                  <p>Home</p>
                  <i className="fa-solid fa-house"></i>
                </Link>
              </li>
              <li
                className={`${
                  path === "groups" ? "active-nav" : null
                } text-lg text-[gainsboro] transition-all hover:text-white cursor-pointer relative`}
              >
                <Link
                  className="flex items-baseline flex-row-reverse gap-2
                "
                  to={"/groups"}
                >
                  <p>Groups</p>
                  <i className="fa-solid fa-users"></i>
                </Link>
              </li>
              <li
                className={`${
                  path === "reels" ? "active-nav" : null
                } text-lg text-[gainsboro] transition-all hover:text-white cursor-pointer relative`}
              >
                <Link
                  className="flex items-baseline flex-row-reverse gap-2
                "
                  to={"/reels"}
                >
                  <p>Reels</p>
                  <i className="fa-solid fa-circle-play"></i>
                </Link>
              </li>
              <li
                className={`${
                  path === "notification" ? "active-nav" : null
                } text-lg text-[gainsboro] transition-all hover:text-white cursor-pointer relative`}
              >
                <Link
                  className="flex items-baseline flex-row-reverse gap-2
                "
                  to={"/notification"}
                >
                  <p>Notification</p>
                  <i className="fa-solid fa-bell"></i>
                </Link>
              </li>
              <li
                className={`${
                  path === "messenger" ? "active-nav" : null
                } text-lg text-[gainsboro] transition-all hover:text-white cursor-pointer relative`}
              >
                <Link
                  className="flex items-baseline flex-row-reverse gap-2
                "
                  to={"/messenger"}
                >
                  <p>Messenger</p>
                  <i className="fa-solid fa-message"></i>
                </Link>
              </li>
            </ul>
          </nav>

          <div className="Profile relative w-10 h-10 object-fill rounded-full outline outline-offset-2 outline-[#3f5470] outline-1 ">
            <img
              onClick={() => setList(!List)}
              className="w-full h-full transition-all cursor-pointer hover:opacity-75"
              src="../../../../icon.png"
              alt="Profile"
            />
            {List ? (
              <div
                class="absolute right-0 top-14 outline outline-1 outline-gray-800 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-800 rounded-md bg-[#071019] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabindex="-1"
              >
                {Authed ? (
                  <>
                    <div class="py-1" role="none">
                      <Link
                        to="#"
                        className="block px-4 py-2 text-sm text-[whiteSmoke] transition-all hover:opacity-75"
                        role="menuitem"
                        tabindex="-1"
                        id="menu-item-0"
                      >
                        Profile
                      </Link>
                      <Link
                        to="/groups"
                        className="block px-4 py-2 text-sm text-[whiteSmoke] transition-all hover:opacity-75"
                        role="menuitem"
                        tabindex="-1"
                        id="menu-item-1"
                      >
                        Groups
                      </Link>
                    </div>
                    <div class="py-1" role="none">
                      <Link
                        to="#"
                        className="block px-4 py-2 text-sm text-[whiteSmoke] transition-all hover:opacity-75"
                        role="menuitem"
                        tabindex="-1"
                        id="menu-item-2"
                      >
                        Reels
                      </Link>
                    </div>
                    <div class="py-1" role="none">
                      <Link
                        to="#"
                        className="block px-4 py-2 text-sm text-[whiteSmoke] transition-all hover:opacity-75"
                        role="menuitem"
                        tabindex="-1"
                        id="menu-item-4"
                      >
                        Messenger
                      </Link>
                      <Link
                        to="#"
                        className="block px-4 py-2 text-sm text-[whiteSmoke] transition-all hover:opacity-75"
                        role="menuitem"
                        tabindex="-1"
                        id="menu-item-4"
                      >
                        Notifications
                      </Link>
                    </div>
                    <div class="py-1" role="none">
                      <Link
                        to="/auth/login"
                        className="block px-4 py-2 text-sm text-[whiteSmoke] transition-all hover:opacity-75"
                        role="menuitem"
                        tabindex="-1"
                        id="menu-item-5"
                      >
                        Logout
                      </Link>
                    </div>
                  </>
                ) : (
                  <>
                    <Link
                      to="/auth/signup"
                      className="block px-4 py-2 text-sm text-[whiteSmoke] transition-all hover:opacity-75"
                      role="menuitem"
                      tabindex="-1"
                      id="menu-item-5"
                    >
                      Signup
                    </Link>
                    <Link
                      to="/auth/login"
                      className="block px-4 py-2 text-sm text-[whiteSmoke] transition-all hover:opacity-75"
                      role="menuitem"
                      tabindex="-1"
                      id="menu-item-5"
                    >
                      Login
                    </Link>
                  </>
                )}
              </div>
            ) : null}
          </div>
        </div>
      </header>
    </>
  );
}

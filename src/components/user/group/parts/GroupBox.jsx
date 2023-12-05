import React from "react";
import { Link } from "react-router-dom";

export default function GroupBox({ id, name, date, img_src }) {
  return (
    <>
      <div className="Group-Card flex flex-col justify-between h-40 bg-[#111827] outline outline-1 outline-gray-800 rounded-md p-3">
        <div className="flex items-center flex-row-reverse gap-3">
          <div className="relative h-20 w-20 overflow-hidden rounded-md">
            <img
              className="absolute h-full w-full"
              loading="lazy"
              src={img_src}
              alt={name}
            />
          </div>
          <div className="text-right">
            <h2 className="text-lg text-[whiteSmoke]">{name}</h2>
            <p className="text-gray-400">{date}</p>
          </div>
        </div>

        <div className="flex justify-between items-center flex-row-reverse text-[whiteSmoke]">
          <Link
            to={`/groups/${id}`}
            className="border-none text-center outline-none w-3/4 bg-[#222a35] py-1 transition-all hover:opacity-75 rounded-md"
          >
            Go
          </Link>
          <button className="flex items-center border-none outline-none py-2 px-6 rounded-md transition-all hover:opacity-75 bg-[#222a35]">
            <i className="fa-solid fa-ellipsis"></i>
          </button>
        </div>
      </div>
    </>
  );
}

import React from "react";

export default function NavBarGroup({ Group_Color, Group_Name }) {
  return (
    <>
      <div className="Group-NavBar flex items-center justify-between overflow-scroll gap-5 text-[whiteSmoke] w-full h-20 [border-bottom:1px_solid_#1e2630]">
        <aside className="Left flex items-center justify-between gap-2 h-8 w-60">
          <button className="flex items-center justify-center flex-row-reverse gap-1 w-16 h-full rounded-md shadow-md transition-all hover:opacity-50 bg-red-700">
            <p>Exit</p>
            <i className="fa-solid fa-right-from-bracket"></i>
          </button>
          <button
            style={{ backgroundColor: Group_Color }}
            className="flex items-center justify-center flex-row-reverse gap-2 w-20 h-full rounded-md shadow-md transition-all hover:opacity-50"
          >
            <p>Share</p>
            <i className="fa-solid fa-share"></i>
          </button>
          <button
            style={{ backgroundColor: Group_Color }}
            className="flex items-center justify-center flex-row-reverse gap-2 w-20 h-full rounded-md shadow-md transition-all hover:opacity-50"
          >
            <p>Invite</p>
            <i className="fa-solid fa-plus"></i>
          </button>
        </aside>
        {/*  */}
        <div className="Group-Name font-bold text-2xl">{Group_Name}</div>
        {/*  */}
        <aside className="Right flex items-center justify-end gap-2 h-8 w-60">
          <button
            style={{ backgroundColor: Group_Color }}
            className="flex items-center justify-center flex-row-reverse gap-2 px-3 h-full rounded-md shadow-md transition-all hover:opacity-50"
          >
            <p>Members</p>
            <i className="fa-solid fa-users"></i>
          </button>
          <button
            style={{ backgroundColor: Group_Color }}
            className="flex items-center justify-center flex-row-reverse gap-2 px-3 h-full rounded-md shadow-md transition-all hover:opacity-50"
          >
            <p>Videos</p>
            <i className="fa-solid fa-play"></i>
          </button>
        </aside>
      </div>
    </>
  );
}

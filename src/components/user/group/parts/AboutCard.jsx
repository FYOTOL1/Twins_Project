import React from "react";

export default function AboutCard({
  Group_Name,
  Group_Date,
  Group_Admin,
  Group_Members_Count,
  Style,
  Detail_Style,
}) {
  return (
    <section className="About-Group w-full text-[whiteSmoke] text-left">
      <div
        style={Style}
        className="bg-[#0e1824] outline outline-1 outline-[#222a35] rounded-md mb-10 p-2"
      >
        <h2 className="text-gray-300 pb-2 pt-1 [border-bottom:1px_solid_#1e2630]">
          About
        </h2>
        <hr />
        <div
          style={Detail_Style}
          className="Details-Group flex flex-col gap-5 mt-5"
        >
          <div className="Detail-Group flex items-center justify-between">
            <p className="font-bold">Group Name</p>
            <p>{Group_Name}</p>
          </div>
          <div className="Detail-Group flex items-center justify-between">
            <p className="font-bold">Group Date</p>
            <p>{Group_Date}</p>
          </div>
          <div className="Detail-Group flex items-center justify-between">
            <p className="font-bold">Group Admin</p>
            <p>{Group_Admin}</p>
          </div>
          <div className="Detail-Group flex items-center justify-between">
            <p className="font-bold">Group Members Count</p>
            <p>{Group_Members_Count}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

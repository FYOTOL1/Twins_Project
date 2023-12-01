import React from "react";
import TrendRow from "./TrendRow";

export default function Trending() {
  return (
    <div className="h-fit bg-[#0e1824] px-4 py-3 outline outline-1 text-[whiteSmoke] outline-[#222a35] text-center rounded-md">
      <div className="Top w-full flex items-center justify-between gap-4 text-lg font-bold">
        <p className="uppercase">trending</p>
        <i className="fa-solid fa-circle-exclamation text-blue-500 text-xl"></i>
      </div>
      <div className="pt-5 px-3 w-full overflow-hidden">
        <TrendRow />
        <TrendRow />
        <TrendRow />
        <TrendRow />
        <TrendRow />
        <TrendRow />
      </div>
    </div>
  );
}

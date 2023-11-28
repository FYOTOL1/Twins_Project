import React from "react";

export default function TrendRow() {
  return (
    <div className="py-2">
      <p className="capitalize text-[whiteSmoke] text-start text-xl [letter-spacing:0.5px]">
        Mo.salah
      </p>
      <div className="flex items-center gap-2 text-gray-300">
        <p>3d Ago</p>
        <p>•</p>
        <p>10.05 Readers</p>
      </div>
    </div>
  );
}

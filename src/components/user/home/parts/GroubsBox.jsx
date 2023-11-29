import React from "react";

function GroubsBox() {
  return (
    <div className="bg-[#0e1824] outline outline-1 outline-[#222a35] rounded-md p-5">
      <h3 className="font-bold text-2xl mb-8">RECENT</h3>
      <ul className="mb-10">
        <li className="mb-3">
          <a href="#" className="text-[whiteSmoke]">
            <i class="fa-solid fa-clock-rotate-left pr-2 text-blue-500"></i>
            <span>Frond End</span>
          </a>
        </li>
        <li className="mb-3">
          <a href="#" className="text-[whiteSmoke]">
            <i class="fa-solid fa-clock-rotate-left pr-2 text-blue-500"></i>
            <span>Frond End</span>
          </a>
        </li>
        <li className="mb-3">
          <a href="#" className="text-[whiteSmoke]">
            <i class="fa-solid fa-clock-rotate-left pr-2 text-blue-500"></i>
            <span>Frond End</span>
          </a>
        </li>
      </ul>
      <h3 className="font-bold text-2xl mb-8">GROUBS</h3>
      <ul className="mb-10">
        <li className="mb-3">
          <a href="#" className="text-[whiteSmoke]">
            <i class="fa-solid fa-user-group pr-2 text-blue-500"></i>
            <span>Programming</span>
          </a>
        </li>
        <li className="mb-3">
          <a href="#" className="text-[whiteSmoke]">
            <i class="fa-solid fa-user-group pr-2 text-blue-500"></i>
            <span>Cooking</span>
          </a>
        </li>
        <li className="mb-3">
          <a href="#" className="text-[whiteSmoke]">
            <i class="fa-solid fa-user-group pr-2 text-blue-500"></i>
            <span>Blogging</span>
          </a>
        </li>
      </ul>
      <h3 className="font-bold text-2xl mb-8">HASHTAGS</h3>
      <ul>
        <li className="mb-3">
          <a href="#" className="text-[whiteSmoke]">
            <i class="fa-solid fa-hashtag pr-2 text-blue-500"></i>
            <span>pets</span>
          </a>
        </li>
        <li className="mb-3">
          <a href="#" className="text-[whiteSmoke]">
            <i class="fa-solid fa-hashtag pr-2 text-blue-500"></i>
            <span>today_news</span>
          </a>
        </li>
        <li className="mb-3">
          <a href="#" className="text-[whiteSmoke]">
            <i class="fa-solid fa-hashtag pr-2 text-blue-500"></i>
            <span>world</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default GroubsBox;

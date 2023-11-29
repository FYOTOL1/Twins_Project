import React from "react";

export default function PostCard() {
  return (
    <>
      <div className="Post-Card rounded-md p-5 pb-0 outline outline-1 outline-[#222a35] mb-5">
        <div className="User-Details flex items-start gap-3 w-full h-[78px]">
          <img
            className="w-14 rounded-full"
            src="../../../../../icon.png"
            alt="User Avatar"
          />
          <div>
            <div className="Name text-lg font-bold text-gray-400">
              Ahmed Akl
            </div>
            <div className="Job text-md">Ahmed Akl</div>
            <div className="Last-Date mt-1">2 Hours Ago</div>
          </div>
        </div>
        <div className="Content text-lg text-gray-300 [text-wrap:wrap] py-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum
          voluptas, architecto debitis repudiandae praesentium explicabo nostrum
          quis laudantium dolor nam.
        </div>
        <div className="Image relative h-96 overflow-hidden my-3">
          <img
            className="absolute w-full h-full object-scale-down"
            src="https://i.pinimg.com/564x/38/70/10/387010485613bd76425e12fdfcee63b2.jpg"
            alt="img"
          />
        </div>
        <div className="Likes-Comments-Shares flex justify-between items-center flex-row-reverse py-1">
          <div className="flex items-center gap-3 text-lg text-white">
            <p>{22} Comments</p>
            <p>{52} Shares</p>
          </div>
          <div className="flex items-center flex-row-reverse gap-1">
            <p>22</p>
            <i class="fa-solid fa-thumbs-up text-blue-500"></i>
          </div>
        </div>
        {/*  */}
        <div className="Events h-12 w-full flex justify-between items-center [border-top:1px_solid_#152535] my-1">
          <div className="Event h-full flex justify-between items-center flex-row-reverse gap-3 text-center cursor-pointer transition-all hover:opacity-50">
            <p>Like</p>
            <i class="fa-solid fa-thumbs-up text-2xl"></i>
          </div>
          <div className="Event h-full flex justify-between items-center flex-row-reverse gap-3 text-center cursor-pointer transition-all hover:opacity-50">
            <p>comment</p>
            <i class="fa-solid fa-comment-dots text-[20px]"></i>
          </div>
          <div className="Event h-full flex justify-between items-center flex-row-reverse gap-3 text-center cursor-pointer transition-all hover:opacity-50">
            <p>share</p>
            <i class="fa-solid fa-share text-2xl"></i>
          </div>
        </div>
      </div>
    </>
  );
}

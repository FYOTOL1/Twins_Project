import React from "react";

export default function CreatePost() {
  return (
    <>
      <div className="outline outline-1 text-[whiteSmoke] outline-[#222a35] bg-[#0e1824] rounded-md overflow-hidden">
        <div className="Post-Form flex items-center gap-2 h-24 p-3 py-5">
          <img
            className="w-14 h-full rounded-full object-fill p-1"
            src="../../../../../icon.png"
            alt="Avatar"
          />
          <input
            className="h-full w-full rounded-[6px] bg-[#131f2b] px-4 placeholder:text-[whiteSmoke] text-lg transition-all outline-none border-none focus:outline-offset-1 focus:[outline:1px_solid_#80808066]"
            placeholder="Write A Post"
            type="text"
            name="content"
            id="post"
          />
        </div>
        <div className="Details-Submit h-12 w-full flex justify-between items-center [border-top:1px_solid_#152535]">
          <div className="detail h-full flex justify-center items-center flex-row-reverse gap-3 text-center w-1/4 outline outline-1 outline-[#152535] cursor-pointer transition-all hover:opacity-50">
            <p>Photo</p>
            <i class="fa-solid fa-camera text-xl text-blue-500"></i>
          </div>
          <div className="detail h-full flex justify-center items-center flex-row-reverse gap-3 text-center w-1/4 outline outline-1 outline-[#152535] cursor-pointer transition-all hover:opacity-50">
            <p>Video</p>
            <i class="fa-solid fa-video text-xl text-blue-500"></i>
          </div>
          <div className="detail h-full flex justify-center items-center flex-row-reverse gap-3 text-center w-1/4 outline outline-1 outline-[#152535] cursor-pointer transition-all hover:opacity-50">
            <p>Hash Tag</p>
            <i class="fa-solid fa-hashtag text-xl text-blue-500"></i>
          </div>
          <div className="detail h-full flex justify-center items-center flex-row-reverse gap-3 text-center w-1/4 outline outline-1 outline-[#152535] cursor-pointer transition-all hover:opacity-75 bg-blue-500">
            <p>Post</p>
          </div>
        </div>
      </div>
    </>
  );
}

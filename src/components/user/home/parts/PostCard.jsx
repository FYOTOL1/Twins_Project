import React from "react";

export default function PostCard({
  src_img,
  username,
  job,
  last_date,
  content,
  comments_count = 0,
  likes_count = 0,
  shares_count = 0,
}) {
  return (
    <>
      <div className="Post-Card rounded-md p-5 pb-0 outline outline-1 outline-[#222a35]">
        <div className="User-Details flex items-start gap-3 w-full h-[78px]">
          <img
            loading="lazy"
            className="w-14 rounded-full"
            src="../../../../../icon.png"
            alt="User Avatar"
          />
          <div>
            <div className="Name text-lg font-bold text-gray-400">
              {username}
            </div>
            <div className="Job text-md">{job}</div>
            <div className="Last-Date mt-1">{last_date}</div>
          </div>
        </div>
        <div className="Content text-lg text-gray-300 [text-wrap:wrap] py-2">
          {content}
        </div>
        <div className="Image relative h-96 overflow-hidden my-3">
          <img
            loading="lazy"
            className="absolute w-full h-full object-scale-down rounded-smst"
            src={src_img}
            alt="img"
          />
        </div>
        <div className="Likes-Comments-Shares flex justify-between items-center flex-row-reverse py-1">
          <div className="flex items-center gap-3 text-lg text-white">
            <p>{comments_count} Comments</p>
            <p>{shares_count} Shares</p>
          </div>
          <div className="flex items-center flex-row-reverse gap-1">
            <p>{likes_count}</p>
            <i className="fa-solid fa-thumbs-up text-blue-500"></i>
          </div>
        </div>
        {/*  */}
        <div className="Events h-12 w-full flex justify-between items-center flex-row-reverse [border-top:1px_solid_#152535] my-1">
          <div className="Event h-full flex justify-between items-center flex-row-reverse gap-3 text-center cursor-pointer transition-all hover:text-blue-300">
            <p>Like</p>
            <i className="fa-solid fa-thumbs-up text-2xl"></i>
          </div>
          <div className="Event h-full flex justify-between items-center flex-row-reverse gap-3 text-center cursor-pointer transition-all hover:text-green-300">
            <p>comment</p>
            <i className="fa-solid fa-comment-dots text-[20px]"></i>
          </div>
          <div className="Event h-full flex justify-between items-center flex-row-reverse gap-3 text-center cursor-pointer transition-all hover:text-teal-300">
            <p>share</p>
            <i className="fa-solid fa-share text-2xl"></i>
          </div>
        </div>
      </div>
    </>
  );
}

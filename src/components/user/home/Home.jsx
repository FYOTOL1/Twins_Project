import React from "react";
import TrendRow from "./parts/TrendRow";
import CreatePost from "./parts/CreatePost";
import PostCard from "./parts/PostCard";

export default function Welcome() {
  return (
    <>
      <main className="py-8 w-full">
        <div className="container flex flex-row-reverse gap-6">
          <section className="w-1/4 bg-[#0e1824] px-4 py-3 outline outline-1 text-[whiteSmoke] outline-[#222a35] text-center rounded-md">
            <div className="Top w-full flex items-center justify-between gap-4 text-lg font-bold">
              <p className="uppercase">trending</p>
              <i class="fa-solid fa-circle-exclamation text-blue-500 text-xl"></i>
            </div>
            <div className="pt-5 px-3 w-full overflow-hidden">
              <TrendRow />
              <TrendRow />
              <TrendRow />
              <TrendRow />
              <TrendRow />
              <TrendRow />
            </div>
          </section>
          {/*  */}
          <section className="w-2/4 text-[whiteSmoke] rounded-md">
            <CreatePost />
            <hr className="my-5 border-[#80808066]" />
            <div className="Posts">
              <PostCard />
              <PostCard />
              <PostCard />
              <PostCard />
            </div>
          </section>
          {/*  */}
          <section className="w-1/4 bg-[#0e1824] px-4 py-3 outline outline-1 text-[whiteSmoke] outline-[#222a35] text-center rounded-md">
            c
          </section>
        </div>
      </main>
    </>
  );
}

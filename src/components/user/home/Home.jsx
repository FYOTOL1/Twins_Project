import React from "react";
import TrendRow from "./parts/TrendRow";
import CreatePost from "./parts/CreatePost";
import PostCard from "./parts/PostCard";
import Profile from "./parts/Profile";
import GroupsBox from "./parts/GroupsBox";

export default function Welcome() {
  return (
    <>
      <main className="py-8 w-full">
        <div className="container flex md:flex-row-reverse flex-col-reverse gap-6">
          <section className="md:w-1/4 h-fit bg-[#0e1824] px-4 py-3 outline outline-1 text-[whiteSmoke] outline-[#222a35] text-center rounded-md">
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
          </section>
          {/*  */}
          <section className="flex flex-col gap-6 md:w-2/4 text-[whiteSmoke] rounded-md">
            <CreatePost />
            <div className="Posts flex flex-col gap-7">
              <PostCard
                src_img={
                  "https://i.pinimg.com/564x/e5/23/40/e52340767f77af9569552c0d32c2892f.jpg"
                }
                username={"Ahmed Akl"}
                job={"Programmer"}
                last_date={"2 Hours Ago"}
                content={"Any"}
                shares_count={199}
                likes_count={2912}
                comments_count={72}
              />
              <PostCard
                src_img={
                  "https://i.pinimg.com/564x/e5/23/40/e52340767f77af9569552c0d32c2892f.jpg"
                }
                username={"Ahmed Akl"}
                job={"Programmer"}
                last_date={"2 Hours Ago"}
                content={"Any"}
                shares_count={199}
                likes_count={2912}
                comments_count={72}
              />
              <PostCard
                src_img={
                  "https://i.pinimg.com/564x/e5/23/40/e52340767f77af9569552c0d32c2892f.jpg"
                }
                username={"Ahmed Akl"}
                job={"Programmer"}
                last_date={"2 Hours Ago"}
                content={"Any"}
                shares_count={199}
                likes_count={2912}
                comments_count={72}
              />
              <PostCard
                src_img={
                  "https://i.pinimg.com/564x/e5/23/40/e52340767f77af9569552c0d32c2892f.jpg"
                }
                username={"Ahmed Akl"}
                job={"Programmer"}
                last_date={"2 Hours Ago"}
                content={"Any"}
                shares_count={199}
                likes_count={2912}
                comments_count={72}
              />
            </div>
          </section>
          {/*  */}
          <section className="Profile md:w-1/4 text-[whiteSmoke] text-left">
            <Profile />
            <GroupsBox />
          </section>
        </div>
      </main>
    </>
  );
}

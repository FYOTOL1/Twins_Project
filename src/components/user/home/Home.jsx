import React from "react";
import CreatePost from "./parts/CreatePost";
import PostCard from "./parts/PostCard";
import Profile from "./parts/Profile";
import GroupsBox from "./parts/GroupsBox";
import Trending from "./parts/Trending";

export default function Welcome() {
  return (
    <>
      <main className="py-8 w-full">
        <div className="container flex md:flex-row-reverse flex-col-reverse gap-6 text-[whiteSmoke]">
          <section className="R flex flex-col gap-6 md:w-1/4">
            <Trending />
            <GroupsBox />
          </section>
          {/*  */}
          <section className="C flex flex-col gap-6 md:w-2/4 text-[whiteSmoke] rounded-md">
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
          <section className="L Profile md:w-1/4 text-[whiteSmoke] text-left">
            <Profile />
          </section>
        </div>
      </main>
    </>
  );
}

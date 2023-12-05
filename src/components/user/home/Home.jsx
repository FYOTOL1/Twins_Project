import React from "react";
import PostsBar from "./parts/PostsBar.jsx";
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
          <div className="w-1/2">
            <PostsBar />
          </div>
          {/*  */}
          <div className="w-1/4">
            <Profile />
          </div>
        </div>
      </main>
    </>
  );
}

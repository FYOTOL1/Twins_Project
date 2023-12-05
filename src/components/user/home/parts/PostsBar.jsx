import React from "react";
import PostCard from "./PostCard";
import CreatePost from "./CreatePost";

export default function PostsBar() {
  return (
    <>
      <section className="C flex flex-col gap-6 w-full text-[whiteSmoke] rounded-md">
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
    </>
  );
}

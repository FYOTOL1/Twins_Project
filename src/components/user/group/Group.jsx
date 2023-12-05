import React, { useState } from "react";
import { useParams } from "react-router-dom";
import NavBarGroup from "./parts/NavBarGroup.jsx";
import PostsBar from "../home/parts/PostsBar.jsx";
import Profile from "../home/parts/Profile.jsx";
import AboutCard from "./parts/AboutCard.jsx";

export default function Group() {
  const [Group_Color, setGroup_Color] = useState("black");
  const [Group_Name, setGroup_Name] = useState("Elzero Web School");
  const [Group_Admin, setGroup_Admin] = useState("Osama Elzero");
  const [Group_Date, setGroup_Date] = useState("20/11/2023");
  const [Group_Members_Count, setGroup_Members_Count] = useState(900000);

  const { id } = useParams();
  return (
    <>
      <div className="container">
        <div className="Avatar-Group relative w-full [max-height:500px] my-1 overflow-hidden [border-radius:0_0_8px_8px]">
          <img
            className="w-full h-full object-contain"
            loading="lazy"
            src="https://scontent.fjed2-1.fna.fbcdn.net/v/t39.30808-6/225720945_384764943076964_6393852369787641536_n.jpg?stp=dst-jpg_s960x960&_nc_cat=1&ccb=1-7&_nc_sid=173fa1&_nc_ohc=tWCH2gMk5CAAX-QFt-M&_nc_oc=AQle8BRiYvnjHI42RCpO7yqMfuWvtN9FIqmfmdeaM_rLaauwCTzBV2ShFPTzsbZJso4&_nc_ht=scontent.fjed2-1.fna&oh=00_AfCW9I6UMwrLZudBvcrf4LjP4NEOuSGAR5K4tpGmJbYYvw&oe=6573969D"
            alt="Group Avatar"
          />
        </div>
        <NavBarGroup Group_Color={Group_Color} Group_Name={Group_Name} />
        <main className="Group-Main">
          <div className="Group-Main-BigScreen flex justify-center w-full gap-6 mt-5">
            <div className="w-1/4">
              <AboutCard
                Group_Name={Group_Name}
                Group_Admin={Group_Admin}
                Group_Date={Group_Date}
                Group_Members_Count={Group_Members_Count}
              />
            </div>
            <div className="w-1/2">
              <PostsBar />
            </div>
            <div className="w-1/4">
              <Profile />
            </div>
          </div>
          {/*  */}
          <div className="Group-Main-MidScreen hidden justify-between w-full gap-4 mt-5">
            <div className="flex flex-col gap-[25px] w-1/3 h-[246px]">
              <AboutCard
                Group_Name={Group_Name}
                Group_Admin={Group_Admin}
                Group_Date={Group_Date}
                Group_Members_Count={Group_Members_Count}
                Style={{ paddingBottom: "25px" }}
              />
              <Profile Style={{ marginBottom: "0px" }} />
            </div>
            <div className="w-2/3">
              <PostsBar />
            </div>
          </div>
          {/*  */}
          <div className="Group-Main-SmScreen hidden justify-between w-full gap-4 mt-5">
            <Profile />
            <AboutCard
              Group_Name={Group_Name}
              Group_Admin={Group_Admin}
              Group_Date={Group_Date}
              Group_Members_Count={Group_Members_Count}
              Style={{ height: "300px" }}
              Detail_Style={{ gap: "2.25rem" }}
            />
            <PostsBar />
          </div>
        </main>
      </div>
    </>
  );
}

import React from "react";
import GroupBox from "./parts/GroupBox";

export default function Groups() {
  const arr = [
    {
      id: 1,
      name: "Elzero Web School",
      date: "20/11/2018",
      img_src:
        "	https://i.pinimg.com/564x/e5/23/40/e52340767f77af9569552c0d32c2892f.jpg",
    },
    {
      id: 2,
      name: "Ahmed Programming Group",
      date: "20/11/2016",
      img_src:
        "	https://i.pinimg.com/564x/e5/23/40/e52340767f77af9569552c0d32c2892f.jpg",
    },
    {
      id: 3,
      name: "مليون مبرمج مصري",
      date: "20/11/2018",
      img_src:
        "	https://i.pinimg.com/564x/e5/23/40/e52340767f77af9569552c0d32c2892f.jpg",
    },
    {
      id: 4,
      name: "Cyber Security",
      date: "20/11/2023",
      img_src:
        "	https://i.pinimg.com/564x/e5/23/40/e52340767f77af9569552c0d32c2892f.jpg",
    },
    {
      id: 5,
      name: "Web Developers",
      date: "20/17/2018",
      img_src:
        "	https://i.pinimg.com/564x/e5/23/40/e52340767f77af9569552c0d32c2892f.jpg",
    },
    {
      id: 6,
      name: "Ai Developers",
      date: "20/11/2018",
      img_src:
        "	https://i.pinimg.com/564x/e5/23/40/e52340767f77af9569552c0d32c2892f.jpg",
    },
    {
      id: 7,
      name: "Ai Developers",
      date: "20/11/2018",
      img_src:
        "	https://i.pinimg.com/564x/e5/23/40/e52340767f77af9569552c0d32c2892f.jpg",
    },
    {
      id: 8,
      name: "Ai Developers",
      date: "20/11/2018",
      img_src:
        "	https://i.pinimg.com/564x/e5/23/40/e52340767f77af9569552c0d32c2892f.jpg",
    },
  ];
  return (
    <>
      <div className="Groups py-10">
        <div className="container group-card-auto-grid gap-3">
          {arr &&
            arr.map((e) => (
              <GroupBox
                id={e.id}
                name={e.name}
                date={e.date}
                img_src={e.img_src}
              />
            ))}
        </div>
      </div>
    </>
  );
}

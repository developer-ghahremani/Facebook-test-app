import React from "react";
import { Avatar } from "@material-ui/core";

const LeftSideBar = () => {
  const items = [
    { image: "/images/feed.png", name: "News Feed" },
    { image: "/images/messager.png", name: "Messanger" },
    { image: "/images/watch.png", name: "Watch" },
    { image: "/images/virus.png", name: "Covid" },
    { image: "/images/flag.png", name: "Pages" },
    { image: "/images/event.png", name: "Events" },
    { image: "/images/fundraising.png", name: "Fundraising" },
    { image: "/images/memory.png", name: "Memory" },
  ];
  return (
    <div className="px-2">
      <div className="d-flex align-items-center mb-1 ">
        <Avatar style={{ height: "2rem", width: "2rem" }} />
        <span>Reza Ghahremani</span>
      </div>
      {items.map((item) => (
        <div className="sidebar-item d-flex justify-content-between align-items-center mb-2 ">
          <div className="d-flex">
            <img src={item.image} className="h-2" alt="" />
            <span className="mx-1 font-size-small">{item.name}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LeftSideBar;

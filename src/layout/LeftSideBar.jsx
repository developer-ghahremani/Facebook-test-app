import React from "react";
import { Avatar, IconButton } from "@material-ui/core";
import { MoreHoriz } from "@material-ui/icons";
import { useSelector } from "react-redux";

const LeftSideBar = () => {
  const { user } = useSelector((state) => state);
  const primaryItems = [
    { image: "/images/feed.png", name: "News Feed", hasMoreButton: true },
    { image: "/images/messager.png", name: "Messanger" },
    { image: "/images/watch.png", name: "Watch" },
  ];

  const secondaryItems = [
    { image: "/images/facebook.png", name: "Welcome" },
    { image: "/images/virus.png", name: "Covid" },
    { image: "/images/flag.png", name: "Pages" },
    { image: "/images/event.png", name: "Events" },
    { image: "/images/fundraising.png", name: "Fundraising" },
    { image: "/images/memory.png", name: "Memory" },
  ];

  return (
    <div className="px-4">
      <div className="d-flex align-items-center mb-3 ">
        <Avatar
          style={{ height: "1.5rem", width: "1.5rem" }}
          src={user.photoURL}
        />
        <span className="font-size-small mx-1">{user.displayName}</span>
      </div>
      {primaryItems.map((item) => (
        <div className="sidebar-item d-flex justify-content-between align-items-center mb-2 ">
          <div className="d-flex">
            <img src={item.image} className="h-2" alt="" />
            <span className="mx-1 font-size-small">{item.name}</span>
          </div>
          {item.hasMoreButton ? (
            // <IconButton size="small">
            <MoreHoriz />
          ) : (
            // </IconButton>
            ""
          )}
        </div>
      ))}
      <p className="mt-3">Explore</p>
      {secondaryItems.map((item) => (
        <div className="sidebar-item d-flex justify-content-between align-items-center mb-2 ">
          <div className="d-flex">
            <img src={item.image} className="h-2" alt="" />
            <span className="mx-1 font-size-small">{item.name}</span>
          </div>
        </div>
      ))}

      <div className="di-flex text-blue-light">
        <a href="">
          <MoreHoriz />
          <span className="font-size-small">See More</span>
        </a>
      </div>
    </div>
  );
};

export default LeftSideBar;

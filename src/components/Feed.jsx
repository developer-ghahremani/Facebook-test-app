import React from "react";
import { Avatar, IconButton } from "@material-ui/core";
import { MoreHoriz, Share, Message } from "@material-ui/icons";
import { LikeFilled } from "@ant-design/icons";

const Feed = ({ item }) => {
  return (
    <div className="card shadow mt-2">
      <div className="card-header p-0">
        <div className="d-flex justify-content-between pl-2 pt-1">
          <div className="d-flex align-items-center ">
            <Avatar src={item.avatar} />
            <div className="d-flex flex-column ml-2">
              <div className="d-flex align-items-center">
                <span className="text-blue-light">{item.userDisplayName}</span>
                <img src="/images/blue-tick.png" className="h-1 ml-1" alt="" />
              </div>
              <span className="font-size-small  mt-0">4d</span>
            </div>
          </div>

          <MoreHoriz />
        </div>
      </div>

      <div className="card-body p-0">
        <p className="px-2">{item.title}</p>
        {/* <img src="/images/facebook.png" className="w-100 m-0 p-0" alt="" /> */}
      </div>
      <div className="card-footer p-0">
        <div className="d-flex justify-content-between">
          <div className="d-flex align-items-center justify-content-center  flex-grow-1">
            <IconButton>
              <LikeFilled />
            </IconButton>
            Like
          </div>
          <div className="d-flex align-items-center justify-content-center flex-grow-1">
            <IconButton>
              <Message />
            </IconButton>
            Comment
          </div>
          <div className="d-flex align-items-center  justify-content-center flex-grow-1">
            <IconButton>
              <Share />
            </IconButton>
            Share
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;

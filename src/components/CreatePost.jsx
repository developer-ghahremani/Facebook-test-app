import React from "react";
import { Avatar } from "@material-ui/core";
import { MoreHoriz } from "@material-ui/icons";

const CreatePost = () => {
  return (
    <div className="card shadow mt-2 p-2">
      <div className="d-flex align-items-center">
        <Avatar />
        <form action="" className="w-100 mx-2">
          <textarea
            type="text"
            className="input-group-text w-100 bg-white border-white"
            placeholder="What is in your mind?"
          />

          <button className="d-none"></button>
        </form>
      </div>
      <div className="divider"></div>

      <div className="d-flex flex-wrap">
        <div className="d-flex align-items-center  bg-light py-1 px-2 rounded-pill m-1">
          <img src="/images/image.png" className="h-1" alt="" />
          <span className="mx-2 font-size-small font-weight-bold">
            Photo/Video
          </span>
        </div>
        <div className="d-flex align-items-center  bg-light py-1 px-2 rounded-pill m-1">
          <img src="/images/tag.png" className="h-1" alt="" />
          <span className="mx-2 font-size-small font-weight-bold">
            Tag Friends
          </span>
        </div>
        <div className="d-flex align-items-center  bg-light py-1 px-2 rounded-pill m-1">
          <img src="/images/emoji.png" className="h-1" alt="" />
          <span className="mx-2 font-size-small font-weight-bold">
            Feeling And Activitty
          </span>
        </div>

        <div className="d-flex align-items-end  bg-light py-1 px-2 rounded-pill m-1">
          <MoreHoriz />
        </div>
      </div>
    </div>
  );
};

export default CreatePost;

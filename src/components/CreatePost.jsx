import React from "react";
import { Avatar } from "@material-ui/core";
import { MoreHoriz } from "@material-ui/icons";
import { useSelector } from "react-redux";
import { useState } from "react";
import { firestore, db } from "../firebase";

const CreatePost = () => {
  const [feed, setFeed] = useState("");
  const { user } = useSelector((state) => state);

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   if (!feed.length > 0) return;
  //   try {
  //     const result = await firestore.collection("feeds").add({
  //       title: feed,
  //       avatar: user.photoURL,
  //       userDisplayName: user.displayName,
  //       createdAt: new Date(),
  //     });
  //     console.log(result);
  //     setFeed("");
  //   } catch ({ message }) {
  //     console.log(message);
  //   }
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!feed.length > 0) return;
    try {
      const result = await db.ref().child("feeds").push({
        title: feed,
        avatar: user.photoURL,
        userDisplayName: user.displayName,
        createdAt: new Date(),
      });
      // const result = await firestore.collection("feeds").add(
      //   {
      //   title: feed,
      //   avatar: user.photoURL,
      //   userDisplayName: user.displayName,
      //   createdAt: new Date(),
      // }
      // );
      console.log(result);
      setFeed("");
    } catch ({ message }) {
      console.log(message);
    }
  };

  return (
    <div className="card shadow mt-2 p-2">
      <div className="d-flex align-items-center">
        <Avatar src={user.photoURL} />
        <form action="" onSubmit={handleSubmit} className="w-100 mx-2">
          <input
            type="text"
            value={feed}
            name="feed"
            onChange={({ target }) => {
              setFeed(target.value);
            }}
            className="input-group-text w-100 bg-white border-white"
            placeholder="What is in your mind?"
            style={{ outline: "none" }}
          />

          <button className="d-none" type="submit"></button>
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

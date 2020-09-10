import React from "react";
import Lottie from "react-lottie";
import ProgressAnim from "./../assets/anim/progress.json";
const MyAnim = ({ animData = ProgressAnim, size = 100 }) => {
  return (
    <Lottie
      options={{
        loop: true,
        autoplay: true,
        animationData: animData,
        rendererSettings: {},
      }}
      height={size}
      width={size}></Lottie>
  );
};

export default MyAnim;

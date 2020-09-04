import React from "react";
import MainLayout from "../layout/MainLayout";
import CreatePost from "../components/CreatePost";
import Feeds from "../components/Feeds";

const Home = () => {
  return (
    <MainLayout>
      <CreatePost />
      <Feeds />
    </MainLayout>
  );
};

export default Home;

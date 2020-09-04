import React from "react";
import MainLayout from "../layout/MainLayout";
import CreatePost from "../components/CreatePost";

const Home = () => {
  return (
    <MainLayout>
      <CreatePost />
      <Feeds />
    </MainLayout>
  );
};

export default Home;

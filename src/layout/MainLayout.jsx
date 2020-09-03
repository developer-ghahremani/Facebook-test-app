import React, { Fragment } from "react";
import TopNavBar from "./TopNavBar";

const MainLayout = ({ children }) => {
  return (
    <Fragment>
      <TopNavBar />
      {children}
    </Fragment>
  );
};

export default MainLayout;

import React, { Fragment } from "react";
import TopNavBar from "./TopNavBar";
import LeftSideBar from "./LeftSideBar";

const MainLayout = ({ children }) => {
  return (
    <Fragment>
      <TopNavBar />
      <div className="container">
        <div className="row m-0">
          <div className="col-lg-3 p-2">
            <LeftSideBar />
          </div>
          <div className="col-lg-6">{children}</div>
          <div className="col-lg-3 p-2"></div>
        </div>
      </div>
    </Fragment>
  );
};

export default MainLayout;

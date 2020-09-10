import React from "react";
import MobileVerifCart from "../components/MobileVerifCart";

const MobileVerification = () => {


  return (
    <div className="position-relative " style={{ height: "100vh" }}>
      <div className="d-flex flex-column h-100">
        <header>
          <div className="nav bg-primary ">
            <div className="container">
              <div className="row justify-content-between align-items-center">
                <div className="logo">
                  <h3 className="text-white m-0 my-2">facebook</h3>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className=" bg-light-gray h-100 d-flex justify-content-center align-items-center">
          <MobileVerifCart />
        </div>
      </div>
    </div>
  );
};

export default MobileVerification;

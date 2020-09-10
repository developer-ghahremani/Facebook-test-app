import React from "react";
import { Avatar, IconButton } from "@material-ui/core";
import { MoreHoriz } from "@material-ui/icons";
import { Dropdown, Menu, Modal } from "antd";
import firebase from "./../firebase";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
const TopNavBar = () => {
  const { replace } = useHistory();
  const { user } = useSelector((state) => state);
  console.log(user.photoURL);
  const handleSignOut = async (params) => {
    try {
      await firebase.auth().signOut();
      localStorage.removeItem("credential");
      replace("/auth");
    } catch ({ message }) {
      console.log({ message });
    }
  };

  const menu = (
    <Menu
      onClick={({ key }) => {
        Modal.confirm({
          title: "User Log Out",
          content: "Are You Sure to log Out?",
          okText: "Yes",
          onOk: handleSignOut,
        });
      }}>
      <Menu.Item key="1">Log Out</Menu.Item>
    </Menu>
  );
  return (
    <header>
      <nav className="bg-primary py-2">
        <div className="container">
          <div className="d-flex justify-content-between h-3">
            <div className="d-flex align-items-center">
              <img src="/images/facebook.png" alt="" className="bg-white h-2" />
              <form action="" className=" ">
                <input
                  type="text"
                  className="form-control h-2"
                  placeholder="Search"
                />

                <button type="submit" className="d-none"></button>
              </form>
            </div>
            <div className="d-flex align-items-center ">
              <div className="d-flex navbar-item  align-items-center">
                <Avatar
                  src={user.photoURL}
                  
                  style={{ height: "1.5rem", width: "1.5rem" }}/>
                <span className="mx-1">{user.displayName}</span>
              </div>
              <div className="navbar-item navbar-item-active">Home</div>
              <div className="navbar-item">Find Friends</div>
              <div className="navbar-item">Create</div>
              <IconButton>
                <img
                  src="/images/customer.png"
                  className="h-2"
                  alt="FB"
                  srcset=""
                />
              </IconButton>
              <IconButton>
                <img
                  src="/images/facebook-messanger.png"
                  className="h-2"
                  alt="FB"
                  srcset=""
                />
              </IconButton>
              <IconButton>
                <img
                  src="/images/bell.png"
                  className="h-2"
                  alt="Bell"
                  srcset=""
                />
              </IconButton>
              <IconButton>
                <img
                  src="/images/question.png"
                  className="h-2"
                  alt="Bell"
                  srcset=""
                />
              </IconButton>

              <Dropdown overlay={menu} placement="bottomCenter">
                <IconButton>
                  <MoreHoriz />
                </IconButton>
              </Dropdown>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default TopNavBar;

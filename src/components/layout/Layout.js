import React from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Header from "../header/Header";
import SideNav from "../header/SideNav";

const Layout = () => {
  return (
    <>
      <div className="main">
        <ToastContainer />
        <Header />
        <div className="dashboard">
          <div className="custom-container">
            <div className="row">
              <div className="col-lg-3">
                <SideNav />
              </div>
              <div className="col-lg-9">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;

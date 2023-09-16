import React, { useEffect } from "react";
import { Outlet, redirect, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Header from "../header/Header";
import SideNav from "../header/SideNav";
import { useSelector } from "react-redux";

const Layout = () => {
  const navigate = useNavigate()
  const users = useSelector((state) => state.login.userLogin);

  useEffect(() =>{
    if (!users) {
      navigate("/login");
    }
  },[])
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

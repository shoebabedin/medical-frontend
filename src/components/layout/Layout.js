import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "../header/Header";
import SideNav from "../header/SideNav";

const Layout = () => {
  const navigate = useNavigate();
  const users = useSelector((state) => state.login.userLogin);

  useEffect(() => {
    if (!users) {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <div className="main">
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

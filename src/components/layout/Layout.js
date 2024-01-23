import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "../header/Header";
import SideNav from "../header/SideNav";
import { useSelector } from "react-redux";
import { useNetworkState } from "@uidotdev/usehooks";
import { debounce } from "lodash";
import { toast } from "react-toastify";

const Layout = () => {
  const navigate = useNavigate();
  const users = useSelector((state) => state.login.userLogin);
  const network = useNetworkState();

  useEffect(() => {
    if (!users) {
      navigate("/login");
    }
  }, [users, navigate]);


  const showToast = debounce((isOnline) => {
    if (isOnline) {
      toast.success("You are now online");
    } else {
      toast.error("You are now offline");
    }
  }, 300); // Adjust the debounce delay as needed

  useEffect(() => {
    showToast(network.online);
  }, [network.online]);
  
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

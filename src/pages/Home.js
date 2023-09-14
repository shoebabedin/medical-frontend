import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const users = useSelector((state) => state.login.userLogin);
  return (
    <>
      <div className="dashboard-result">
        {users.user.role === "admin" && (
          <>
            <div className={`dashboard-items`}>
              <h4>Number of Sent Reports</h4>
              <p>115</p>
            </div>
            <div className={`dashboard-items`}>
              <h4>Number of Completed Reports</h4>
              <p>100</p>
            </div>
            <div className={`dashboard-items`}>
              <h4>Number of Total Reports</h4>
              <p>200</p>
            </div>
            <div className={`dashboard-items`}>
              <h4>Number of Registered Doctors</h4>
              <p>1115</p>
            </div>
            <div className={`dashboard-items`}>
              <h4>Number of Requested Doctors</h4>
              <p>1000</p>
            </div>
            <div className={`dashboard-items`}>
              <h4>Number of Total Doctors</h4>
              <p>2115</p>
            </div>
          </>
        )}
        {users.user.role === "hospital" && (
          <>
            <div className={`dashboard-items`}>
              <h4>Number of Sent Reports</h4>
              <p>115</p>
            </div>
            <div className={`dashboard-items`}>
              <h4>Number of Completed Reports</h4>
              <p>100</p>
            </div>
            <div className={`dashboard-items `}>
              <h4>Number of Total Reports</h4>
              <p>200</p>
            </div>
          </>
        )}
        {users.user.role === "doctor" && (
          <>
            <div className={`dashboard-items`}>
              <h4>Number of Received Reports</h4>
              <p>1115</p>
            </div>
            <div className={`dashboard-items`}>
              <h4>Number of Completed Reports</h4>
              <p>1000</p>
            </div>
            <div className={`dashboard-items`}>
              <h4>Number of Total Reports</h4>
              <p>2115</p>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Home;

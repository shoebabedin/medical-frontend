import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const users = useSelector((state) => state.login.userLogin);
  const apiKey = process.env.REACT_APP_API_KEY;
  const [allDoctors, setAllDoctors] = useState();
  const [allRequestedDoctors, setAllRequestedDoctors] = useState();
  const [allRegisteredDoctors, setAllRegisteredDoctors] = useState();
  const [allHospitals, setAllHospitals] = useState();
  const [allRequestedHospitals, setAllRequestedHospitals] = useState();
  const [allRegisteredHospitals, setAllRegisteredHospitals] = useState();

  useEffect(() => {
    // all doctors
    const getAllDoctors = async () => {
      const allDoctors = await axios.get(`${apiKey}/user/all-doctors`);
      setAllDoctors(allDoctors);
    };
    // all requested doctors
    const getAllRequestedDoctors = async () => {
      const allDoctors = await axios.get(
        `${apiKey}/user/all-requested-doctors`
      );
      setAllRequestedDoctors(allDoctors);
    };
    // all registered doctors
    const getAllRegisteredDoctors = async () => {
      const allDoctors = await axios.get(
        `${apiKey}/user/all-registered-doctors`
      );
      setAllRegisteredDoctors(allDoctors);
    };
    // all hospital
    const getAllHospitals = async () => {
      const allHospitals = await axios.get(`${apiKey}/user/all-hospitals`);
      setAllHospitals(allHospitals);
    };
    // all requested hospital
    const getAllRequestedHospitals = async () => {
      const allHospitals = await axios.get(
        `${apiKey}/user/all-requested-hospitals`
      );
      setAllRequestedHospitals(allHospitals);
    };
    // all registered hospital
    const getAllRegisteredHospitals = async () => {
      const allHospitals = await axios.get(
        `${apiKey}/user/all-registered-hospitals`
      );
      setAllRegisteredHospitals(allHospitals);
    };
    // doctors
    getAllDoctors();
    getAllRequestedDoctors();
    getAllRegisteredDoctors();
    // Hospitals
    getAllHospitals();
    getAllRequestedHospitals();
    getAllRegisteredHospitals();
  }, []);

  return (
    <>
      {users?.user.status === "pending" && (
        <div className="add-new-report">
          <div className="report-body">
            <h2 className="profile-heading"> Request Pending </h2>
          </div>
        </div>
      )}

      <div className="dashboard-result">
        {users
          ? users.user.role === "admin" && (
              <>
                {/* Hospitals */}
                <div className={`dashboard-items`}>
                  <h4>Number of Registered Hospitals</h4>
                  <p>
                    {allRegisteredHospitals?.data.length > 0
                      ? allRegisteredHospitals?.data.length
                      : "0"}
                  </p>
                </div>
                {/* Hospitals */}
                <div className={`dashboard-items`}>
                  <h4>Number of Requested Hospitals</h4>
                  <p>
                    {allRequestedHospitals?.data.length > 0
                      ? allRequestedHospitals?.data.length
                      : "0"}
                  </p>
                </div>
                {/* Hospitals */}
                <div className={`dashboard-items`}>
                  <h4>Number of Total Hospitals</h4>
                  <p>
                    {allHospitals?.data.length > 0
                      ? allHospitals?.data.length
                      : "0"}
                  </p>
                </div>
                {/* Doctors */}
                <div className={`dashboard-items`}>
                  <h4>Number of Registered Doctors</h4>
                  <p>
                    {allRegisteredDoctors?.data.length > 0
                      ? allRegisteredDoctors?.data.length
                      : "0"}
                  </p>
                </div>
                {/* Doctors */}
                <div className={`dashboard-items`}>
                  <h4>Number of Requested Doctors</h4>
                  <p>
                    {allRequestedDoctors?.data.length > 0
                      ? allRequestedDoctors?.data.length
                      : "0"}
                  </p>
                </div>
                {/* Doctors */}
                <div className={`dashboard-items`}>
                  <h4>Number of Total Doctors</h4>
                  <p>
                    {allDoctors?.data.length > 0
                      ? allDoctors?.data.length
                      : "0"}
                  </p>
                </div>
              </>
            )
          : ""}
        {users
          ? users.user.role === "hospital" && (
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
            )
          : ""}
        {users
          ? users.user.role === "doctor" && (
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
            )
          : ""}
      </div>
    </>
  );
};

export default Home;

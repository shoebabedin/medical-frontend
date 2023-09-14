import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const SideNav = () => {
  const [role, setRole] = useState("hospital");
  return (
    <>
      <ul className="side_nav d-none d-lg-flex">
        <li>
          <NavLink to="/">Dashboard</NavLink>
        </li>
        {role === "admin" && (
          <>
            <li>
              <NavLink to="/doctor-list">Doctor</NavLink>
            </li>
            <li>
              <NavLink to="/hospital-list">Hospital</NavLink>
            </li>
            <li>
              <NavLink to="/new-user-request">New User Request</NavLink>
            </li>
            <li>
              <NavLink to="/report-format">Report Format</NavLink>
            </li>
            <li>
              <NavLink to="/edit-access">Edit Access</NavLink>
            </li>
          </>
        )}
        {role === "hospital" && (
          <>
            <li>
              <NavLink to="/new-report-entry">Add New Report</NavLink>
            </li>
            <li>
              <NavLink to="/sent-report">Sent Reports</NavLink>
            </li>
            <li>
              <NavLink to="/complete-report">Completed Reports</NavLink>
            </li>
            <li>
              <NavLink to="/all-report">All Reports</NavLink>
            </li>
          </>
        )}
        {role === "doctor" && (
          <>
            <li>
              <NavLink to="/report-format">Report Format</NavLink>
            </li>
            <li>
              <NavLink to="/received-report">Received Reports</NavLink>
            </li>
            <li>
              <NavLink to="/complete-report">Completed Reports</NavLink>
            </li>
            <li>
              <NavLink to="/all-report">All Reports</NavLink>
            </li>
          </>
        )}
        {/* <li>
          <Link to="#">Back</Link>
        </li> */}
        {/* <li>
          <NavLink to="/">FAQ</NavLink>
        </li>
        <li>
          <NavLink to="/">Help</NavLink>
        </li> */}
      </ul>
    </>
  );
};

export default SideNav;

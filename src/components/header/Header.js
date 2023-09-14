import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Header = () => {
  const router = useNavigate();
  const users = useSelector((state) => state.login.userLogin);
  
 
  const handleLogout = () => {
    try {
      localStorage.removeItem("User");
      toast("Logout Success");
      window.location.replace("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section className="header">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <Link className="navbar-brand opacity-0 desktop" to="#">
              Navbar
            </Link>
            <h2 className="navbar-nav mx-auto mb-2 mb-lg-0 mob-sidebar">
              Medical Report Maker
            </h2>
            <button
              className="navbar-toggler desktop"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <h2 className="navbar-nav mx-auto mb-2 mb-lg-0 desktop">
              Medical Report Maker
            </h2>
            <div className="" id="navbarSupportedContent">
              <span className="desktop">
                <div className="d-flex align-items-center is-auth">
                  <Link to="#" className="text-capitalize">
                    {users ? users.user.name : ""}
                  </Link>
                  <span>
                    <Link to="#">|</Link>
                  </span>
                  <span>
                    {users ? (
                      users.user && (
                        <button
                          onClick={handleLogout}
                          className="btn btn-danger"
                        >
                          Logout
                        </button>
                      )
                    ) : (
                      <Link to="/login">Login</Link>
                    )}
                  </span>
                </div>
              </span>
              <div className="mob-sidebar">
                <a
                  className="btn btn-primary"
                  data-bs-toggle="offcanvas"
                  href="#offcanvasExample"
                  role="button"
                  aria-controls="offcanvasExample"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-border-width"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 3.5A.5.5 0 0 1 .5 3h15a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-2zm0 5A.5.5 0 0 1 .5 8h15a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1zm0 4a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5z" />
                  </svg>
                </a>
                <div
                  className="offcanvas offcanvas-start"
                  tabindex="-1"
                  id="offcanvasExample"
                  aria-labelledby="offcanvasExampleLabel"
                >
                  <div className="offcanvas-header shadow-sm">
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    ></button>
                    <div className="d-flex align-items-center is-auth">
                      <Link to="#" className="">
                        {users ? users.user.name : ""}
                      </Link>
                      <span>
                        <Link to="#">|</Link>
                      </span>
                      <span>
                        {users ? (
                          users.user && (
                            <button className="btn btn-danger">Logout</button>
                          )
                        ) : (
                          <Link to="/login">Login</Link>
                        )}
                      </span>
                    </div>
                  </div>
                  <div className="offcanvas-body">
                    <ul className="side_nav">
                      <li>
                        <NavLink to="/">Dashboard</NavLink>
                      </li>
                      {users
                        ? users.user.role === "admin" && (
                            <>
                              <li>
                                <NavLink to="/admin/doctor_list_page">
                                  Doctor
                                </NavLink>
                              </li>
                              <li>
                                <NavLink to="/admin/hospital_list_page">
                                  Hospital
                                </NavLink>
                              </li>
                              <li>
                                <NavLink to="/admin/new_user_request_list_page">
                                  New User Request
                                </NavLink>
                              </li>
                              <li>
                                <NavLink to="/dr_report_format_list_page">
                                  Report Format
                                </NavLink>
                              </li>
                              <li>
                                <NavLink to="/admin/all_report_list_page">
                                  Edit Access
                                </NavLink>
                              </li>
                              <li>
                                <NavLink to="#">Settings</NavLink>
                              </li>
                            </>
                          )
                        : ""}
                      {users
                        ? users.user.role === "doctor" && (
                            <>
                              <li>
                                <NavLink to="/add-new-report">
                                  Add New Report
                                </NavLink>
                              </li>
                              <li>
                                <NavLink to="/sent-report">
                                  Sent Reports
                                </NavLink>
                              </li>
                              <li>
                                <NavLink to="/complete-report">
                                  Completed Reports
                                </NavLink>
                              </li>
                              <li>
                                <NavLink to="/all-report">All Reports</NavLink>
                              </li>
                            </>
                          )
                        : ""}
                      {users
                        ? users.user.role === "hospital" && (
                            <>
                              <li>
                                <NavLink to="/add-new-report">
                                  Report Format
                                </NavLink>
                              </li>
                              <li>
                                <NavLink to="/sent-report">
                                  Received Reports
                                </NavLink>
                              </li>
                              <li>
                                <NavLink to="/complete-report">
                                  Completed Reports
                                </NavLink>
                              </li>
                              <li>
                                <NavLink to="/all-report">All Reports</NavLink>
                              </li>
                            </>
                          )
                        : ""}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Header;

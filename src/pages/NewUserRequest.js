import React from "react";
import { Link } from "react-router-dom";

const NewUserRequest = () => {
  return (
    <>
      <div className="add-new-report">
        <div className="report-body">
          <h2 className="profile-heading">New User Requests</h2>
          <div className="data-table-filter admin">
            <div className="row">
              <div className="col-12 col-lg-4">
                <div className="mb-1 mb-lg-5 row">
                  <label for="h-name" className="col-sm-12 col-form-label">
                    By Name
                  </label>
                  <div className="col-sm-12">
                    <input
                      id="by_name"
                      type="text"
                      className="form-control search"
                    />
                  </div>
                </div>
              </div>

              <div className="col-12 col-lg-4">
                <div className="mb-1 mb-lg-5 row">
                  <label for="by_date" className="col-sm-12 col-form-label">
                    By Date
                  </label>
                  <div className="col-sm-12 position-relative">
                    <input
                      type="date"
                      className="form-control date"
                      id="by_date"
                    />
                  </div>
                </div>
              </div>

              <div className="col-12 col-lg-4">
                <div className="mb-3 mb-lg-5 row">
                  <label for="h-name" className="col-sm-12 col-form-label">
                    By User Type
                  </label>
                  <div className="col-sm-12">
                    <select
                      id="by_user_type"
                      className="form-select custom_input"
                    >
                      <option value="all">Select One</option>
                      <option value="Hospital">Hospital</option>
                      <option value="Doctor">Doctor</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <table
            id="example"
            className="cell-border table-responsive w-100"
          >
            <thead className="">
              <tr>
                <th className="">
                  <span className="">User ID</span>
                </th>
                <th className="">
                  <span className="">User Name </span>
                </th>
                <th className="">
                  <span className="">Email</span>
                </th>
                <th className="">
                  <span className="">Phone</span>
                </th>
                <th className="">
                  <span className="">User Type</span>
                </th>
                <th className="">
                  <span className="">Request Date</span>
                </th>
                <th className="">
                  <span className="">Action</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span>01</span>
                </td>
                <td>
                  <span>shoeb</span>
                </td>
                <td>
                  <span>shoebabedin@gmail.com </span>
                </td>
                <td>
                  <span>+880101010101 </span>
                </td>
                <td className="text-capitalize">
                  <span>Hospital</span>
                </td>
                <td>
                  <span>01/02/23</span>
                </td>

                <td>
                  <Link to="#">
                    <img src={require("./../assets/images/checked.png")} className="img-fluid" alt="" />
                  </Link>
                  <Link to="#">
                    <img src={require("./../assets/images/rejected.png")} className="img-fluid" alt="" />
                  </Link>
                  <Link to="#">
                    <img src={require("./../assets/images/eye.png")} className="img-fluid" alt="" />
                  </Link>
                  
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default NewUserRequest;

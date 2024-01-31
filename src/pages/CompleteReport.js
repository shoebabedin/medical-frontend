import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CompleteReport = () => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const [data, setData] = useState();
  const deleteReport = (id) => {
    try {
      axios.post(`${apiKey}/user/reject-report`, { id: id });
    } catch (error) {
      console.error("Error while rejecting request:", error);
      // Handle the error appropriately
    }
  };
  useEffect(() => {
    // all doctors
    const getAllPendingReport = async () => {
      const allPendingReport = await axios.get(
        `${apiKey}/user/complete-report`
      );
      setData(allPendingReport.data);
    };

    getAllPendingReport();
  }, [deleteReport]);

  return (
    <>
      <div className="add-new-report">
        <div className="report-body">
          <h2 className="profile-heading">Completed Reports</h2>
          <div className="data-table-filter">
            <div className="row">
              <div className="col-lg-4">
                <div className="mb-5 row">
                  <label htmlFor="h-name" className="col-sm-12 col-form-label">
                    Search Report
                  </label>
                  <div className="col-sm-12">
                    <input
                      type="password"
                      className="form-control search"
                      id="h-name"
                      placeholder="Search Report"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="mb-5 row">
                  <label htmlFor="h-name" className="col-sm-12 col-form-label">
                    By Doctor
                  </label>
                  <div className="col-sm-12">
                    <select
                      id="disabledSelect"
                      className="form-select custom_input"
                    >
                      <option selected>Select One</option>
                      <option value="hospital">Male</option>
                      <option value="doctor">Female</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="mb-5 row">
                  <label htmlFor="h-name" className="col-sm-12 col-form-label">
                    By Date
                  </label>
                  <div className="col-sm-12 position-relative">
                    <input
                      type="date"
                      className="form-control date"
                      id="h-name"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <table id="example" className="cell-border w-100">
            <thead className="">
              <tr>
                <th className="">
                  <span className="">ID</span>
                </th>
                <th className="">
                  <span className="">Report ID</span>
                </th>
                <th className="">
                  <span className="">Patient Name</span>
                </th>
                <th className="">
                  <span className="">Department</span>
                </th>
                <th className="">
                  <span className="">Prefered Doctor</span>
                </th>
                <th className="">
                  <span className="">Action</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {data?.length == 0 && (
                <tr>
                  <td>No data found</td>
                </tr>
              )}
              {data?.map((item) => (
                <tr key={item._id}>
                  <td>
                    <span>{item._id}</span>
                  </td>
                  <td>
                    <span>{item.report_id}</span>
                  </td>
                  <td>
                    <span>{item.patient_name}</span>
                  </td>
                  <td>
                    <span>{item.department}</span>
                  </td>
                  <td>
                    <span>{item.preferred_doctor.name}</span>
                  </td>
                  <td>
                    <button
                      className="btn"
                      onClick={() => deleteReport(item._id)}
                    >
                      <img
                        src={require("./../assets/images/delete-button.png")}
                        className="img-fluid"
                        alt=""
                      />
                    </button>
                    <Link to={`/edit-report/${item._id}`}>
                      <img
                        src={require("./../assets/images/edit.png")}
                        className="img-fluid"
                        alt=""
                      />
                    </Link>
                    <Link to="/complete-report-view">
                      <img
                        src={require("./../assets/images/eye.png")}
                        className="img-fluid"
                        alt=""
                      />
                    </Link>
                    <Link to="#">
                      <img
                        src={require("./../assets/images/printer.png")}
                        className="img-fluid"
                        alt=""
                      />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default CompleteReport;

import React from "react";
import { Link } from "react-router-dom";

const ReceivedReport = () => {
  return (
    <>
      <div
        className="modal fade bg-white"
        id="exampleModalToggle"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
        tabindex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <form action="#">
              <input
                className="deleting_id"
                name="deleting_id"
                type="hidden"
                value=""
              />
              <div className="modal-header justify-content-center border-0">
                <h1 className="modal-title fs-5" id="exampleModalToggleLabel">
                  Do you want to delete report "
                  <span className="blank_space"> </span>" ?
                </h1>
              </div>
              <div className="modal-body">
                <h1>Confirm</h1>
              </div>
              <div className="modal-footer border-0 justify-content-center">
                <button
                  type="button"
                  className="btn no"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  No
                </button>
                <button type="submit" className="btn yes">
                  Yes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="add-new-report">
        <div className="report-body">
          <h2 className="profile-heading">Received Reports</h2>
          <div className="data-table-filter">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-4">
                <div className="mb-1 mb-lg-5 row">
                  <label for="h-name" className="col-sm-12 col-form-label">
                    Search Report
                  </label>
                  <div className="col-sm-12">
                    <input
                      id="report_id"
                      type="text"
                      className="form-control search"
                    />
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-4">
                <div className="mb-1 mb-lg-5 row">
                  <label for="h-name" className="col-sm-12 col-form-label">
                    By Report Type
                  </label>
                  <div className="col-sm-12">
                    <select
                      id="by_report_type"
                      className="form-select custom_input"
                    >
                      <option value="all">Select One</option>
                      <option value="report_type">report_type</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-4">
                <div className="mb-3 mb-lg-5 row">
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
            </div>
          </div>

          <table
            id="example"
            className="cell-border table-responsive w-100"
          >
            <thead className="">
              <tr>
                <th className="">
                  <span className="">Report ID</span>
                </th>
                <th className="">
                  <span className="">Patient Name</span>
                </th>
                <th className="">
                  <span className="">Report Type</span>
                </th>
                <th className="">
                  <span className="">Received Date</span>
                </th>
                <th className="">
                  <span className="">Action</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-label="Report ID">
                  <span>report_id </span>
                </td>
                <td data-label="Patient Name">
                  <span>patient_name </span>
                </td>
                <td data-label="Report Type">
                  <span>report_type </span>
                </td>
                <td data-label="Action">
                  <span>Y-m-d</span>
                </td>
                <td>
                  <Link to="/received-report-view">
                    <img src={require("./../assets/images/note.png")}
                      className="img-fluid" alt="" />
                  </Link>

                  <Link to="#">
                    <img src={require("./../assets/images/eye.png")}
                      className="img-fluid"  alt="" />
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

export default ReceivedReport;

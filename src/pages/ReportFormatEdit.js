import React from "react";
import { Link } from "react-router-dom";

const ReportFormatEdit = () => {
  return (
    <>
      <div className="add-new-report">
        <div className="report-body">
          <form action="#">
            <input name="id" type="hidden" />

            <h2 className="profile-heading">Edit Formate </h2>

            <div className="container">
              <div className="row">
                <div className="col-12 col-lg-6">
                  <div className="mb-1 mb-lg-5 row">
                    <label
                      for="h-name"
                      className="col-12 col-lg-4 col-form-label"
                    >
                      Date *
                    </label>
                    <div className="col-12 col-lg-8 position-relative">
                      <input
                        id="datepicker"
                        type="date"
                        name="created_at"
                        className="form-control date"
                        value=""
                      />

                      <input
                        id="dateValue"
                        type="hidden"
                        className="form-control date"
                      />
                    </div>
                  </div>
                  <div className="mb-1 mb-lg-5 row">
                    <label
                      for="h-name"
                      className="col-12 col-lg-4 col-form-label"
                    >
                      Prepeared By
                    </label>
                    <div className="col-12 col-lg-8 position-relative">
                      <input
                        disabled
                        readonly
                        name="prepeared_by"
                        type="text"
                        className="form-control"
                        id="h-name"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="mb-1 mb-lg-5 row">
                    <label
                      for="h-name"
                      className="col-12 col-lg-4 col-form-label"
                    >
                      Department *
                    </label>
                    <div className="col-12 col-lg-8">
                      <select
                        name="doctor_department"
                        id="disabledSelect"
                        className="form-select custom_input"
                      >
                        <option selected="">Select One</option>
                        <option value="department_name">department_name</option>
                      </select>
                    </div>
                  </div>
                  <div className="mb-1 mb-lg-5 row">
                    <label
                      for="h-name"
                      className="col-12 col-lg-4 col-form-label"
                    >
                      Report Type *
                    </label>
                    <div className="col-12 col-lg-8">
                      <select
                        name="report_type"
                        id="disabledSelect"
                        className="form-select custom_input"
                      >
                        <option>Select One</option>

                        <option value="report_type ">report_type</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-12">
                  <div className="mb-1 mb-lg-5 row">
                    <label
                      for="h-name"
                      className="col-12 col-lg-2 col-form-label"
                    >
                      Formate Name
                    </label>
                    <div className="col-12 col-lg-10 position-relative">
                      <input
                        name="formate_name"
                        type="text"
                        className="form-control"
                        id="h-name"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="mb-3 mb-lg-5 row">
                    <label
                      for="h-name"
                      className="col-12 col-lg-2 col-col-form-label"
                    >
                      Report Details *
                    </label>
                    <div className="col-12 col-lg-10">
                      <textarea
                        id="editor"
                        name="formate_details"
                        className="form-control"
                      >
                        formate_details{" "}
                      </textarea>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="d-flex profile-btn">
                    <Link to="#" type="reset" className="btn cancel">
                      Cancel
                    </Link>
                    <button type="submit" className="btn update">
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ReportFormatEdit;

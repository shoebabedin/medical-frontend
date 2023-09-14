import React from "react";
import { Link } from "react-router-dom";

const NewReportPrepare = () => {
  return (
    <>
      <div className="add-new-report">
        <div className="report-body">
          <form action="#" method="POST" className="">
            <h2 className="profile-heading">New Report Format Prepare</h2>

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
                        required
                        name="created_at"
                        type="date"
                        className="form-control date"
                        id="datepicker"
                      />
                    </div>
                  </div>
                  <div className="mb-1 mb-lg-5 row">
                    <label
                      for="h-name"
                      className="col-12 col-lg-4 col-form-label"
                    >
                      Prepearing By
                    </label>
                    <div className="col-12 col-lg-8 position-relative">
                      <input
                        required
                        name="prepeared_by"
                        type="text"
                        className="form-control"
                        id="h-name"
                      />
                    </div>
                  </div>
                  <div className="mb-1 mb-lg-5 row">
                    <label
                      for="h-name"
                      className="col-12 col-lg-4 col-form-label"
                    >
                      Rerport Title *
                    </label>
                    <div className="col-12 col-lg-8 position-relative">
                      <input
                        name="formate_title"
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
                        required
                        name="doctor_department"
                        id="disabledSelect"
                        className="form-select custom_input"
                      >
                        <option value="">Select One</option>
                        <option>department_name</option>
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
                        required
                        name="report_type"
                        id="disabledSelect"
                        className="form-select custom_input"
                      >
                        <option value="">Select One</option>
                        <option>report_type</option>
                      </select>
                    </div>
                  </div>
                  <div className="mb-1 mb-lg-5 row">
                    <label for="h-name" className="col-sm-4 col-form-label">
                      Rerport ID *
                    </label>
                    <div className="col-sm-8">
                      <input
                        placeholder="Not required"
                        name="report_id"
                        type="text"
                        className="form-control"
                        id="h-name"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="mb-1 mb-lg-5 row">
                    <label
                      for="h-name"
                      className="col-12 col-lg-4 col-form-label"
                    >
                      Formate Name
                    </label>
                    <div className="col-12 col-lg-8 position-relative">
                      <input
                        value=""
                        name="formate_name"
                        type="text"
                        className="form-control"
                        id="h-name"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6"></div>

                <div className="col-12">
                  <div className="mb-3 mb-lg-5 row">
                    <label
                      for="h-name"
                      className="col-12 col-lg-2 col-col-form-label"
                    >
                      Report Details *
                    </label>
                    <div className="col-12 col-lg-9">
                      <textarea
                        id="editor"
                        name="formate_details"
                        className="form-control"
                      ></textarea>
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

export default NewReportPrepare;

import React from "react";
import { Link } from "react-router-dom";

const EditReport = () => {
  return (
    <>
      <div className="add-new-report">
        <div className="report-body">
          <form action="#" className="" enctype="multipart/form-data">
            <input name="item_id" type="hidden" value="{{ $reportData->id }}" />
            <input
              name="prev_img"
              type="hidden"
              value="{{ $reportData->report_image }}"
            />
            <h2 className="profile-heading">Report Edit</h2>

            <div className="container">
              <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-6">
                  <div className="mb-1 mb-lg-5 row">
                    <label
                      for="h-name"
                      className="col-sm-12 col-md-12 col-lg-4 col-form-label"
                    >
                      Date *
                    </label>
                    <div className="col-sm-12 col-md-12 col-lg-8 position-relative">
                      <input
                        required
                        id="datepicker"
                        name="created_at"
                        type="date"
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
                      className="col-sm-12 col-md-12 col-lg-4 col-form-label"
                    >
                      Rerport Title *
                    </label>
                    <div className="col-sm-12 col-md-12 col-lg-8 position-relative">
                      <input
                        required
                        name="report_title"
                        type="text"
                        className="form-control"
                        id="h-name"
                      />
                    </div>
                  </div>
                  <div className="mb-1 mb-lg-5 row">
                    <label
                      for="h-name"
                      className="col-sm-12 col-md-12 col-lg-4 col-form-label"
                    >
                      Patient Name *
                    </label>
                    <div className="col-sm-12 col-md-12 col-lg-8">
                      <input
                        required
                        name="patient_name"
                        type="text"
                        className="form-control"
                        id="h-name"
                      />
                    </div>
                  </div>
                  <div className="mb-1 mb-lg-5 row">
                    <label
                      for="h-name"
                      className="col-sm-12 col-md-12 col-lg-4 col-form-label"
                    >
                      Gender *
                    </label>
                    <div className="col-sm-12 col-md-12 col-lg-8">
                      <select
                        required
                        name="patient_gender"
                        id="disabledSelect"
                        className="form-select custom_input"
                      >
                        <option value="">Select One</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>
                    </div>
                  </div>
                  <div className="mb-1 mb-lg-5 row">
                    <label
                      for="h-name"
                      className="ccol-sm-12 col-md-12 col-lg-4 col-form-label"
                    >
                      Preferred Doctor *
                    </label>
                    <div className="col-sm-12 col-md-12 col-lg-8">
                      <select
                        required
                        name="preferred_doctor"
                        id="disabledSelect"
                        className="form-select custom_input"
                      >
                        <option value="">Select One</option>

                        <option>name</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6">
                  <div className="mb-1 mb-lg-5 row">
                    <label
                      for="h-name"
                      className="col-sm-12 col-md-12 col-lg-4 col-form-label"
                    >
                      Department *
                    </label>
                    <div className="col-sm-12 col-md-12 col-lg-8">
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
                      className="col-sm-12 col-md-12 col-lg-4 col-form-label"
                    >
                      Report Type *
                    </label>
                    <div className="col-sm-12 col-md-12 col-lg-8">
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
                    <label
                      for="h-name"
                      className="col-sm-12 col-md-12 col-lg-4 col-form-label"
                    >
                      Rerport ID *
                    </label>
                    <div className="col-sm-12 col-md-12 col-lg-8">
                      <input
                        required
                        value="{{ $reportData->report_id }}"
                        name="report_id"
                        type="text"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="mb-1 mb-lg-5 row">
                    <label
                      for="h-name"
                      className="col-sm-12 col-md-12 col-lg-4 col-form-label"
                    >
                      Age *
                    </label>
                    <div className="col-sm-12 col-md-12 col-lg-8">
                      <input
                        required
                        value="{{ $reportData->patient_age }}"
                        name="patient_age"
                        type="number"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="mb-1 mb-lg-5 row">
                    <label
                      for="h-name"
                      className="col-sm-12 col-md-12 col-lg-4 col-form-label"
                    >
                      Report Image *
                    </label>
                    <div className="col-sm-12 col-md-12 col-lg-8">
                      <input
                        required
                        name="report_image"
                        type="file"
                        className="form-control"
                        id="inputGroupFile04"
                        aria-describedby="inputGroupFileAddon04"
                        aria-label="Upload"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-12 mt-3">
                  <div className="d-flex profile-btn">
                    <Link to="#" type="reset" className="btn cancel">
                      Cancel
                    </Link>
                    <button type="submit" className="btn update">
                      Save Chnages
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

export default EditReport;

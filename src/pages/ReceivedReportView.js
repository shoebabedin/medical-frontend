import React from "react";
import { Link } from "react-router-dom";

const ReceivedReportView = () => {
  return (
    <>
      <div className="dashboard">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <section className="header">
                <nav className="navbar navbar-expand-lg report-format-nav">
                  <div className="container-fluid">
                    <Link
                      to="/"
                      id="pdfButton"
                      className="download navbar-brand"
                    >
                      Dashboard
                    </Link>
                    <div className="" id="navbarSupportedContent">
                      <Link
                        to="#"
                        id="back"
                        className="btn download  mx-auto mb-lg-0"
                      >
                        Back
                      </Link>
                    </div>
                  </div>
                </nav>
              </section>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6">
              <div className="daicom_machine mt-2">
                <input type="hidden" className="file_name" />
                <div className="d-flex flex-column ">
                  <div className="main-content">
                    <section>
                      <section className="idv-section">
                        <div id="idv"></div>
                      </section>
                    </section>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6">
              <div className="add-new-report admin doctor">
                <div className="row">
                  <div className="col-12">
                    <div className="doctor-report-body">
                      <h2 className="profile-heading">New Report Prepare</h2>
                      <div className="">
                        <table className="table table-bordered">
                          <tbody>
                            <tr>
                              <td className="desktop">
                                <span className="title">Report ID</span>
                              </td>
                              <td colSpan={2} data-label="Report ID">
                                <span className="name">report_id </span>
                              </td>
                              <td className="desktop">
                                <span className="title">Patient Name</span>
                              </td>
                              <td colSpan={2} data-label="Patient Name">
                                <span className="name">patient_name </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="desktop">
                                <span className="title">Report Date</span>
                              </td>
                              <td data-label="Report Date">
                                <span className="name">d / m / y</span>
                              </td>
                              <td className="desktop">
                                <span className="title">Age</span>
                              </td>
                              <td data-label="Age">
                                <span className="name">patient_age </span>
                              </td>
                              <td className="desktop">
                                <span className="title">Gender</span>
                              </td>
                              <td data-label="Gender">
                                <span className="name">gender</span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <form action="#" className="row">
                          <input type="hidden" name="report_id" />
                          <input type="hidden" name="report_type" />
                          <input type="hidden" name="department" />
                          <div className="col-sm-12 col-md-6 col-lg-6">
                            <div className="mb-1 mb-lg-3 row">
                              <label
                                for="h-name"
                                className="col-12 col-lg-4 col-form-label"
                              >
                                Report Type
                              </label>
                              <div className="col">
                                <input
                                  readonly
                                  className="custom_input form-control"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-12 col-md-6 col-lg-6">
                            <div className="mb-1 mb-lg-5 row">
                              <label
                                for="h-name"
                                className="col-12 col-lg-4  col-form-label"
                              >
                                Report Title
                              </label>
                              <div className="col">
                                <input
                                  readonly
                                  className="custom_input form-control"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="mb-1 mb-lg-3 row">
                              <label
                                for="h-name"
                                className="col-12 col-lg-4 col-form-label"
                              >
                                Report Template
                              </label>
                              <div className="col-12">
                                <select
                                  onchange="updateEditor(this.value)"
                                  className="custom_input form-control reportSelect"
                                  name="formate_name"
                                >
                                  <optgroup label="In built Formates">
                                    <option>formate_name</option>
                                  </optgroup>
                                  <optgroup label="Personal Formates">
                                    <option>formate_name</option>
                                  </optgroup>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="mb-1 mb-lg-3 row">
                              <label
                                for="h-name"
                                className="col-12 col-lg-4  col-form-label"
                              >
                                Template Name
                              </label>
                              <div className="col">
                                <input
                                  name="new_formate_name"
                                  placeholder="Fill this if you want to save report as a formate"
                                  className="new_formate_name form-control"
                                />
                                <p className="text-danger"></p>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 areas">
                            <div className="editor field d-none">
                              <textarea name="report_summary" id="editor">
                                formate_details
                              </textarea>
                            </div>
                          </div>
                          <div className="default col-12 field">
                            <textarea name="report_summary" id="default">
                              formate_details
                            </textarea>
                          </div>
                          <div className="col-12">
                            <div className="d-flex profile-btn">
                              <Link
                                to="/dr_report_format_list_page"
                                className="btn cancel"
                              >
                                Cancel
                              </Link>
                              <button
                                name="action"
                                value="saveAndSend"
                                type="submit"
                                className="btn update save_and_send"
                              >
                                Save & Send
                              </button>
                              <button
                                name="action"
                                value="send"
                                type="submit"
                                className="btn update send"
                              >
                                Send
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReceivedReportView;

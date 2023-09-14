import React from 'react';

const AddReport = () => {
    return (
        <>
             <div className="add-new-report">
                <div className="report-body">
                  <form className="">
                    <h2 className="profile-heading">Hospital Profile Edit</h2>
                    <div className="container">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="mb-5 row">
                            <label for="h-name" className="col-sm-4 col-form-label"
                              >Date *</label
                            >
                            <div className="col-sm-8 position-relative">
                              <input
                                type="date"
                                className="form-control date"
                                id="h-name"
                                value="email@example.com"
                              />
                            </div>
                          </div>
                          <div className="mb-5 row">
                            <label for="h-name" className="col-sm-4 col-form-label"
                              >Rerport Title *</label
                            >
                            <div className="col-sm-8 position-relative">
                              <input
                                type="text"
                                className="form-control"
                                id="h-name"
                              />
                            </div>
                          </div>
                          <div className="mb-5 row">
                            <label for="h-name" className="col-sm-4 col-form-label"
                              >Patient Name *</label
                            >
                            <div className="col-sm-8">
                              <input
                                type="text"
                                className="form-control"
                                id="h-name"
                              />
                            </div>
                          </div>
                          <div className="mb-5 row">
                            <label for="h-name" className="col-sm-4 col-form-label"
                              >Gender *</label
                            >
                            <div className="col-sm-8">
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
                          <div className="mb-5 row">
                            <label for="h-name" className="col-sm-4 col-form-label"
                              >Preferred Doctor *</label
                            >
                            <div className="col-sm-8">
                              <select
                                id="disabledSelect"
                                className="form-select custom_input"
                              >
                                <option selected>Select One</option>
                                <option value="hospital">Hospital</option>
                                <option value="doctor">Doctor</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="mb-5 row">
                            <label for="h-name" className="col-sm-4 col-form-label"
                              >Department *</label
                            >
                            <div className="col-sm-8">
                              <select
                                id="disabledSelect"
                                className="form-select custom_input"
                              >
                                <option selected>Select One</option>
                                <option value="hospital">Hospital</option>
                                <option value="doctor">Doctor</option>
                              </select>
                            </div>
                          </div>
                          <div className="mb-5 row">
                            <label for="h-name" className="col-sm-4 col-form-label"
                              >Report Type *</label
                            >
                            <div className="col-sm-8">
                              <select
                                id="disabledSelect"
                                className="form-select custom_input"
                              >
                                <option selected>Select One</option>
                                <option value="hospital">Hospital</option>
                                <option value="doctor">Doctor</option>
                              </select>
                            </div>
                          </div>
                          <div className="mb-5 row">
                            <label for="h-name" className="col-sm-4 col-form-label"
                              >Rerport ID *</label
                            >
                            <div className="col-sm-8">
                              <input
                                type="text"
                                className="form-control"
                                id="h-name"
                              />
                            </div>
                          </div>
                          <div className="mb-5 row">
                            <label for="h-name" className="col-sm-4 col-form-label"
                              >Age *</label
                            >
                            <div className="col-sm-8">
                              <input
                                type="number"
                                className="form-control"
                                id="h-name"
                              />
                            </div>
                          </div>
                          <div className="mb-5 row">
                            <label for="h-name" className="col-sm-4 col-form-label"
                              >Report Image *</label
                            >
                            <div className="col-sm-8">
                              <input
                                type="file"
                                className="form-control"
                                id="inputGroupFile04"
                                aria-describedby="inputGroupFileAddon04"
                                aria-label="Upload"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="d-flex profile-btn">
                            <button type="submit" className="btn cancel">
                              Cancel
                            </button>
                            <button type="submit" className="btn update">
                              Update
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

export default AddReport;
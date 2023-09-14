import React from 'react';
import { Link } from 'react-router-dom';

const NewReportEntry = () => {
    return (
        <>
            <div className="add-new-report">
        <div className="report-body">
            <form action="/add_new_report" method="POST" className="" enctype="multipart/form-data">
              
                <h2 className="profile-heading">New Report Entry</h2>



                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <div className="mb-1 mb-lg-3 row">
                                <label for="h-name" className="col-sm-12 col-md-12 col-lg-12 col-form-label">Date *</label>
                                <div className="col-sm-12 col-md-12 col-lg-12 position-relative">
                                    <input required name="created_at" type="date" className="form-control date" id="datepicker"
                                        value=""/>
                                </div>
                            </div>
                            <div className="mb-1 mb-lg-3 row">
                                <label for="h-name" className="col-sm-12 col-md-12 col-lg-12 col-form-label">Rerport Title *</label>
                                <div className="col-sm-12 col-md-12 col-lg-12 position-relative">
                                    <input required name="report_title" type="text" className="form-control" id="h-name"/>
                                </div>
                            </div>
                            <div className="mb-1 mb-lg-3 row">
                                <label for="h-name" className="col-sm-12 col-md-12 col-lg-12 col-form-label">Patient Name *</label>
                                <div className="col-sm-12 col-md-12 col-lg-12">
                                    <input required name="patient_name" type="text" className="form-control" id="h-name"/>
                                </div>
                            </div>
                            <div className="mb-1 mb-lg-3 row">
                                <label for="h-name" className="col-sm-12 col-md-12 col-lg-12 col-form-label">Gender *</label>
                                <div className="col-sm-12 col-md-12 col-lg-12">
                                    <select required name="patient_gender" id="disabledSelect" className="form-select custom_input">
                                        <option value="">Select One</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </select>
                                </div>
                            </div>
                            <div className="mb-1 mb-lg-3 row">
                                <label for="h-name" className="col-sm-12 col-md-12 col-lg-12 col-form-label">Preferred Doctor *</label>
                                <div className="col-sm-12 col-md-12 col-lg-12">
                                    <select required name="preferred_doctor" id="disabledSelect" className="form-select custom_input">
                                        <option value="">Select One</option>
                                            <option>name </option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <div className="mb-1 mb-lg-3 row">
                                <label for="h-name" className="col-sm-12 col-md-12 col-lg-12 col-form-label">Department *</label>
                                <div className="col-sm-12 col-md-12 col-lg-12">
                                    <select required name="doctor_department" id="disabledSelect" className="form-select custom_input">
                                        <option value="">Select One</option>
                                            <option>department_name 
                                            </option>

                                    </select>
                                </div>
                            </div>
                            <div className="mb-1 mb-lg-3 row">
                                <label for="h-name" className="col-sm-12 col-md-12 col-lg-12 col-form-label">Report Type *</label>
                                <div className="col-sm-12 col-md-12 col-lg-12">
                                    <select required name="report_type" id="disabledSelect" className="form-select custom_input">
                                        <option value="">Select One</option>
                                            <option >report_type
                                            </option>
                                    </select>
                                </div>
                            </div>
                            <div className="mb-1 mb-lg-3 row">
                                <label for="h-name" className="col-sm-12 col-md-12 col-lg-12 col-form-label">Rerport ID *</label>
                                <div className="col-sm-12 col-md-12 col-lg-12">
                                    <input required name="report_id" type="text" className="form-control" id="h-name"/>
                                </div>
                            </div>
                            <div className="mb-1 mb-lg-3 row">
                                <label for="h-name" className="col-sm-12 col-md-12 col-lg-12 col-form-label">Age *</label>
                                <div className="col-sm-12 col-md-12 col-lg-12">
                                    <input required name="patient_age" type="number" className="form-control" id="h-name"/>
                                </div>
                            </div>
                            <div className="mb-1 mb-lg-3 row">
                                <label for="h-name" className="col-sm-12 col-md-12 col-lg-12 col-form-label">Report Image *</label>
                                <div className="col-sm-12 col-md-12 col-lg-12">
                                    <input required name="report_image" type="file" className="form-control" id="inputGroupFile04"
                                        aria-describedby="inputGroupFileAddon04" aria-label="Upload"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 mt-3">
                            <div className="d-flex profile-btn">
                                <Link to="/dashboard" type="reset" className="btn cancel">
                                    Cancel
                                </Link>
                                <button type="submit" className="btn update">
                                    Send
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

export default NewReportEntry;
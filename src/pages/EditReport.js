import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { addReportValidation } from "../validation";

const EditReport = () => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const live = process.env.REACT_APP_LOCAL;
  const params = useParams();
  const [report, setReport] = useState([]);
  const [filterReport, setFilterReport] = useState();
  const [allDoctors, setAllDoctors] = useState();

  useEffect(() => {
    // all Report
    const getReport = async () => {
      const allReport = await axios.get(`${apiKey}/user/all-report`);
      setReport(allReport.data);
    };

    const getAllDoctors = async () => {
      const allDoctors = await axios.get(`${apiKey}/user/all-doctors`);
      setAllDoctors(allDoctors.data);
    };

    getReport();
    getAllDoctors();
  }, []);

  useEffect(() => {
    const filterData = report.find((report) => report._id === params.id);
    setFilterReport(filterData);
  }, [params.id, report]);

  const initialValues = {
    date: filterReport?.date || null,
    report_title: filterReport?.report_title || "",
    patient_name: filterReport?.patient_name || "",
    gender: filterReport?.gender || "",
    preferred_doctor: filterReport?.preferred_doctor._id || "",
    department: filterReport?.department || "",
    report_type: filterReport?.report_type || "",
    report_id: filterReport?.report_id || "",
    age: filterReport?.age || "",
    report_image: filterReport?.report_image || "null"
  };

  const editHospitalReport = async () => {
    const formData = new FormData();

    Object.entries(formik.values).forEach(([key, value]) => {
      formData.append(key, value);
    });

    try {
      let { data } = await axios.post(`${apiKey}/user/edit-report`, formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
      console.log(data);
      toast(data.error);
      toast(data.success);
      if (data.success) {
        window.location.replace("/sent-report");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: initialValues,
    validationSchema: addReportValidation,
    onSubmit: async () => {
      try {
        await editHospitalReport();
      } catch (error) {
        console.error(error);
      }
    }
  });

  // For hospital_img
  const onChangeHospitalImage = (e) => {
    formik.setFieldValue("report_image", e.target.files[0]);
    formik.setFieldError("report_image", "");
  };
  return (
    <>
      <div className="add-new-report">
        <div className="report-body">
          <form onSubmit={formik.handleSubmit}>
            <h2 className="profile-heading">Report Edit</h2>

            <div className="container">
              <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-6">
                  <div className="mb-1 mb-lg-5 row">
                    <label
                      htmlFor="h-name"
                      className="col-sm-12 col-md-12 col-lg-4 col-form-label"
                    >
                      Date *
                    </label>
                    <div className="col-sm-12 col-md-12 col-lg-8 position-relative">
                      <input
                        required
                        name="date"
                        type="date"
                        className="form-control date"
                        id="datepicker"
                        value={formik.values.date}
                        onChange={formik.handleChange}
                      />
                      {formik.touched.date && formik.errors.date ? (
                        <p>{formik.errors.date}</p>
                      ) : null}

                      <input
                        id="dateValue"
                        type="hidden"
                        className="form-control date"
                      />
                    </div>
                  </div>
                  <div className="mb-1 mb-lg-5 row">
                    <label
                      htmlFor="h-name"
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
                        value={formik.values.report_title}
                        onChange={formik.handleChange}
                      />
                      {formik.touched.report_title &&
                      formik.errors.report_title ? (
                        <p>{formik.errors.report_title}</p>
                      ) : null}
                    </div>
                  </div>
                  <div className="mb-1 mb-lg-5 row">
                    <label
                      htmlFor="h-name"
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
                        value={formik.values.patient_name}
                        onChange={formik.handleChange}
                      />
                      {formik.touched.patient_name &&
                      formik.errors.patient_name ? (
                        <p>{formik.errors.patient_name}</p>
                      ) : null}
                    </div>
                  </div>
                  <div className="mb-1 mb-lg-5 row">
                    <label
                      htmlFor="h-name"
                      className="col-sm-12 col-md-12 col-lg-4 col-form-label"
                    >
                      Gender *
                    </label>
                    <div className="col-sm-12 col-md-12 col-lg-8">
                      <select
                        required
                        name="gender"
                        id="disabledSelect"
                        className="form-select custom_input"
                        value={formik.values.gender}
                        onChange={formik.handleChange}
                      >
                        <option value="">Select One</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>
                      {formik.touched.gender && formik.errors.gender ? (
                        <p>{formik.errors.gender}</p>
                      ) : null}
                    </div>
                  </div>
                  <div className="mb-1 mb-lg-5 row">
                    <label
                      htmlFor="h-name"
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
                        value={formik.values.preferred_doctor}
                        onChange={formik.handleChange}
                      >
                        <option value="">Select One</option>
                        {allDoctors?.map((item) => (
                          <option value={item._id} key={item._id}>
                            {item.name}{" "}
                          </option>
                        ))}
                      </select>
                      {formik.touched.preferred_doctor &&
                      formik.errors.preferred_doctor ? (
                        <p>{formik.errors.preferred_doctor}</p>
                      ) : null}
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6">
                  <div className="mb-1 mb-lg-5 row">
                    <label
                      htmlFor="h-name"
                      className="col-sm-12 col-md-12 col-lg-4 col-form-label"
                    >
                      Department *
                    </label>
                    <div className="col-sm-12 col-md-12 col-lg-8">
                      <select
                        required
                        name="department"
                        id="disabledSelect"
                        className="form-select custom_input"
                        value={formik.values.department}
                        onChange={formik.handleChange}
                      >
                        <option value="">Select One</option>
                        <option value={"radiology"}>Radiology</option>
                        <option value={"pediatric"}>Pediatric</option>
                      </select>
                      {formik.touched.department && formik.errors.department ? (
                        <p>{formik.errors.department}</p>
                      ) : null}
                    </div>
                  </div>
                  <div className="mb-1 mb-lg-5 row">
                    <label
                      htmlFor="h-name"
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
                        value={formik.values.report_type}
                        onChange={formik.handleChange}
                      >
                        <option value="">Select One</option>
                        <option value="mri">MRI</option>
                        <option value="x-ray">X-ray</option>
                        <option value="ct-scan">CT-scan</option>
                      </select>
                      {formik.touched.report_type &&
                      formik.errors.report_type ? (
                        <p>{formik.errors.report_type}</p>
                      ) : null}
                    </div>
                  </div>
                  <div className="mb-1 mb-lg-5 row">
                    <label
                      htmlFor="h-name"
                      className="col-sm-12 col-md-12 col-lg-4 col-form-label"
                    >
                      Rerport ID *
                    </label>
                    <div className="col-sm-12 col-md-12 col-lg-8">
                      <input
                        required
                        name="report_id"
                        type="text"
                        className="form-control"
                        id="h-name"
                        value={formik.values.report_id}
                        onChange={formik.handleChange}
                      />
                      {formik.touched.report_id && formik.errors.report_id ? (
                        <p>{formik.errors.report_id}</p>
                      ) : null}
                    </div>
                  </div>
                  <div className="mb-1 mb-lg-5 row">
                    <label
                      htmlFor="h-name"
                      className="col-sm-12 col-md-12 col-lg-4 col-form-label"
                    >
                      Age *
                    </label>
                    <div className="col-sm-12 col-md-12 col-lg-8">
                      <input
                        required
                        name="age"
                        type="text"
                        className="form-control"
                        id="h-name"
                        value={formik.values.age}
                        onChange={formik.handleChange}
                      />
                      {formik.touched.age && formik.errors.age ? (
                        <p>{formik.errors.age}</p>
                      ) : null}
                    </div>
                  </div>
                  <div className="mb-1 mb-lg-5 row">
                    <label
                      htmlFor="h-name"
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
                        onChange={onChangeHospitalImage}
                      />
                      {formik.values.report_image ? (
                        <img
                          className="img-fluid w-responsive"
                          src={
                            formik.values.report_image instanceof File
                              ? URL.createObjectURL(formik.values.report_image)
                              : `${live}/${formik.values.report_image
                                  .replace(/\\/g, "/")
                                  .replace(/\.[^/.]+$/, "")}`
                          }
                          alt=""
                          style={{ width: "100px", height: "100px" }}
                        />
                      ) : (
                        <p>No Image found</p>
                      )}
                      {formik.touched.report_image &&
                      formik.errors.report_image ? (
                        <p>{formik.errors.report_image}</p>
                      ) : null}
                    </div>
                  </div>
                </div>
                <div className="col-12 mt-3">
                  <div className="d-flex profile-btn">
                    <button onClick={() => window.history.back()} className="btn cancel">
                      Cancel
                    </button>
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

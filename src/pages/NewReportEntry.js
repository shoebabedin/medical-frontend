import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { addDoctorValidation } from "../validation";

const NewReportEntry = () => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const [allDoctors, setAllDoctors] = useState();

  useEffect(() => {
    // all doctors
    const getAllDoctors = async () => {
      const allDoctors = await axios.get(`${apiKey}/user/all-doctors`);
      setAllDoctors(allDoctors.data);
    };

    getAllDoctors();
  }, []);

  
  const initialValues = {
    date: "",
    report_title: "",
    patient_name: "",
    gender: "",
    prefered_doctor: "",
    department: "",
    report_type: "",
    report_id: "",
    age: "",
    report_image: null
  };

  const addNewDoctor = async () => {
    const formData = new FormData();

    formData.append("name", formik.values.name);
    formData.append("email", formik.values.email);
    formData.append("password", formik.values.password);
    formData.append("phone", formik.values.phone);
    formData.append("h_name", formik.values.h_name);
    formData.append("position", formik.values.position);
    formData.append("bmdcRegNo", formik.values.bmdcRegNo);

    // Append the image files
    formData.append("profile_img", formik.values.profile_img);
    formData.append("doctor_sign", formik.values.doctor_sign);

    // Append the degrees as a JSON string
    formData.append("degrees", JSON.stringify(formik.values.degrees));

    try {
      let { data } = await axios.post(
        `${apiKey}/user/new-doctors-add`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }
      );
      console.log(data);
      toast(data.error);
      toast(data.success);
      if (data.success) {
        window.location.replace("/doctor-list");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: initialValues,
    validationSchema: addDoctorValidation,
    onSubmit: async () => {
      try {
        await addNewDoctor();
      } catch (error) {
        console.error(error);
      }
    }
  });

  return (
    <>
      <div className="add-new-report">
        <div className="report-body">
          <form onSubmit={formik.handleSubmit}>
            <h2 className="profile-heading">New Report Entry</h2>

            <div className="container">
              <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-6">
                  <div className="mb-1 mb-lg-3 row">
                    <label
                      htmlFor="h-name"
                      className="col-sm-12 col-md-12 col-lg-12 col-form-label"
                    >
                      Date *
                    </label>
                    <div className="col-sm-12 col-md-12 col-lg-12 position-relative">
                      <input
                        required
                        name="created_at"
                        type="date"
                        className="form-control date"
                        id="datepicker"
                        value=""
                      />
                    </div>
                  </div>
                  <div className="mb-1 mb-lg-3 row">
                    <label
                      htmlFor="h-name"
                      className="col-sm-12 col-md-12 col-lg-12 col-form-label"
                    >
                      Rerport Title *
                    </label>
                    <div className="col-sm-12 col-md-12 col-lg-12 position-relative">
                      <input
                        required
                        name="report_title"
                        type="text"
                        className="form-control"
                        id="h-name"
                      />
                    </div>
                  </div>
                  <div className="mb-1 mb-lg-3 row">
                    <label
                      htmlFor="h-name"
                      className="col-sm-12 col-md-12 col-lg-12 col-form-label"
                    >
                      Patient Name *
                    </label>
                    <div className="col-sm-12 col-md-12 col-lg-12">
                      <input
                        required
                        name="patient_name"
                        type="text"
                        className="form-control"
                        id="h-name"
                      />
                    </div>
                  </div>
                  <div className="mb-1 mb-lg-3 row">
                    <label
                      htmlFor="h-name"
                      className="col-sm-12 col-md-12 col-lg-12 col-form-label"
                    >
                      Gender *
                    </label>
                    <div className="col-sm-12 col-md-12 col-lg-12">
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
                  <div className="mb-1 mb-lg-3 row">
                    <label
                      htmlFor="h-name"
                      className="col-sm-12 col-md-12 col-lg-12 col-form-label"
                    >
                      Preferred Doctor *
                    </label>
                    <div className="col-sm-12 col-md-12 col-lg-12">
                      <select
                        required
                        name="preferred_doctor"
                        id="disabledSelect"
                        className="form-select custom_input"
                      >
                        <option value="">Select One</option>
                        {allDoctors?.map((item) => (
                          <option value={item._id} key={item._id}>
                            {item.name}{" "}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6">
                  <div className="mb-1 mb-lg-3 row">
                    <label
                      htmlFor="h-name"
                      className="col-sm-12 col-md-12 col-lg-12 col-form-label"
                    >
                      Department *
                    </label>
                    <div className="col-sm-12 col-md-12 col-lg-12">
                      <select
                        required
                        name="doctor_department"
                        id="disabledSelect"
                        className="form-select custom_input"
                      >
                        <option value="">Select One</option>
                        <option value={"radiology"}>Radiology</option>
                        <option value={"pediatric"}>Pediatric</option>
                      </select>
                    </div>
                  </div>
                  <div className="mb-1 mb-lg-3 row">
                    <label
                      htmlFor="h-name"
                      className="col-sm-12 col-md-12 col-lg-12 col-form-label"
                    >
                      Report Type *
                    </label>
                    <div className="col-sm-12 col-md-12 col-lg-12">
                      <select
                        required
                        name="report_type"
                        id="disabledSelect"
                        className="form-select custom_input"
                      >
                        <option value="">Select One</option>
                        <option>MRI</option>
                        <option>X-ray</option>
                        <option>CT-scan</option>
                      </select>
                    </div>
                  </div>
                  <div className="mb-1 mb-lg-3 row">
                    <label
                      htmlFor="h-name"
                      className="col-sm-12 col-md-12 col-lg-12 col-form-label"
                    >
                      Rerport ID *
                    </label>
                    <div className="col-sm-12 col-md-12 col-lg-12">
                      <input
                        required
                        name="report_id"
                        type="text"
                        className="form-control"
                        id="h-name"
                      />
                    </div>
                  </div>
                  <div className="mb-1 mb-lg-3 row">
                    <label
                      htmlFor="h-name"
                      className="col-sm-12 col-md-12 col-lg-12 col-form-label"
                    >
                      Age *
                    </label>
                    <div className="col-sm-12 col-md-12 col-lg-12">
                      <input
                        required
                        name="patient_age"
                        type="number"
                        className="form-control"
                        id="h-name"
                      />
                    </div>
                  </div>
                  <div className="mb-1 mb-lg-3 row">
                    <label
                      htmlFor="h-name"
                      className="col-sm-12 col-md-12 col-lg-12 col-form-label"
                    >
                      Report Image *
                    </label>
                    <div className="col-sm-12 col-md-12 col-lg-12">
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
                    <button
                      onClick={() => window.history.back()}
                      type="reset"
                      className="btn cancel"
                    >
                      Cancel
                    </button>
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

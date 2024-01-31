import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

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
    date: null,
    report_title: "",
    patient_name: "",
    gender: "",
    preferred_doctor: "",
    department: "",
    report_type: "",
    report_id: "",
    age: "",
    report_image: null
  };

  const addNewDoctor = async () => {
    const formData = new FormData();
    
    Object.entries(formik.values).forEach(([key, value]) => {
      formData.append(key, value);
    });

    try {
      let { data } = await axios.post(
        `${apiKey}/user/new-report-add`,
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
        window.location.replace("/sent-report");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: initialValues,
    // validationSchema: addReportValidation,
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
                        value={formik.values.report_title}
                        onChange={formik.handleChange}
                      />
                      {formik.touched.report_title &&
                      formik.errors.report_title ? (
                        <p>{formik.errors.report_title}</p>
                      ) : null}
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
                        value={formik.values.patient_name}
                        onChange={formik.handleChange}
                      />
                      {formik.touched.patient_name &&
                      formik.errors.patient_name ? (
                        <p>{formik.errors.patient_name}</p>
                      ) : null}
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
                        name="gender"
                        id="disabledSelect"
                        className="form-select custom_input"
                        defaultValue={formik.values.gender}
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
                        defaultValue={formik.values.preferred_doctor}
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
                        name="department"
                        id="disabledSelect"
                        className="form-select custom_input"
                        defaultValue={formik.values.department}
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
                        name="report_type" // Make sure this matches the corresponding field name
                        id="disabledSelect"
                        className="form-select custom_input"
                        defaultValue={formik.values.report_type}
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
                        value={formik.values.report_id}
                        onChange={formik.handleChange}
                      />
                      {formik.touched.report_id && formik.errors.report_id ? (
                        <p>{formik.errors.report_id}</p>
                      ) : null}
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
                        onChange={(e) =>
                          formik.setFieldValue(
                            "report_image",
                            e.target.files[0]
                          )
                        }
                      />
                      {formik.touched.report_image &&
                      formik.errors.report_image ? (
                        <p>{formik.errors.report_image}</p>
                      ) : null}
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

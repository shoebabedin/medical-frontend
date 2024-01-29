import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import { GrFormView, GrFormViewHide } from "react-icons/gr";
import { toast } from "react-toastify";
import { addDoctorValidation } from "../validation";

const AddNewHospital = () => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const [degrees, setDegrees] = useState([{ degree: "", specialized: "" }]);
  const [view, setView] = useState(false);
  const addNewDegree = () => {
    setDegrees([...degrees, { degree: "", specialized: "" }]);
  };

  const handleDegreeChange = (index, fieldName, value) => {
    const updatedDegrees = [...degrees];
    updatedDegrees[index][fieldName] = value;
    setDegrees(updatedDegrees);

    // Update Formik's state for the changed degree
    formik.setFieldValue(`degrees[${index}].${fieldName}`, value);
  };

  const removeDegree = (index) => {
    const updatedDegrees = [...degrees];
    updatedDegrees.splice(index, 1);
    setDegrees(updatedDegrees);

    // Remove the degree from Formik's state
    formik.setFieldValue(
      "degrees",
      formik.values.degrees.filter((_, i) => i !== index)
    );
  };

  const initialValues = {
    name: "",
    email: "",
    password: "",
    phone: "",
    h_name: "",
    position: "",
    bmdcRegNo: "",
    profile_img: null,
    doctor_sign: null,
    degrees: [{ degree: "", specialized: "" }]
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
            <h2 className="profile-heading">Add New Doctor</h2>
            <div className="container">
              <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-6">
                  <div className="mb-1 mb-lg-3 row">
                    <label
                      htmlFor="u_name"
                      className="col-sm-12 col-md-12 col-lg-12 col-form-label"
                    >
                      User Name *
                    </label>
                    <div className="col-sm-12 col-md-12 col-lg-12">
                      <input
                        required
                        name="name"
                        type="text"
                        className="form-control"
                        id="u_name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                      />
                      {formik.touched.name && formik.errors.name ? (
                        <p>{formik.errors.name}</p>
                      ) : null}
                    </div>
                  </div>
                  <div className="mb-1 mb-lg-3 row">
                    <label
                      htmlFor="email"
                      className="col-sm-12 col-md-12 col-lg-12 col-form-label"
                    >
                      Email *
                    </label>
                    <div className="col-sm-12 col-md-12 col-lg-12">
                      <input
                        required
                        name="email"
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="example@email.com"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                      />
                      {formik.touched.email && formik.errors.email ? (
                        <p>{formik.errors.email}</p>
                      ) : null}
                    </div>
                  </div>
                  <div className="mb-1 mb-lg-3 row">
                    <label
                      htmlFor="password"
                      className="col-sm-12 col-md-12 col-lg-12 col-form-label"
                    >
                      Password *
                    </label>
                    <div className="col-sm-12 col-md-12 col-lg-12 position-relative">
                      <input
                        required
                        name="password"
                        type={view ? "text" : "password"}
                        className="form-control"
                        id="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                      />
                      <button
                        onClick={() => setView(!view)}
                        className="position-absolute top-50 end-0 translate-middle border-0 bg-transparent "
                        style={{ cursor: "pointer" }}
                      >
                        {view ? <GrFormView /> : <GrFormViewHide />}
                      </button>
                      {formik.touched.password && formik.errors.password ? (
                        <p>{formik.errors.password}</p>
                      ) : null}
                    </div>
                  </div>
                  <div className="mb-1 mb-lg-3 row">
                    <label
                      htmlFor="phone"
                      className="col-sm-12 col-md-12 col-lg-12 col-form-label"
                    >
                      Phone No
                    </label>
                    <div className="col-sm-12 col-md-12 col-lg-12">
                      <input
                        required
                        name="phone"
                        type="tel"
                        className="form-control"
                        id="phone"
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                      />
                      {formik.touched.phone && formik.errors.phone ? (
                        <p>{formik.errors.phone}</p>
                      ) : null}
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6">
                  <div className="mb-1 mb-lg-3 row">
                    <label
                      htmlFor="h_name"
                      className="col-sm-12 col-md-12 col-lg-12 col-form-label"
                    >
                      Hospital *
                    </label>
                    <div className="col-sm-12 col-md-12 col-lg-12">
                      <input
                        required
                        name="h_name"
                        type="text"
                        className="form-control"
                        id="h_name"
                        value={formik.values.h_name}
                        onChange={formik.handleChange}
                      />
                      {formik.touched.h_name && formik.errors.h_name ? (
                        <p>{formik.errors.h_name}</p>
                      ) : null}
                    </div>
                  </div>
                  <div className="mb-1 mb-lg-3 row">
                    <label
                      htmlFor="position"
                      className="col-sm-12 col-md-12 col-lg-12 col-form-label"
                    >
                      Position *
                    </label>
                    <div className="col-sm-12 col-md-12 col-lg-12">
                      <input
                        required
                        name="position"
                        type="text"
                        className="form-control"
                        id="position"
                        value={formik.values.position}
                        onChange={formik.handleChange}
                      />
                      {formik.touched.position && formik.errors.position ? (
                        <p>{formik.errors.position}</p>
                      ) : null}
                    </div>
                  </div>
                  <div className="mb-1 mb-lg-3 row">
                    <label
                      htmlFor="regNo"
                      className="col-sm-12 col-md-12 col-lg-12 col-form-label"
                    >
                      BMDC Reg No *
                    </label>
                    <div className="col-sm-12 col-md-12 col-lg-12">
                      <input
                        required
                        name="bmdcRegNo"
                        type="text"
                        className="form-control"
                        id="regNo"
                        value={formik.values.bmdcRegNo}
                        onChange={formik.handleChange}
                      />
                      {formik.touched.bmdcRegNo && formik.errors.bmdcRegNo ? (
                        <p>{formik.errors.bmdcRegNo}</p>
                      ) : null}
                    </div>
                  </div>
                  <div className="mb-1 mb-lg-3 row">
                    <label
                      htmlFor="profile_img"
                      className="col-sm-12 col-md-12 col-lg-12 col-form-label"
                    >
                      Profile Image
                    </label>
                    <div className="col-sm-12 col-md-12 col-lg-12">
                      <input
                        required
                        name="profile_img"
                        type="file"
                        className="form-control"
                        id="profile_img"
                        onChange={(e) =>
                          formik.setFieldValue("profile_img", e.target.files[0])
                        }
                      />
                      {formik.touched.profile_img &&
                      formik.errors.profile_img ? (
                        <p>{formik.errors.profile_img}</p>
                      ) : null}
                    </div>
                  </div>
                  <div className="mb-1 mb-lg-3 row">
                    <label
                      htmlFor="doctor_sign"
                      className="col-sm-12 col-md-12 col-lg-12 col-form-label"
                    >
                      Dotor's Sign
                    </label>
                    <div className="col-sm-12 col-md-12 col-lg-12">
                      <input
                        required
                        name="doctor_sign"
                        type="file"
                        className="form-control"
                        id="doctor_sign"
                        onChange={(e) =>
                          formik.setFieldValue("doctor_sign", e.target.files[0])
                        }
                      />
                      {formik.touched.doctor_sign &&
                      formik.errors.doctor_sign ? (
                        <p>{formik.errors.doctor_sign}</p>
                      ) : null}
                    </div>
                  </div>
                </div>
                <div className="col-12 profile-btn">
                  <span className="btn btn-warning mb-3" onClick={addNewDegree}>
                    Add Degree
                  </span>
                  <div className="">
                    {degrees.map((degree, index) => (
                      <div key={index} className="row mb-3">
                        <div className="col-12 col-lg-5">
                          <div className="col-sm-12 col-md-12 col-lg-12">
                            <input
                              required
                              name={`degree-${index}`}
                              type="text"
                              className="form-control"
                              placeholder="Degree"
                              value={degree.degree}
                              onChange={(e) =>
                                handleDegreeChange(
                                  index,
                                  "degree",
                                  e.target.value
                                )
                              }
                            />
                          </div>
                        </div>
                        <div className="col-12 col-lg-6">
                          <div className="col-sm-12 col-md-12 col-lg-12">
                            <input
                              required
                              name={`specialized-${index}`}
                              type="text"
                              className="form-control"
                              placeholder="Specialization"
                              value={degree.specialized}
                              onChange={(e) =>
                                handleDegreeChange(
                                  index,
                                  "specialized",
                                  e.target.value
                                )
                              }
                            />
                          </div>
                        </div>
                        <div className="col-12 col-lg-1">
                          <button
                            className="btn btn-danger"
                            onClick={() => removeDegree(index)}
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="col-12 mt-3">
                  <div className="d-flex profile-btn">
                    <button
                      onClick={() => window.history.back()}
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

export default AddNewHospital;

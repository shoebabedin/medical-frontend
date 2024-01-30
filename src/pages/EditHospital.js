import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const EditHospital = () => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const live = process.env.REACT_APP_LOCAL;
  const params = useParams();
  const [allUser, setAllUser] = useState([]);
  const [filterUser, setFilterUser] = useState();

  useEffect(() => {
    const getAllData = async () => {
      try {
        const allData = await axios.get(`${apiKey}/user/all-hospitals`);
        setAllUser(allData.data);
      } catch (error) {
        console.error("Error while fetching pending requests:", error);
      }
    };

    getAllData();
  }, [apiKey]);

  useEffect(() => {
    const filterData = allUser.find((user) => user._id === params.id);
    setFilterUser(filterData);
  }, [params.id, allUser]);

  const EditHospital = async () => {
    const formData = new FormData();

    formData.append("id", params.id);
    formData.append("name", formik.values.name);
    formData.append("email", formik.values.email);
    formData.append("phone", formik.values.phone);
    formData.append("address", formik.values.address);
    formData.append("map_location", formik.values.map_location);
    formData.append("hospital_img", formik.values.hospital_img);

    try {
      let { data } = await axios.post(
        `${apiKey}/user/hospital-update`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }
      );
      toast(data.error);
      toast(data.success);
      if (data.success) {
        window.location.replace("/hospital-list");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: filterUser?.name || "",
      email: filterUser?.email || "",
      phone: filterUser?.phone || "",
      address: filterUser?.address || "",
      map_location: filterUser?.map_location || "",
      hospital_img: filterUser?.profile_img || ""
    },
    onSubmit: async () => {
      try {
        await EditHospital();
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    }
  });

  // For hospital_img
  const onChangeHospitalImage = (e) => {
    formik.setFieldValue("hospital_img", e.target.files[0]);
    formik.setFieldError("hospital_img", "");
  };



  return (
    <>
      <div className="add-new-report">
        <div className="report-body">
          <form onSubmit={formik.handleSubmit}>
            <h2 className="profile-heading">Edit Hospital</h2>
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
                      Address *
                    </label>
                    <div className="col-sm-12 col-md-12 col-lg-12">
                      <input
                        required
                        name="address"
                        type="text"
                        className="form-control"
                        id="h_name"
                        value={formik.values.address}
                        onChange={formik.handleChange}
                      />
                      {formik.touched.address && formik.errors.address ? (
                        <p>{formik.errors.address}</p>
                      ) : null}
                    </div>
                  </div>
                  <div className="mb-1 mb-lg-3 row">
                    <label
                      htmlFor="position"
                      className="col-sm-12 col-md-12 col-lg-12 col-form-label"
                    >
                      Map Location *
                    </label>
                    <div className="col-sm-12 col-md-12 col-lg-12">
                      <input
                        required
                        name="map_location"
                        type="text"
                        className="form-control"
                        id="position"
                        value={formik.values.map_location}
                        onChange={formik.handleChange}
                      />
                      {formik.touched.map_location &&
                      formik.errors.map_location ? (
                        <p>{formik.errors.map_location}</p>
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
                        name="profile_img"
                        type="file"
                        className="form-control mb-4"
                        id="profile_img"
                        onChange={onChangeHospitalImage}
                      />
                      {formik.values.hospital_img ? (
                        <img
                          className="img-fluid w-responsive"
                          src={
                            formik.values.hospital_img instanceof File
                              ? URL.createObjectURL(formik.values.hospital_img)
                              : `${live}/${formik.values.hospital_img
                                  .replace(/\\/g, "/")
                                  .replace(/\.[^/.]+$/, "")}`
                          }
                          alt=""
                          style={{ width: "100px", height: "100px" }}
                        />
                      ) : (
                        <p>No Image found</p>
                      )}
                      {formik.touched.hospital_img &&
                      formik.errors.hospital_img ? (
                        <p>{formik.errors.hospital_img}</p>
                      ) : null}
                    </div>
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
                    <button
                      type="submit"
                      className="btn update"
                    >
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

export default EditHospital;

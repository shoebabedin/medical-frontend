import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { addReportValidation } from "../validation";

const ReceivedReportView = () => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const live = process.env.REACT_APP_LOCAL;
  const params = useParams();
  const [allUser, setAllUser] = useState([]);
  const [filterUser, setFilterUser] = useState();
  const [editorHtml, setEditorHtml] = useState("");

  const modules = {
    toolbar: [
      ["bold", "italic", "underline", "strike"], // toggled buttons
      ["blockquote", "code-block"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ script: "sub" }, { script: "super" }], // superscript/subscript
      [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
      [{ direction: "rtl" }], // text direction
      [{ size: ["small", false, "large", "huge"] }], // custom dropdown
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ color: [] }, { background: [] }], // dropdown with defaults from theme
      [{ font: [] }],
      [{ align: [] }],
      ["clean"] // remove formatting button
    ]
  };

  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "color",
    "background"
  ];

  useEffect(() => {
    // all doctors
    const getAllPendingReport = async () => {
      const allPendingReport = await axios.get(`${apiKey}/user/all-report`);
      setAllUser(allPendingReport.data);
    };

    getAllPendingReport();
  }, [apiKey]);

  useEffect(() => {
    const filterData = allUser.find((user) => user._id === params.id);
    setFilterUser(filterData);
  }, [params.id, allUser]);

  const initialValues = {
    date: filterUser?.date || null,
    report_title: filterUser?.report_title || "",
    patient_name: filterUser?.patient_name || "",
    gender: filterUser?.gender || "",
    preferred_doctor: filterUser?.preferred_doctor._id || "",
    department: filterUser?.department || "",
    report_type: filterUser?.report_type || "",
    report_id: filterUser?.report_id || "",
    age: filterUser?.age || "",
    report_image: filterUser?.report_image || "null",
    report_comment:
      filterUser?.report_comment !== undefined ? filterUser?.report_comment : ""
  };

  const editHospitalReport = async () => {
    const formData = new FormData();
    formData.append("id", params.id);
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
        window.location.replace("/received-report");
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
  const handleChange = (html) => {
    setEditorHtml(html);
    formik.setFieldValue("report_comment", html);
  };
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
                      <button
                        onClick={() => window.history.back()}
                        to="#"
                        id="back"
                        className="btn download  mx-auto mb-lg-0"
                      >
                        Back
                      </button>
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
                        <div id="idv">
                          <img
                            className="img-fluid w-responsive"
                            src={
                              filterUser?.report_image instanceof File
                                ? URL.createObjectURL(filterUser?.report_image)
                                : `${live}/${filterUser?.report_image
                                    .replace(/\\/g, "/")
                                    .replace(/\.[^/.]+$/, "")}`
                            }
                            alt=""
                            style={{ width: "100%", height: "100%" }}
                          />
                        </div>
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
                                <span className="name">
                                  {filterUser?.report_id}{" "}
                                </span>
                              </td>
                              <td className="desktop">
                                <span className="title">Patient Name</span>
                              </td>
                              <td colSpan={2} data-label="Patient Name">
                                <span className="name">
                                  {filterUser?.patient_name}{" "}
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="desktop">
                                <span className="title">Report Date</span>
                              </td>
                              <td data-label="Report Date">
                                <span className="name">{filterUser?.date}</span>
                              </td>
                              <td className="desktop">
                                <span className="title">Age</span>
                              </td>
                              <td data-label="Age">
                                <span className="name">{filterUser?.age} </span>
                              </td>
                              <td className="desktop">
                                <span className="title">Gender</span>
                              </td>
                              <td data-label="Gender">
                                <span className="name">
                                  {filterUser?.gender}
                                </span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <form onSubmit={formik.handleSubmit}>
                          <input type="hidden" name="report_id" />
                          <input type="hidden" name="report_type" />
                          <input type="hidden" name="department" />
                          <div className="col-sm-12 col-md-6 col-lg-6">
                            <div className="mb-1 mb-lg-3 row">
                              <label
                                htmlFor="h-name"
                                className="col-12 col-lg-4 col-form-label"
                              >
                                Report Type
                              </label>
                              <div className="col">
                                <input
                                  disabled
                                  className="custom_input form-control"
                                  value={filterUser?.report_type}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-12 col-md-6 col-lg-6">
                            <div className="mb-1 mb-lg-5 row">
                              <label
                                htmlFor="h-name"
                                className="col-12 col-lg-4  col-form-label"
                              >
                                Report Title
                              </label>
                              <div className="col">
                                <input
                                  disabled
                                  className="custom_input form-control"
                                  value={filterUser?.report_title}
                                />
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
                            <ReactQuill
                              theme="snow"
                              name="report_comment"
                              modules={modules}
                              formats={formats}
                              value={formik.values.report_comment}
                              onChange={handleChange}
                            />
                          </div>
                          <div className="col-12">
                            <div className="d-flex profile-btn">
                              <Link
                                to="/dr_report_format_list_page"
                                className="btn cancel"
                              >
                                Cancel
                              </Link>
                              <button type="submit" className="btn update send">
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

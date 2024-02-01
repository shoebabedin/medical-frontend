import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const CompleteReportView = () => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const live = process.env.REACT_APP_LOCAL;
  const params = useParams();
  const [allUser, setAllUser] = useState([]);
  const [filterUser, setFilterUser] = useState();

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

  console.log(filterUser);
  return (
    <>
      <div className="add-new-report admin doctor complete-report hospital-report">
        <div className="doctor-report-body">
          <div className="d-flex align-items-center justify-content-end gap-4">
            <button
              className="print"
              onclick="($('#printTable').print())"
              id="ccc"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-printer-fill"
                viewBox="0 0 16 16"
              >
                <path d="M5 1a2 2 0 0 0-2 2v1h10V3a2 2 0 0 0-2-2H5zm6 8H5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1z" />
                <path d="M0 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1v-2a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2H2a2 2 0 0 1-2-2V7zm2.5 1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" />
              </svg>
              PRINT
            </button>
            <button
              id="generate-pdf"
              className="download"
              onclick="printFuction()"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-filetype-pdf"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM1.6 11.85H0v3.999h.791v-1.342h.803c.287 0 .531-.057.732-.173.203-.117.358-.275.463-.474a1.42 1.42 0 0 0 .161-.677c0-.25-.053-.476-.158-.677a1.176 1.176 0 0 0-.46-.477c-.2-.12-.443-.179-.732-.179Zm.545 1.333a.795.795 0 0 1-.085.38.574.574 0 0 1-.238.241.794.794 0 0 1-.375.082H.788V12.48h.66c.218 0 .389.06.512.181.123.122.185.296.185.522Zm1.217-1.333v3.999h1.46c.401 0 .734-.08.998-.237a1.45 1.45 0 0 0 .595-.689c.13-.3.196-.662.196-1.084 0-.42-.065-.778-.196-1.075a1.426 1.426 0 0 0-.589-.68c-.264-.156-.599-.234-1.005-.234H3.362Zm.791.645h.563c.248 0 .45.05.609.152a.89.89 0 0 1 .354.454c.079.201.118.452.118.753a2.3 2.3 0 0 1-.068.592 1.14 1.14 0 0 1-.196.422.8.8 0 0 1-.334.252 1.298 1.298 0 0 1-.483.082h-.563v-2.707Zm3.743 1.763v1.591h-.79V11.85h2.548v.653H7.896v1.117h1.606v.638H7.896Z"
                />
              </svg>
              PDF Download
            </button>
            <button id="pdfButton" className="download">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-filetype-pdf"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM1.6 11.85H0v3.999h.791v-1.342h.803c.287 0 .531-.057.732-.173.203-.117.358-.275.463-.474a1.42 1.42 0 0 0 .161-.677c0-.25-.053-.476-.158-.677a1.176 1.176 0 0 0-.46-.477c-.2-.12-.443-.179-.732-.179Zm.545 1.333a.795.795 0 0 1-.085.38.574.574 0 0 1-.238.241.794.794 0 0 1-.375.082H.788V12.48h.66c.218 0 .389.06.512.181.123.122.185.296.185.522Zm1.217-1.333v3.999h1.46c.401 0 .734-.08.998-.237a1.45 1.45 0 0 0 .595-.689c.13-.3.196-.662.196-1.084 0-.42-.065-.778-.196-1.075a1.426 1.426 0 0 0-.589-.68c-.264-.156-.599-.234-1.005-.234H3.362Zm.791.645h.563c.248 0 .45.05.609.152a.89.89 0 0 1 .354.454c.079.201.118.452.118.753a2.3 2.3 0 0 1-.068.592 1.14 1.14 0 0 1-.196.422.8.8 0 0 1-.334.252 1.298 1.298 0 0 1-.483.082h-.563v-2.707Zm3.743 1.763v1.591h-.79V11.85h2.548v.653H7.896v1.117h1.606v.638H7.896Z"
                />
              </svg>
              PDF Download
            </button>
          </div>
          <div className="report-body" id="printTable">
            <div className="print-hading">
              <h2 className="profile-heading">Department of department</h2>
            </div>
            <table id="printable" className="table table-bordered">
              <tbody>
                <tr>
                  <td className="desktop">
                    <span className="title">Report ID</span>
                  </td>
                  <td colspan="2" data-label="Report ID">
                    <span className="name">{filterUser?.report_id}</span>
                  </td>
                  <td className="desktop">
                    <span className="title">Patient Name</span>
                  </td>
                  <td colspan="2" data-label="Patient Name">
                    <span className="name">{filterUser?.patient_name}</span>
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
                    <span className="name">{filterUser?.age}</span>
                  </td>
                  <td className="desktop">
                    <span className="title">Gender</span>
                  </td>
                  <td data-label="Gender">
                    <span className="name text-capitalize">
                      {filterUser?.gender}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td colspan="6">
                    <h5>report_title: {filterUser?.report_title} </h5>

                    <p>
                      <b>Report Type :</b> {filterUser?.report_type}
                    </p>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: filterUser?.report_comment
                      }}
                    ></div>
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="signature_medical">
              <div className="signature">
                <img
                  className="img-fluid w-responsive"
                  src={`${live}/${filterUser?.preferred_doctor.profile_img
                    .replace(/\\/g, "/")
                    .replace(/\.[^/.]+$/, "")}`}
                  alt=""
                  style={{ width: "100px", height: "100px" }}
                />

                <p className="signature-report-by">
                  Reported by Electronic Signature
                </p>

                <img
                  className="img-fluid w-responsive"
                  src={`${live}/${filterUser?.preferred_doctor.doctor_sign
                    .replace(/\\/g, "/")
                    .replace(/\.[^/.]+$/, "")}`}
                  alt=""
                  style={{ width: "100px", height: "100px" }}
                />
                <p>Reported by Electronic Signature</p>

                <br />
                <h4 className="signature-doctor">
                  name: {filterUser?.preferred_doctor.name}{" "}
                </h4>

                {filterUser?.preferred_doctor.degrees.map((item) => (
                  <p key={item.id} style={{ maxWidth: "400px", width: "100%" }}>
                    <span className="signature-doctor-degree">
                      {" "}
                      {item.degree} <span>,</span>
                    </span>

                    <span className="signature-doctor-specialist">
                      {" "}
                      {item.specialized} <span>,</span>
                    </span>
                  </p>
                ))}
              </div>
              <div className="medical">
                <h4 className="signature-checked-by">
                  Checked by {filterUser?.preferred_doctor.h_name}
                </h4>
              </div>
            </div>
          </div>

          {filterUser?.length === 0 && (
            <>
              <h2 className="dont-find">You did not make this report yet !</h2>
              <Link to="#" type="reset" className="btn dont-find-btn">
                Back
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default CompleteReportView;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaPlusCircle, FaRegEdit } from "react-icons/fa";
import { GrView } from "react-icons/gr";
import Moment from "react-moment";
import { Link } from "react-router-dom";

const HospitalList = () => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const [allUser, setAllUser] = useState([]);
  const [filters, setFilters] = useState({
    name: "",
    date: "",
    userType: "all",
  });

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
  }, []);

  const filteredUserRequest = allUser.filter((user) => {
    const nameMatch = user.name
      .toLowerCase()
      .includes(filters.name.toLowerCase());
    const dateMatch =
      !filters.date ||
      new Date(user.createdAt).toISOString().split("T")[0] === filters.date;
    const userTypeMatch =
      filters.userType === "all" || user.role === filters.userType;

    return nameMatch && dateMatch && userTypeMatch;
  });

  const handleFilterChange = (filter, value) => {
    setFilters({
      ...filters,
      [filter]: value,
    });
  };

  return (
    <>
      <div className="add-new-report">
        <div className="report-body">
          <h2 className="profile-heading">Hospital List</h2>
          <div className="data-table-filter admin">
            <div className="row">
              <div className="col-12 col-lg-4">
                <div className="mb-1 mb-md-2  mb-lg-5 row">
                  <label for="h-name" className="col-sm-12 col-form-label">
                    Search Report
                  </label>
                  <div className="col-sm-12">
                    <input
                      id="by_name"
                      type="text"
                      className="form-control search"
                      onChange={(e) =>
                        handleFilterChange("name", e.target.value)
                      }
                    />
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-4">
                <div className="mb-3 mb-md-2 mb-lg-5 row">
                  <label for="h-name" className="col-sm-12 col-form-label">
                    By Status
                  </label>
                  <div className="col-sm-12">
                    <select
                      id="by_status"
                      className="form-select custom_input"
                      onChange={(e) =>
                        handleFilterChange("userType", e.target.value)
                      }
                    >
                      <option value="all">Select One</option>
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-4">
                <div className="mb-1 mb-md-2 mb-lg-5 row">
                  <label
                    for="h-name"
                    className="col-12 col-form-label opacity-0"
                  >
                    By Status
                  </label>
                  <div className="col-12 d-flex justify-content-end img-ctrl-btn align-items-center mb-3">
                    <a
                      href="/admin/add_new_hospital_page"
                      className="btn plus add-more-btn "
                    >
                      <FaPlusCircle />
                      <span className="text-white"> ADD NEW </span>{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <table id="example" className="cell-border table-responsive w-100">
            <thead className="">
              <tr>
                <th className="">
                  <span className="">User ID</span>
                </th>
                <th className="">
                  <span className="">User Name </span>
                </th>
                <th className="">
                  <span className="">Email</span>
                </th>
                <th className="">
                  <span className="">Phone</span>
                </th>
                <th className="">
                  <span className="">Status</span>
                </th>
                <th className="">
                  <span className="">Membership Date</span>
                </th>
                <th className="">
                  <span className="">Action</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredUserRequest.map((data) => (
                <tr key={data._id} className="text-center">
                  <td className="">
                    <span className="">{data._id}</span>
                  </td>
                  <td className="">
                    <span className="">{data.name}</span>
                  </td>
                  <td className="">
                    <span className="">{data.email}</span>
                  </td>
                  <td className="">
                    <span className="">
                      {data.phone ? data.phone : "Empty"}
                    </span>
                  </td>
                  <td className="">
                    <span className="">{data.status}</span>
                  </td>
                  <td className="">
                    <span className="">
                      <Moment fromNow>{data.createdAt}</Moment>
                    </span>
                  </td>
                  <td className="">
                    <span className="d-flex gap-2">
                      <Link to={`/${data._id}`} className="flex-1">
                        <FaRegEdit />
                      </Link>
                      <Link to={`/${data._id}`} className="flex-1">
                        <GrView />
                      </Link>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default HospitalList;

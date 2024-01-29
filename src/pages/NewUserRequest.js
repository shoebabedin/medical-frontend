import axios from "axios";
import React, { useEffect, useState } from "react";
import { FcApprove, FcDisapprove } from "react-icons/fc";
import Moment from "react-moment";

const NewUserRequest = () => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const [allUserRequest, setAllUserRequest] = useState([]);
  const [filters, setFilters] = useState({
    name: "",
    date: "",
    userType: "all",
  });


  const rejectRequest = (id) => {
    try {
     axios.post(`${apiKey}/user/reject-users`, { id: id });
    } catch (error) {
      console.error('Error while rejecting request:', error);
      // Handle the error appropriately
    }
  };
  
  const approveRequest = (id) => {
    try {
      axios.post(`${apiKey}/user/approve-users`, { id: id });
    } catch (error) {
      console.error('Error while approving request:', error);
    }
  };
  
  useEffect(() => {
    const getAllPendingRequest = async () => {
      try {
        const allDoctors = await axios.get(`${apiKey}/user/all-pending-users`);
        setAllUserRequest(allDoctors.data);
      } catch (error) {
        console.error('Error while fetching pending requests:', error);
      }
    };

  
    getAllPendingRequest();
  }, [rejectRequest, approveRequest]); 
  

  const filteredUserRequest = allUserRequest.filter((user) => {
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
          <h2 className="profile-heading">New User Requests</h2>
          <div className="data-table-filter admin">
            <div className="row">
              <div className="col-12 col-lg-4">
                <div className="mb-1 mb-lg-5 row">
                  <label htmlFor="h-name" className="col-sm-12 col-form-label">
                    By Name
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
                <div className="mb-1 mb-lg-5 row">
                  <label htmlFor="by_date" className="col-sm-12 col-form-label">
                    By Date
                  </label>
                  <div className="col-sm-12 position-relative">
                    <input
                      type="date"
                      className="form-control date"
                      id="by_date"
                      onChange={(e) =>
                        handleFilterChange("date", e.target.value)
                      }
                    />
                  </div>
                </div>
              </div>

              <div className="col-12 col-lg-4">
                <div className="mb-3 mb-lg-5 row">
                  <label htmlFor="h-name" className="col-sm-12 col-form-label">
                    By User Type
                  </label>
                  <div className="col-sm-12">
                    <select
                      id="by_user_type"
                      className="form-select custom_input"
                      onChange={(e) =>
                        handleFilterChange("userType", e.target.value)
                      }
                    >
                      <option value="all">Select One</option>
                      <option value="hospital">Hospital</option>
                      <option value="doctor">Doctor</option>
                    </select>
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
                  <span className="">User Type</span>
                </th>
                <th className="">
                  <span className="">Request Date</span>
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
                    <span className="">{data.role}</span>
                  </td>
                  <td className="">
                    <span className="">
                      <Moment fromNow>{data.createdAt}</Moment>
                    </span>
                  </td>
                  <td className="">
                    <span className="d-flex gap-2">
                      <button onClick={()=> approveRequest(data._id)} className="border-0 shadow-none">
                        <FcApprove />
                      </button>
                      <button className="border-0 shadow-none" onClick={() => rejectRequest(data._id)}>
                        <FcDisapprove />
                      </button>
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

export default NewUserRequest;

import React, { useState } from "react";

const AddNewDoctor = () => {
  const [degrees, setDegrees] = useState([{ degree: "", specialized: "" }]);
  const addNewDegree = () => {
    setDegrees([...degrees, { degree: "", specialized: "" }]);
  };

  const handleDegreeChange = (index, fieldName, value) => {
    const updatedDegrees = [...degrees];
    updatedDegrees[index][fieldName] = value;
    setDegrees(updatedDegrees);
  };

  const removeDegree = (index) => {
    const updatedDegrees = [...degrees];
    updatedDegrees.splice(index, 1);
    setDegrees(updatedDegrees);
  };
  return (
    <>
      <div className="add-new-report">
        <div className="report-body">
          <form className="">
            <h2 className="profile-heading">Add New Doctor</h2>

            <div className="container">
              <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-6">
                  <div className="mb-1 mb-lg-3 row">
                    <label
                      for="u_name"
                      className="col-sm-12 col-md-12 col-lg-12 col-form-label"
                    >
                      User Name *
                    </label>
                    <div className="col-sm-12 col-md-12 col-lg-12">
                      <input
                        required
                        name="u_name"
                        type="text"
                        className="form-control"
                        id="u_name"
                      />
                    </div>
                  </div>
                  <div className="mb-1 mb-lg-3 row">
                    <label
                      for="email"
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
                      />
                    </div>
                  </div>
                  <div className="mb-1 mb-lg-3 row">
                    <label
                      for="password"
                      className="col-sm-12 col-md-12 col-lg-12 col-form-label"
                    >
                      Password *
                    </label>
                    <div className="col-sm-12 col-md-12 col-lg-12">
                      <input
                        required
                        name="password"
                        type="password"
                        className="form-control"
                        id="password"
                      />
                    </div>
                  </div>
                  <div className="mb-1 mb-lg-3 row">
                    <label
                      for="phone"
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
                      />
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6">
                  <div className="mb-1 mb-lg-3 row">
                    <label
                      for="h_name"
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
                      />
                    </div>
                  </div>
                  <div className="mb-1 mb-lg-3 row">
                    <label
                      for="position"
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
                      />
                    </div>
                  </div>
                  <div className="mb-1 mb-lg-3 row">
                    <label
                      for="regNo"
                      className="col-sm-12 col-md-12 col-lg-12 col-form-label"
                    >
                      BMDC Reg No *
                    </label>
                    <div className="col-sm-12 col-md-12 col-lg-12">
                      <input
                        required
                        name="regNo"
                        type="number"
                        className="form-control appearance-none"
                        id="regNo"
                      />
                    </div>
                  </div>
                  <div className="mb-1 mb-lg-3 row">
                    <label
                      for="profileImage"
                      className="col-sm-12 col-md-12 col-lg-12 col-form-label"
                    >
                      Profile Image
                    </label>
                    <div className="col-sm-12 col-md-12 col-lg-12">
                      <input
                        required
                        name="profileImage"
                        type="file"
                        className="form-control"
                        id="profileImage"
                      />
                    </div>
                  </div>
                  <div className="mb-1 mb-lg-3 row">
                    <label
                      for="drSign"
                      className="col-sm-12 col-md-12 col-lg-12 col-form-label"
                    >
                      Dotor's Sign
                    </label>
                    <div className="col-sm-12 col-md-12 col-lg-12">
                      <input
                        required
                        name="drSign"
                        type="file"
                        className="form-control"
                        id="drSign"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-12 profile-btn">
                  <button className="btn btn-warning mb-3" onClick={addNewDegree}>
                    Add Degree
                  </button>
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
                    <button onClick={window.history.back()} className="btn cancel">
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

export default AddNewDoctor;

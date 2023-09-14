import React from "react";

const ReportFormatView = () => {
  return (
    <>
      <div className="profile">
        <a
          href="{{ url()->previous() }}"
          className="btn mb-3 mb-lg-5 btn-success"
        >
          Back
        </a>
        <div className="profile-body-main">
          <h2 className="profile-title text-center">Formate view for #id</h2>

          {/* <h2 className="profile-title text-center">
            No formate avaiable for this report
          </h2> */}

          <div className="row">
            <div className="col-12">formate_details</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReportFormatView;

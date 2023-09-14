import React from "react";

const ForgotPassword = () => {
  return (
    <>
      <div className="auth">
          <h6 className="auth_title text-center">
            Forgot your password? No problem. Just let us know your email address
            and we will email you a password reset link that will allow you to
            choose a new one.
          </h6>
          {/* <!-- Session Status --> */}
          <span className="mb-4" />
          <form >
            {/* <!-- Email Address --> */}
            <div>
              <label for="email" className="me-2">Email</label>
              <input
                id="email"
                className="block mt-1 w-full form-control"
                type="email"
                name="email"
                required
              />
              <span className="mt-2" ></span>
            </div>
            <div className="mt-4">
              <button type="submit" className="btn">Reset</button>
            </div>
          </form>
      </div>
    </>
  );
};

export default ForgotPassword;

import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { LoginUser } from "../feature/users/authSlice";
import { login } from "../validation";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const apiKey = process.env.REACT_APP_API_KEY;

  const initialValues = {
    email: "",
    password: ""
  };
  const signin = async () => {
    try {
      let { data } = await axios.post(`${apiKey}/auth/login`, {
        email: formik.values.email,
        password: formik.values.password
      });
      console.log(data);
      toast(data.error);
      toast(data.success);
      if (data.success) {
        window.location.replace("/");
        localStorage.setItem("User", JSON.stringify(data));
        dispatch(LoginUser(data));
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: login,
    onSubmit: async (data) => {
      signin();
    }
  });
  return (
    <>
      <section className="auth">
        <form className="bg-white" onSubmit={formik.handleSubmit}>
          <h2 className="auth_title">Sign In</h2>

          {/* <!-- Email Address --> */}
          <div>
            <label htmlFor="email">Email</label>
            <input
              placeholder="Email"
              className="form-control custom_input"
              id="email"
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              required
            />
            {formik.touched.email && formik.errors.email ? (
              <p>{formik.errors.email}</p>
            ) : null}
          </div>

          {/* <!-- Password --> */}
          <div className="mt-4">
            <label htmlFor="password">Password</label>
            <input
              placeholder="Password"
              id="password"
              className="form-control custom_input"
              type="password"
              name="password"
              required
              value={formik.values.password}
              onChange={formik.handleChange}
            />

            {formik.touched.password && formik.errors.password ? (
              <p>{formik.errors.password}</p>
            ) : null}
          </div>

          <Link
            to="/forgot-password"
            className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500  d-block"
          >
            Forgot your password?
          </Link>

          <button type="submit" className="btn w-100">
            Sign In
          </button>
          <Link
            to="/signup"
            className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 d-block"
          >
            If you not have a account you can create
          </Link>
        </form>
      </section>
    </>
  );
};

export default Login;

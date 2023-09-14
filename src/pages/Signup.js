import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { signup } from "../validation";

const Signup = () => {
  const navigate = useNavigate();
  // const [preview, setPreview] = useNavigate();
  const apiKey = process.env.REACT_APP_API_KEY;

  const initialValues = {
    role: "",
    name: "",
    email: "",
    password: ""
  };

  const registration = async () => {
    try {
      let { data } = await axios.post(`${apiKey}/auth/signup`, {
        role: formik.values.role,
        name: formik.values.name,
        email: formik.values.email,
        password: formik.values.password
      });
      console.log(data);
      toast(data.error);
      toast(data.success);
      if (data.success) {
        window.location.replace("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: signup,
    onSubmit: async () => {
      registration();
      console.log(registration());
    }
  });
  return (
    <>
      <section className="auth">
        <form onSubmit={formik.handleSubmit}>
          <h2 className="auth_title">Sign up</h2>
          <div className="mb-3">
            <select
              name="role"
              id="disabledSelect"
              className="form-select custom_input"
              defaultValue={formik.values.role}
              onChange={formik.handleChange}
            >
              <option>Select Option</option>
              <option value="hospital">Hospital</option>
              <option value="doctor">Doctor</option>
            </select>

            {formik.touched.role && formik.errors.role ? (
              <p>{formik.errors.role}</p>
            ) : null}
          </div>
          {/* <!-- Name --> */}
          <div>
            <input
              placeholder="Name"
              id="name"
              className="form-control custom_input"
              type="text"
              name="name"
              required
              value={formik.values.name}
              onChange={formik.handleChange}
            />
            {formik.touched.name && formik.errors.name ? (
              <p>{formik.errors.name}</p>
            ) : null}
          </div>

          {/* <!-- Email Address --> */}
          <div className="mt-4">
            <input
              placeholder="Email"
              id="email"
              className="form-control custom_input"
              type="email"
              name="email"
              required
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            {formik.touched.email && formik.errors.email ? (
              <p>{formik.errors.email}</p>
            ) : null}
          </div>

          {/* <!-- Password --> */}
          <div className="mt-4">
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

          <div className="flex items-center  mt-4">
            <Link
              className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              to="/login"
            >
              Already registered?
            </Link>

            <button type="submit" className="btn d-block w-100">
              Sign Up
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Signup;

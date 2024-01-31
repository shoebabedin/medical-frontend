import * as Yup from "yup";

export const login = Yup.object({
  email: Yup.string()
    .email("Invalid email")
    .required("please Enter a valid email"),
  password: Yup.string().min(3).required("please Enter a valid password")
});

export const signup = Yup.object({
  role: Yup.string().required("Please enter a role"),
  name: Yup.string().min(3).required("Please enter your name"),
  email: Yup.string()
    .email("Invalid email")
    .required("please Enter a valid email"),
  password: Yup.string().min(3).required("please Enter a valid password")
});

export const addDoctorValidation = Yup.object().shape({
  name: Yup.string()
    .min(3, "Please enter at least 3 characters")
    .required("Please enter your name"),

  email: Yup.string()
    .email("Invalid email")
    .required("Please enter a valid email"),

  password: Yup.string()
    .min(3, "Please enter at least 3 characters")
    .required("Please enter a valid password"),

  phone: Yup.string()
    .min(3, "Please enter at least 3 characters")
    .required("Please enter a valid phone number"),

  h_name: Yup.string()
    .min(3, "Please enter at least 3 characters")
    .required("Please enter a valid hospital name"),

  position: Yup.string()
    .min(3, "Please enter at least 3 characters")
    .required("Please enter a valid position"),

  bmdcRegNo: Yup.string()
    .min(3, "Please enter at least 3 characters")
    .required("Please enter a valid BMDC registration number"),
  profile_img: Yup.mixed().required("Please provide a profile image"),
  doctor_sign: Yup.mixed().required("Please provide a doctor's sign")
});

export const addHospitalValidation = Yup.object().shape({
  name: Yup.string()
    .min(3, "Please enter at least 3 characters")
    .required("Please enter your name"),
  email: Yup.string()
    .email("Invalid email")
    .required("Please enter a valid email"),
  password: Yup.string()
    .min(3, "Please enter at least 3 characters")
    .required("Please enter a valid password"),
  phone: Yup.string()
    .min(3, "Please enter at least 3 characters")
    .required("Please enter a valid phone number"),
  address: Yup.string()
    .min(3, "Please enter at least 3 characters")
    .required("Please enter a valid address"),
  map_location: Yup.string()
    .min(3, "Please enter at least 3 characters")
    .required("Please enter a valid map location"),
  hospital_img: Yup.mixed().required("Please provide a profile image")
});

export const addReportValidation = Yup.object().shape({
  date: Yup.string().required("Please enter a valid date"),
  report_title:  Yup.string().min(3, "Please enter at least 3 characters").required("Please enter a valid report title"),
  patient_name:  Yup.string().min(3, "Please enter at least 3 characters").required("Please enter a valid patient name"),
  preferred_doctor:  Yup.string().min(3, "Please enter at least 3 characters").required("Please enter a valid preferred doctor"),
  gender:  Yup.string().min(3,"Please enter at least 3 characters").required("please enter a valid gender"),
  department:  Yup.string().min(3, "Please enter at least 3 characters").required("Please enter a valid department name"),
  report_type:  Yup.string().min(3, "Please enter at least 3 characters").required("Please enter a valid report type"),
  report_id:  Yup.string().min(3, "Please enter at least 3 characters").required("Please enter a valid report id"),
  age:  Yup.string().min(2, "Please enter at least 3 character").required("please enter a valid age"),
  report_image: Yup.string().nullable().required("please enter a valid report") 
});

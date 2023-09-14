import * as Yup from "yup"


export const login = Yup.object({
    email: Yup.string().email("Invalid email").required("please Enter a valid email"),
    password: Yup.string().min(3).required("please Enter a valid password"),
})


export const signup = Yup.object({
    role: Yup.string().required("Please enter a role"),
    name: Yup.string().min(3).required("Please enter your name"),
    email: Yup.string().email("Invalid email").required("please Enter a valid email"),
    password: Yup.string().min(3).required("please Enter a valid password"),
})
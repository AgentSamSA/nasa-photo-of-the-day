import * as yup from "yup";

export default yup.object().shape({
    year: yup
    .string()
    .required("Please select a year"),
    month: yup
    .string()
    .required("Please select a month"),
    day: yup
    .string()
    .required("Please select a valid date"),
})
// libraries
import * as Yup from "yup";

const validateVetSchema = Yup.object().shape({
  name: Yup.string().min(2).max(50).required(),
  picture: Yup.string().required(),
  phone_number: Yup.string()
    .matches(/^[+]923\d{9}$|^03\d{9}$/)
    .required(),
  experience: Yup.string().required(),
});

const intialStateVet = {
  name: "",
  picture: "",
  phone_number: "",
  experience: "",
};

export { intialStateVet, validateVetSchema };

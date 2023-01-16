// libraries
import * as Yup from "yup";

const validateLoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required(),
});

const intialStateLogin = {
  email: "",
  password: "",
};

export { intialStateLogin, validateLoginSchema };

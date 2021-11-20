import * as Yup from "yup";
import { withFormik, FormikProps, Form } from "formik";

import InputField from "src/components/shared/InputField";

// Shape of form values
interface FormValues {
  username: string;
  email: string;
  password: string;
}

interface OtherProps {
  message: string;
}

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

const InnerRegisterForm = (props: OtherProps & FormikProps<FormValues>) => {
  const { isSubmitting, message } = props;
  return (
    <Form>
      <h1>{message}</h1>
      <InputField
        type="text"
        name="username"
        label="Email"
        className="border-rounded w-full py-2 px-4 outline-none leading-tight text-gray-700 shadow appearance-none focus:outline-none focus:shadow-outline"
      />

      <InputField
        type="email"
        name="email"
        label="Email"
        className="border-rounded w-full py-2 px-4 outline-none leading-tight text-gray-700 shadow appearance-none focus:outline-none focus:shadow-outline"
      />

      <InputField
        name="password"
        placeholder="*******"
        label="Password"
        type="password"
        className="border-rounded w-full py-2 px-4 outline-none leading-tight text-gray-700 shadow appearance-none focus:outline-none focus:shadow-outline"
      />

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
      >
        Submit
      </button>
    </Form>
  );
};

// The type of props MyForm receives
interface MyFormProps {
  initialEmail?: string;
  initialUsername?: string;
  message: string; // if this passed all the way through you might do this or make a union type
}

const RegisterForm = withFormik<MyFormProps, FormValues>({
  mapPropsToValues: (props) => {
    return {
      email: props.initialEmail || "",
      username: props.initialUsername || "",
      password: "",
    };
  },
  validationSchema: validationSchema,

  handleSubmit: (values) => {
    // do submitting things
    console.log(values);
  },
})(InnerRegisterForm);

export default RegisterForm;

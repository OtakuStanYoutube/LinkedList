import * as Yup from "yup";
import { withFormik, FormikProps, Form, Field } from "formik";

import InputField from "src/components/shared/InputField";

// Shape of form values
interface FormValues {
  email: string;
  password: string;
}

interface OtherProps {
  message: string;
}

const validationSchema = Yup.object({
  email: Yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: Yup
    .string()
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

const InnerForm = (props: OtherProps & FormikProps<FormValues>) => {
  const { isSubmitting, message } = props;
  return (
    <Form>
      <h1>{message}</h1>
      <Field type="email" name="email" component={InputField} />

      <Field type="password" name="password" component={InputField}/>

      <button type="submit" disabled={isSubmitting}>
        Submit
      </button>
    </Form>
  );
};

// The type of props MyForm receives
interface MyFormProps {
  initialEmail?: string;
  message: string; // if this passed all the way through you might do this or make a union type
}

const LoginForm = withFormik<MyFormProps, FormValues>({
  mapPropsToValues: (props) => {
    return {
      email: props.initialEmail || "",
      password: "",
    };
  },
  validationSchema: validationSchema,

  handleSubmit: (values) => {
    // do submitting things
    console.log(values);
  },
})(InnerForm);

export default LoginForm;

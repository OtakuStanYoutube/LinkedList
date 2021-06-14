import { emailRegEx } from "../constants";

export const validateLoginInput = (email: string, password: string) => {
  type loginErrors = {
    email: string;
    password: string;
  };
  const errors: loginErrors = {
    email: "",
    password: "",
  };

  if (email.trim() === "") {
    errors.email = "Email cannot be empty";
  } else {
    if (!email.match(emailRegEx)) {
      errors.email = "Invalid Email";
    }
  }

  if (password.trim() === "") {
    errors.password = "Password cannot be empty";
  }

  return {
    errors,
    valid: errors.email === "" && errors.password === "",
  };
};

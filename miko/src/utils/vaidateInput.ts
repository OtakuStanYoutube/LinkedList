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

export const validateRegisterInput = (
  username: string,
  email: string,
  password: string,
) => {
  type registerErrors = {
    username: string;
    email: string;
    password: string;
  };
  const errors: registerErrors = {
    username: "",
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

  if (username.trim() === "") {
    errors.username = "username can't be empty";
  } else {
    if (!username.match(emailRegEx)) {
      errors.username = "Invalid Username";
    }
  }

  return {
    errors,
    valid:
      errors.email === "" && errors.password === "" && errors.username === "",
  };
};

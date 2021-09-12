import { isEmpty } from 'class-validator';
import { emailRegEx, usernameRegEx } from "../constants";

export const validateLoginInput = (email: string, password: string) => {
  type loginErrors = {
    email: string;
    password: string;
  };
  const errors: loginErrors = {
    email: "",
    password: "",
  };

  if (isEmpty(email)) {
    errors.email = "Email cannot be empty";
  } else {
    if (!email.match(emailRegEx)) {
      errors.email = "Invalid Email";
    }
  }

  if (isEmpty(password)) {
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

  if (isEmpty(email)) {
    errors.email = "Email cannot be empty";
  } else {
    if (!email.match(emailRegEx)) {
      errors.email = "Invalid Email";
    }
  }

  if (isEmpty(password)) {
    errors.password = "Password cannot be empty";
  }

  if (isEmpty(username)) {
    errors.username = "username can't be empty";
  } else {
    if (!username.match(usernameRegEx)) {
      errors.username = "Invalid Username";
    }
  }

  return {
    errors,
    valid:
      errors.email === "" && errors.password === "" && errors.username === "",
  };
};

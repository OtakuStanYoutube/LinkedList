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
  }

  if (password.trim() === "") {
    errors.password = "Password cannot be empty";
  }
};

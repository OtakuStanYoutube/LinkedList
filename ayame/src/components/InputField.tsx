import { InputHTMLAttributes, FC } from "react";
import { useField } from "formik";

import { TextField, InputAdornment, FormControlLabel } from "@material-ui/core";

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  name: string;
  textarea?: boolean;
};

const InputField: FC<InputFieldProps> = ({
  label,
  textarea,
  size: _,
  ...props
}) => {
  const [field, { error }] = useField(props);
  return (
    <div className="mb-4">
      <TextField
        fullWidth
        autoComplete="username"
        id={field.name}
        {...field}
        // {...props}
        variant="standard"
        error={error ? true : false}
        helperText={error}
      />
    </div>
  );
};

export default InputField;

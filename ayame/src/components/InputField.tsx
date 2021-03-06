import { InputHTMLAttributes, FC } from "react";
import { useField } from "formik";

import { TextField } from "@material-ui/core";

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  name: string;
  textarea?: boolean;
};

const InputField: FC<InputFieldProps> = ({
  label,
  textarea,
  size: _,
  color: __,
  ...props
}) => {
  const [field, { error }] = useField(props);
  return (
    <div className="mb-4 w-full">
      <TextField
        id={field.name}
        label={field.name}
        className="border-rounded w-full py-2 px-4 outline-none leading-tight text-gray-700 shadow appearance-none focus:outline-none focus:shadow-outline"
        {...field}
        {...props}
        error={!!error}
        helperText={error}
        variant="outlined"
      />
    </div>
  );
};

export default InputField;

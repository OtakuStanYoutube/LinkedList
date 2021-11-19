import { DetailedHTMLProps, InputHTMLAttributes, FC } from "react";
import { useField } from "formik";

import { TextField } from "@material-ui/core";

type InputFieldProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
  label: string;
  name: string;
  textarea?: boolean;
};

const InputField: FC<InputFieldProps> = ({
  label,
  textarea,
  size: _,
  color: __,
  ref: ___,
  className,
  ...props
}) => {
  const [field, { error }] = useField(props);
  return (
    <div className="mb-4 w-full">
      <TextField
        id={field.name}
        label={field.name}
        className={className}
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

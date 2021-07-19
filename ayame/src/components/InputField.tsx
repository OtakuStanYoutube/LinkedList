import { InputHTMLAttributes, FC } from "react";
import { useField } from "formik";

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
    <div className="mb-4 w-full">
      <label
        className="block mb-2 text-sm font-bold text-gray-700"
        htmlFor={field.name}
      >
        {field.name}
      </label>
      <input
        className="border-rounded w-full py-2 px-4 outline-none leading-tight text-gray-700 shadow appearance-none focus:outline-none focus:shadow-outline"
        id={field.name}
        {...field}
        {...props}
        // placeholder="******************"
      />
      {error ? <p className="text-xs italic text-red-500">{error}</p> : null}
    </div>
  );
};

export default InputField;

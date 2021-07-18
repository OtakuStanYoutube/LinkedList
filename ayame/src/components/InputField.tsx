import React, { InputHTMLAttributes } from "react";
import { useField } from "formik";

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  name: string;
  textarea?: boolean;
};

export const InputField: React.FC<InputFieldProps> = ({
  label,
  textarea,
  size: _,
  ...props
}) => {
  const [field, { error }] = useField(props);
  return (
    <div className="mb-4">
      <label
        className="block mb-2 text-sm font-bold text-gray-700"
        htmlFor={field.name}
      >
        {field.name}
      </label>
      <input
        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
        id={field.name}
        {...field}
        {...props}
        // placeholder="******************"
      />
      {error ? <p className="text-xs italic text-red-500">{error}</p> : null}
    </div>
  );
};

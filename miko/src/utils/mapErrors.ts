import { ValidationError } from "class-validator";

export const mapErrors = (errors: ValidationError[]) => {
  return errors.reduce((prev: any, err: any) => {
    const [[, errorProperty]] = Object.entries(err.constraints);

    prev[err.property] = errorProperty;

    return prev;
  }, {});
};

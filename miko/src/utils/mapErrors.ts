export const mapErrors = (errors: Object[]) => {
  return errors.reduce((prev: any, err: any) => {
    const [[, errorProperty]] = Object.entries(err.constraints);

    prev[err.property] = errorProperty;

    return prev;
  }, {});
};

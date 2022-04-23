export const { REACT_APP_API_BASE } = process.env;

export const { NODE_ENV } = process.env;

if (REACT_APP_API_BASE === undefined)
  throw new Error(
    "The environment variable REACT_APP_API_BASE must be configured."
  );

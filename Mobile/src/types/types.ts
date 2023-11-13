export interface Values {
  type: string;
  name: string;
  placeholder: string;
}

export interface FormikValues {
  image: string;
  name: string;
  number: string;
  email: string;
  password: string;
}

export interface FormikProps {
  handleChange?: any;
  handleBlur?: (field: string) => any;
  handleSubmit?: () => void;
  values?: FormikValues;
  errors?: Record<string, string>;
  touched?: Record<string, boolean>;
}

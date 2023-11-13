import { FormikErrors, FormikTouched, FormikValues } from "formik";

export interface Values {
  type: string;
  name: string;
  placeholder: string;
}

export interface FormikProps {
  handleChange: (e: React.ChangeEvent<any>) => void;
  values: FormikValues;
  errors: FormikErrors<FormikValues>;
  touched: FormikTouched<FormikValues>;
}

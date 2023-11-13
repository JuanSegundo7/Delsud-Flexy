import { FormikTouched, FormikErrors } from "formik";

export const hasErrors = (
  touched: FormikTouched<{ [key: string]: any }>,
  errors: FormikErrors<{ [key: string]: any }>
) => {
  const fieldNames = Object.keys(touched) as Array<keyof typeof touched>;

  for (const fieldName of fieldNames) {
    if (touched[fieldName] && errors[fieldName]) {
      return true;
    }
  }
  return false;
};

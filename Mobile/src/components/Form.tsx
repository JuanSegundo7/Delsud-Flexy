import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import Button from "./Button";
import Upload from "./Upload";
import Password from "./Password";
import formValues from "../utils/values";
import ValidationSchema from "../utils/validation";
import { Formik } from "formik";
import { FormikValues, Values } from "../types/types";

const Form = () => {
  const [send, setSend] = useState(false);

  const handleFormSubmit = (values) => {
    setSend(true);
    console.log("Form submitted with values:", values);
  };

  return (
    <View style={styles.container}>
      <Formik<FormikValues>
        initialValues={{
          image: "",
          name: "",
          number: "",
          email: "",
          password: "",
        }}
        validationSchema={ValidationSchema}
        onSubmit={handleFormSubmit}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <>
            <Upload
              handleChange={handleChange}
              values={values}
              errors={errors}
              touched={touched}
            />
            {formValues.map((formValues: Values, i: number) => (
              <View key={i}>
                <TextInput
                  style={[
                    styles.input,
                    touched[formValues.name] && errors[formValues.name]
                      ? styles.error_border
                      : values[formValues.name]
                      ? styles.sucess_border
                      : null,
                  ]}
                  keyboardType={formValues.type as any}
                  placeholder={formValues.placeholder}
                  placeholderTextColor="#7C8093"
                  value={values[formValues.name]}
                  onChangeText={handleChange(formValues.name)}
                  onBlur={handleBlur(formValues.name)}
                />
                {touched[formValues.name] && errors[formValues.name] && (
                  <Text style={styles.error}>
                    {errors[formValues.name] as string}
                  </Text>
                )}
              </View>
            ))}
            <Password
              handleBlur={handleBlur}
              handleChange={handleChange}
              values={values}
              errors={errors}
              touched={touched}
            />
            <TouchableOpacity>
              <Text style={styles.forgot}>¿Olvidaste tu contraseña?</Text>
            </TouchableOpacity>
            <Button
              handleSubmit={handleSubmit}
              touched={touched}
              errors={errors}
              send={send}
            />
            <TouchableOpacity style={styles.text_gap}>
              <Text style={styles.have_account}>¿Ya tenés una cuenta?</Text>
              <Text style={styles.sign_in}>Iniciá sesión</Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 24,
  },

  input: {
    width: 327,
    height: 48,
    fontSize: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
    lineHeight: 24,
    borderRadius: 8,
    backgroundColor: "#F7F7FD",
    borderColor: "#E0DEF7",
    borderWidth: 1,
    color: "#7C8093",
  },

  forgot: {
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 20,
    letterSpacing: 0,
    textAlign: "right",
    color: "#7065F0",
  },

  button: {
    width: 327,
    height: 48,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    borderWidth: 0,
    borderColor: "transparent",
    backgroundColor: "#7065F0",
    color: "#fff",
    textAlign: "center",
    lineHeight: 24,
    fontWeight: "700",
    fontSize: 16,
    transition: "0.3s all",
    cursor: "pointer",
  },

  text_gap: {
    width: 327,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 3,
  },

  have_account: {
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 20,
    letterSpacing: 0,
    textAlign: "center",
    color: "#6C727F",
  },

  sign_in: {
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 20,
    letterSpacing: 0,
    textAlign: "center",
    color: "#000929",
  },

  error: {
    fontSize: 14,
    color: "#D0342C",
    position: "absolute",
    top: 48,
  },

  error_border: {
    borderWidth: 1,
    borderColor: "#D0342C",
  },

  sucess_border: {
    borderWidth: 1,
    borderColor: "#09c372",
  },
});

export default Form;

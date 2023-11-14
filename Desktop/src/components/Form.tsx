import React, { useState } from "react";
import styles from "../styles/Form.module.css";
import Image from "next/image";
import Open_eye from "../assets/open-eye.png";
import Closed_eye from "../assets/closed-eye.png";
import Upload from "./Upload";
import { useFormik } from "formik";
import validationSchema from "../utils/validation";
import values from "../utils/values";
import { Values } from "@/types/types";
import { hasErrors } from "@/utils/hasError";

const Form = () => {
  const [open, setOpen] = useState(true);
  const [send, setSend] = useState(false);
  const eye = open ? Open_eye : Closed_eye;

  const formik = useFormik({
    initialValues: {
      image: "",
      name: "",
      number: "",
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setSend(true);
      console.log("Form submitted with values:", values);
    },
  });

  return (
    <article>
      <form className={styles.form} onSubmit={formik.handleSubmit}>
        <Upload
          errors={formik.errors}
          touched={formik.touched}
          handleChange={formik.handleChange}
          values={formik.values}
        />
        {values.map((value: Values, i: number) => (
          <div className={styles.input_container} key={i}>
            <input
              type={value.type}
              placeholder={value.placeholder}
              id={value.name}
              name={value.name}
              onChange={(e) => {
                formik.handleChange(e);
              }}
              onBlur={formik.handleBlur}
              value={formik.values[value.name as keyof typeof formik.values]}
              className={`${styles.input} ${
                formik.touched[value.name as keyof typeof formik.values] &&
                formik.errors[value.name as keyof typeof formik.values]
                  ? styles.error_border
                  : formik.values[value.name as keyof typeof formik.values]
                  ? styles.sucess_border
                  : ""
              }`}
            />
            {formik.touched[value.name as keyof typeof formik.values] &&
            formik.errors[value.name as keyof typeof formik.values] ? (
              <p className={styles.error}>
                {formik.errors[value.name as keyof typeof formik.values]}
              </p>
            ) : null}
          </div>
        ))}
        <div className={styles.password_container}>
          <input
            type={open ? "password" : "text"}
            placeholder="Ingresá tu contraseña"
            id="password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            className={`${styles.input} ${
              formik.touched.password && formik.errors.password
                ? styles.error_border
                : formik.values.password
                ? styles.sucess_border
                : ""
            }`}
          />
          <Image
            src={eye}
            alt="Dynamic Image"
            className={styles.eye}
            onClick={() => setOpen(!open)}
          />
          {formik.touched.password && formik.errors.password ? (
            <p className={styles.error}>{formik.errors.password}</p>
          ) : null}
        </div>
        <p id="mobile-visible" className={styles.forgot}>
          ¿Olvidaste tu contraseña?
        </p>
        <button
          type="submit"
          onClick={() => {
            formik.handleSubmit();
          }}
          className={
            !send && hasErrors(formik.touched, formik.errors)
              ? styles.button_error
              : send && Object.keys(formik.errors).length === 0
              ? styles.button_sucess
              : styles.button
          }
        >
          {send && Object.keys(formik.errors).length === 0
            ? "Enviado"
            : !send && hasErrors(formik.touched, formik.errors)
            ? "Error"
            : "Registrate"}
        </button>

        <div>
          <p className={styles.have_account}>
            ¿Ya tenés una cuenta?
            <span className={styles.sign_in}>Iniciá sesión</span>
          </p>
        </div>
      </form>
    </article>
  );
};

export default Form;

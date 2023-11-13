import React from "react";
import Icon from "../assets/icon.png";
import Image from "next/image";
import styles from "../styles/Form.module.css";
import { FormikProps } from "@/types/types";

const Upload = ({ errors, handleChange, values, touched }: FormikProps) => {
  return (
    <div id={styles.Upload_container}>
      <Image
        src={Icon}
        alt="upload"
        className={
          touched.image && errors.image
            ? styles.error_image
            : values.image
            ? styles.sucess_image
            : ""
        }
      />
      <p className={styles.upload}>Subí tu foto de perfil</p>
      <input
        type="file"
        id="image"
        name="image"
        onChange={handleChange}
        value={values.image}
      />
      {touched.image && errors.image ? (
        <p className={styles.error_text_image}>{errors.image as string}</p>
      ) : null}
    </div>
  );
};

export default Upload;

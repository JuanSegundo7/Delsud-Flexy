import { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Text,
  StyleSheet,
} from "react-native";
import { FormikProps } from "../types/types";
import { globalStyles } from "../utils/global";
const Open_eye = require("../assets/open-eye.png");
const Closed_eye = require("../assets/closed-eye.png");

const Password = ({
  handleBlur,
  handleChange,
  values,
  errors,
  touched,
}: FormikProps) => {
  const [open, setOpen] = useState(true);
  return (
    <View>
      <View style={styles.passwordContainer}>
        <TextInput
          style={[
            globalStyles.input,
            touched.password && errors.password
              ? globalStyles.error_border
              : values.password
              ? globalStyles.sucess_border
              : null,

            ,
          ]}
          secureTextEntry={open}
          placeholder="Ingresá tu contraseña"
          onChangeText={handleChange("password")}
          onBlur={handleBlur("password")}
          value={values.password}
        />
        <TouchableOpacity style={styles.eye} onPress={() => setOpen(!open)}>
          <Image source={open ? Open_eye : Closed_eye} style={styles.eyeIcon} />
        </TouchableOpacity>
      </View>
      {touched.password && errors.password ? (
        <Text style={globalStyles.error}>{errors.password}</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  passwordContainer: {
    flexDirection: "row",
  },

  eye: {
    position: "absolute",
    height: 25,
    width: 25,
    top: "30%",
    right: 16,
  },

  eyeIcon: {
    height: 20,
    width: "auto",
  },
});

export default Password;

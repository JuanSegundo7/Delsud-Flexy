import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { hasErrors } from "../utils/hasError";
import { globalStyles } from "../utils/global";

const Button = ({ handleSubmit, touched, errors, send }: any) => {
  return (
    <TouchableOpacity
      style={
        !send && hasErrors(touched, errors)
          ? globalStyles.button_error
          : send && Object.keys(errors).length === 0
          ? globalStyles.button_success
          : globalStyles.button
      }
      onPress={() => handleSubmit()}
    >
      <Text style={styles.text}>
        {send && Object.keys(errors).length === 0
          ? "Enviado"
          : !send && hasErrors(touched, errors)
          ? "Error"
          : "Registrate"}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    lineHeight: 24,
    fontWeight: "700",
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
  },
});

export default Button;

import { StyleSheet, Text, View, ScrollView } from "react-native";
import Form from "../components/Form";

const Login = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>¡Bienvenido!</Text>
        <Text style={styles.subtitle}>
          Convertite ahora en un agente Flexy.
        </Text>
        <Form />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 62,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },

  title: {
    // fontFamily: "PlusJakartaSans-Regular",
    fontSize: 32,
    fontWeight: "700",
    lineHeight: 40,
    letterSpacing: -0.01,
    textAlign: "center",
  },

  subtitle: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 24,
    letterSpacing: 0,
    textAlign: "center",
    color: "#808494",
    opacity: 0.5,
  },
});

export default Login;

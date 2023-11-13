import React from "react";
import { View, StyleSheet, Image } from "react-native";
const Logo = require("../assets/logo.png");

const Loader = () => {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  logo: {
    width: 208,
    height: 60,
  },
});
export default Loader;

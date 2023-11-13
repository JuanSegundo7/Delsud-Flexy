import { StyleSheet, Text, View, Image } from "react-native";
const Logo = require("../assets/logo.png");
const Menu = require("../assets/menu.png");

const Header = () => {
  return (
    <View style={styles.header}>
      <Image source={Logo} width={99} height={99} style={styles.logo} />
      <Image source={Menu} width={99} height={99} style={styles.menu} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 72,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 2,
    borderBottomColor: "#F0EFFB",
    paddingHorizontal: 24,
  },

  logo: {
    width: 104,
    height: 30,
  },

  menu: {
    width: 24,
    height: 24,
  },
});

export default Header;

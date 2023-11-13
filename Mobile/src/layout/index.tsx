import React from "react";
import { View, StyleSheet } from "react-native";
import Header from "../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";

interface Layout {
  children: React.ReactNode;
}

const Layout: React.FC<Layout> = ({ children }) => {
  return (
    <SafeAreaView style={styles.flex}>
      <View style={styles.container}>
        <Header />
        <View style={styles.main}>{children}</View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },

  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "stretch",
    backgroundColor: "#fff",
  },

  main: {
    flex: 1,
    paddingHorizontal: 24,
    flexDirection: "column",
  },
});

export default Layout;

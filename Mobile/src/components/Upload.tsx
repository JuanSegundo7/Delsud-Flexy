import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
const Icon = require("../assets/icon.png");

const Upload = ({ handleChange, values, errors, touched }) => {
  const handleImagePick = async () => {
    const res = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!res.canceled) handleChange("image")(res.assets[0].uri);
  };

  return (
    <View style={styles.container}>
      <>
        <TouchableOpacity
          onPress={handleImagePick}
          style={styles.upload_container}
        >
          <Image
            source={Icon}
            style={[
              styles.upload_image,
              touched.image && errors.image ? styles.error_border : null,
              values.image ? styles.sucess_border : null,
            ]}
          />
          <Text style={styles.upload_text}>Subí tu foto de perfil</Text>
        </TouchableOpacity>
        {touched.image && errors.image ? (
          <Text style={styles.error}>{errors.image}</Text>
        ) : null}
      </>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 327,
    display: "flex",
    justifyContent: "flex-start",
  },

  upload_text: {
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 22,
    letterSpacing: 0,
    textAlign: "left",
  },

  upload_container: {
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    gap: 9,
  },

  upload_image: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },

  error: {
    fontSize: 14,
    color: "#D0342C",
    position: "absolute",
    top: 28,
    left: 50,
  },

  error_border: {
    borderWidth: 1,
    borderColor: "#D0342C",
    borderRadius: 99,
  },

  sucess_border: {
    borderWidth: 1,
    borderColor: "#09c372",
    borderRadius: 99,
  },
});

export default Upload;

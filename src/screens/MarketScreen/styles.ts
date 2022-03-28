import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
  },

  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    marginTop: 30,
  },

  label: {
    fontSize: 25,
    alignItems: "center",
    color: "black",
    fontWeight: "bold",
  },
});

export default styles;

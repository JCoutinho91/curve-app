import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
  },

  image: {
    width: 400,
    height: 400,
    backgroundColor: "#12229D",
    resizeMode: "contain",
  },

  balanceContainer: {
    width: "100%",
  },

  label: {
    fontSize: 20,
    color: "black",
  },

  balance: {
    fontSize: 35,
    color: "green",
    fontWeight: "bold",
  },
});

export default styles;

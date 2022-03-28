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

  balanceContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    width: "100%",
  },

  label: {
    fontSize: 20,
    alignItems: "center",
    color: "black",
  },

  balance: {
    fontSize: 40,
    color: "black",
    fontWeight: "bold",
  },
});

export default styles;

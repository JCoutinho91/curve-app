import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 60,
    width: "100%",
    margin: 5,
  },

  image: {
    height: 50,
    width: 50,
    marginRight: 10,
  },

  left: {
    flexDirection: "row",
    alignItems: "center",
  },

  name: {
    fontWeight: "bold",
    fontSize: 20,
  },
  symbol: {
    color: "grey",
  },

  valueUSD: {
    fontSize: 20,
    fontWeight: "bold",
  },
  amount: {
    color: "grey",
  },
});

export default styles;

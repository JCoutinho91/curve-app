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

  netWorth: {
    fontSize: 20,
    fontWeight: "bold",
  },

  place: {
    fontSize: 18,
    width: 20,
  },
});

export default styles;

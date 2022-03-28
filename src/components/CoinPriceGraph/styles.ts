import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: "white",
  },
  topContainer: {
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

  valueUSD: {
    fontSize: 20,
    fontWeight: "bold",
  },
  amount: {
    color: "grey",
  },

  symbol: {
    color: "grey",
  },

  label: {
    color: "gray",
    marginBottom: 5,
  },

  value: {
    fontSize: 24,
  },

  row: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    marginVertical: 15,
  },

  valueContainer: {
    marginHorizontal: 5,

    alignItems: "center",
  },

  button: {
    flex: 1,
    margin: 5,
    height: 50,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default styles;

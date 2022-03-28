import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
  },

  userContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 50,
    marginVertical: 25,
    width: "100%",
  },

  userImage: {
    height: 75,
    width: 75,
    marginRight: 10,
    borderRadius: 50,
  },

  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    marginTop: 60,
  },

  left: {
    flexDirection: "row",
    alignItems: "center",
  },

  name: {
    fontWeight: "bold",
    fontSize: 20,
  },
  email: {},

  netWorth: {},
});

export default styles;

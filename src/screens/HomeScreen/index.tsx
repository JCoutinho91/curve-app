import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./styles";
const image = require("../../../assets/images/Crypto.png");

const HomeScreen = () => {
  return (
    <View style={styles.root}>
      <Image style={styles.image} source={image} />

      <Text style={styles.header1}>Start Your Investing Journey Here!</Text>
      <Text style={styles.header2}>
        Manage your virtual $100.00 and compete with others.
      </Text>
    </View>
  );
};

export default HomeScreen;

import { View, Text } from "react-native";
import React from "react";
import styles from "./styles";
import { useRoute } from "@react-navigation/native";

const CoinExchangeScreen = () => {
  const route = useRoute();

  const isBuy = route?.params?.isBuy;
  const coinData = route?.params?.coinData;

  return (
    <View>
      <Text style={styles.title}>
        {" "}
        {isBuy ? "Buy" : "Sell"}
        {coinData?.name}
      </Text>
    </View>
  );
};

export default CoinExchangeScreen;

import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./styles";

export interface PortfolioCoinProps {
  portfolioCoin: {
    image: String;
    name: String;
    symbol: String;
    amount: Number;
    valueUSD?: Number;
  };
}

const PortfolioCoin = (props: PortfolioCoinProps) => {
  const {
    portfolioCoin: { image, name, symbol, amount, valueUSD },
  } = props;

  return (
    <View style={styles.root}>
      <View style={styles.left}>
        <Image style={styles.image} source={{ uri: image }} />
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.symbol}>{symbol}</Text>
        </View>
      </View>
      <View style={{ alignItems: "flex-end", paddingRight: 15 }}>
        <Text style={styles.valueUSD}>${valueUSD}</Text>
        <Text style={styles.amount}>
          {symbol} {amount}
        </Text>
      </View>
    </View>
  );
};

export default PortfolioCoin;

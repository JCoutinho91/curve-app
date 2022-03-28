import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./styles";

export interface MarketCoinProps {
  marketCoin: {
    image: String;
    name: String;
    symbol: String;
    valueChange24h: number;
    valueUSD?: Number;
  };
}

const MarketCoin = (props: MarketCoinProps) => {
  const {
    marketCoin: { image, name, symbol, valueChange24h, valueUSD },
  } = props;

  return (
    <View style={styles.root}>
      <View style={styles.left}>
        <Image style={styles.image} source={{ uri: image as any }} />
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.symbol}>{symbol}</Text>
        </View>
      </View>
      <View style={{ alignItems: "flex-end", paddingRight: 15 }}>
        <Text style={styles.valueUSD}>${valueUSD}</Text>
        <Text style={{ color: valueChange24h > 0 ? "green" : "red" }}>
          {valueChange24h > 0 ? "+" : "-"}
          {valueChange24h}
        </Text>
      </View>
    </View>
  );
};

export default MarketCoin;

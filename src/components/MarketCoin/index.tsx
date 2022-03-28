import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import PercentageChange from "../PercentageChange";

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

  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.root}
      onPress={() => navigation.navigate("CoinDetails")}
    >
      <View style={styles.left}>
        <Image style={styles.image} source={{ uri: image as any }} />
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.symbol}>{symbol}</Text>
        </View>
      </View>
      <View style={{ alignItems: "flex-end", paddingRight: 15 }}>
        <Text style={styles.valueUSD}>${valueUSD}</Text>
        <PercentageChange value={valueChange24h} />
      </View>
    </Pressable>
  );
};

export default MarketCoin;

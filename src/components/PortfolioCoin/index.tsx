import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
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
        <Text style={styles.amount}>
          {symbol} {amount}
        </Text>
      </View>
    </Pressable>
  );
};

export default PortfolioCoin;

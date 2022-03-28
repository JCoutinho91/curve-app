import { View, Text, Image, Pressable } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import { AntDesign } from "@expo/vector-icons";
import PercentageChange from "../../components/PercentageChange";

const CoinDetailScreen = () => {
  const [coinData, setCoinData] = useState({
    id: "1",
    name: "BitCoin",
    image:
      "https://thumbs.dreamstime.com/b/bitcoin-logo-crypto-currency-computer-money-vector-graphics-to-design-115315174.jpg",
    symbol: "BTC",
    valueChangeH: -1.12,
    valueChange1D: -1.12,
    valueChange7D: -1.12,
    currentPrice: 520,
    valueUSD: 59420,
    amount: 2,
  });

  const onBuy = () => {};

  const onSell = () => {};

  return (
    <View style={styles.root}>
      <View style={styles.topContainer}>
        <View style={styles.left}>
          <Image style={styles.image} source={{ uri: coinData.image as any }} />
          <View>
            <Text style={styles.name}>{coinData.name}</Text>
            <Text style={styles.symbol}>{coinData.symbol}</Text>
          </View>
        </View>
        <View style={{ alignItems: "flex-end" }}>
          <AntDesign name={"staro"} size={30} color={"2f95dc"} />
        </View>
      </View>
      <View style={styles.row}>
        <View>
          <Text style={styles.label}>Current price</Text>
          <Text style={styles.value}>{coinData.currentPrice}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <View style={styles.valueContainer}>
            <Text style={styles.label}>1 Hour</Text>
            <PercentageChange value={coinData.valueChangeH} />
          </View>
          <View style={styles.valueContainer}>
            <Text style={styles.label}>1 Day</Text>
            <PercentageChange value={coinData.valueChange1D} />
          </View>
          <View style={styles.valueContainer}>
            <Text style={styles.label}>7 Days</Text>
            <PercentageChange value={coinData.valueChange7D} />
          </View>
        </View>
      </View>
      <View style={styles.row}>
        <Text>Position</Text>
        <Text>
          {coinData.symbol} {coinData.amount} (${" "}
          {coinData.currentPrice * coinData.amount})
        </Text>
      </View>
      <View style={[styles.row, { marginTop: "auto" }]}>
        <Pressable
          style={[styles.button, { backgroundColor: "green" }]}
          onPress={onBuy}
        >
          <Text style={styles.buttonText}>Buy</Text>
        </Pressable>
        <Pressable
          style={[styles.button, { backgroundColor: "red" }]}
          onPress={onSell}
        >
          <Text style={styles.buttonText}>Sell</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default CoinDetailScreen;

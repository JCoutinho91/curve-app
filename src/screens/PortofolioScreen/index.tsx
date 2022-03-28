import { View, Text, Image, FlatList } from "react-native";
import React from "react";
import styles from "./styles";
import PortfolioCoin from "../../components/PortfolioCoin";
const portfolioimg = require("../../../assets/images/portfolio.png");

const PortfolioCoins = [
  {
    id: 1,
    name: "Dollars",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/23/US_one_dollar_bill%2C_obverse%2C_series_2009.jpg",
    symbol: "USD",
    amount: 1.12,
    valueUSD: 34111,
  },
  {
    id: 2,
    name: "Escudo",
    image:
      "https://images.tcdn.com.br/img/img_prod/726147/moeda_portugal_1_escudo_1984_mbc_2553_1_08e0e4e3f683e4f58e47c85d6358111b.jpg",
    symbol: "USD",
    amount: 2.33,
    valueUSD: 12222,
  },
  {
    id: 3,
    name: "BitCoin",
    image:
      "https://einvestidor.estadao.com.br/wp-content/uploads/sites/715/2021/01/20210107t192453z-1-lynxmpeh061eb-rtroptp-4-techbitcoinquarenta_110120214024.jpg",
    symbol: "USD",
    amount: 0.55,
    valueUSD: 400,
  },
];

const PortofolioScreen = () => {
  return (
    <View style={styles.root}>
      <Image style={styles.image} source={portfolioimg} />
      <View style={styles.balanceContainer}>
        <Text style={styles.label}>Portfolio Balance</Text>
        <Text style={styles.balance}>$69,420</Text>
        <FlatList
          data={PortfolioCoins}
          renderItem={({ item }) => <PortfolioCoin portfolioCoin={item} />}
        />
      </View>
    </View>
  );
};

export default PortofolioScreen;

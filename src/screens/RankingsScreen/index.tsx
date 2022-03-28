import { View, Text, Image, FlatList } from "react-native";
import React from "react";
import styles from "./styles";
import RankingsUsers from "../../components/RankingsUsers";
const marketimg = require("../../../assets/images/Rankings.png");

const PortfolioCoins = [
  {
    id: 1,
    name: "Adam",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small/Basic_Ui__28186_29.jpg",
    netWorth: 34111,
  },
  {
    id: 2,
    name: "Mark",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small/Basic_Ui__28186_29.jpg",
    netWorth: 34111,
  },
  {
    id: 3,
    name: "Stefano",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small/Basic_Ui__28186_29.jpg",
    netWorth: 34111,
  },
  {
    id: 4,
    name: "Jasmi",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small/Basic_Ui__28186_29.jpg",
    netWorth: 34111,
  },
];

const RankingsScreen = () => {
  return (
    <View style={styles.root}>
      <FlatList
        style={{ width: "100%" }}
        data={PortfolioCoins}
        renderItem={({ item, index }) => (
          <RankingsUsers rankingsUsers={item} place={index + 1} />
        )}
        showsVerticalScrollIndicator={false}
        ListHeaderComponentStyle={{ alignItems: "center" }}
        ListHeaderComponent={() => (
          <>
            <Image style={styles.image} source={marketimg} />
            <View>
              <Text style={styles.label}>Rankings</Text>
            </View>
          </>
        )}
      />
    </View>
  );
};

export default RankingsScreen;

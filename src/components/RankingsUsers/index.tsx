import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./styles";

export interface RankingsUsersProps {
  rankingsUsers: {
    image: String;
    name: String;
    netWorth?: Number;
  };
  place: Number;
}

const RankingsUsers = (props: RankingsUsersProps) => {
  const {
    rankingsUsers: { image, name, netWorth },
    place,
  } = props;

  return (
    <View style={styles.root}>
      <View style={styles.left}>
        <Text style={styles.place}>{place}</Text>
        <Image style={styles.image} source={{ uri: image as any }} />
        <View>
          <Text style={styles.name}>{name}</Text>
        </View>
      </View>
      <View style={{ alignItems: "flex-end", paddingRight: 15 }}>
        <Text style={styles.netWorth}>${netWorth}</Text>
      </View>
    </View>
  );
};

export default RankingsUsers;

import { View, Text, Image, Pressable } from "react-native";
import React, { useState } from "react";
import styles from "../ProfileScreen/styles";
import profileimg from "../../../assets/images/bandit.png";

const ProfileScreen = () => {
  const [user, setUser] = useState({
    id: "1",
    name: "José",
    email: "email@gmail.com",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small/Basic_Ui__28186_29.jpg",
    netWorth: 12345,
  });

  const signOut = () => {
    console.warn({ message: "Sign Out!" });
  };

  return (
    <View style={styles.root}>
      <Image style={styles.image} source={profileimg} />
      <View style={styles.userContainer}>
        <View style={styles.left}>
          <Image style={styles.userImage} source={{ uri: user.image as any }} />
          <View>
            <Text style={styles.name}>{user.name}</Text>
            <Text style={styles.email}>{user.email}</Text>
          </View>
        </View>
        <View style={{ alignItems: "flex-end", paddingRight: 15 }}>
          <Text style={styles.netWorth}>${user.netWorth}</Text>
        </View>
      </View>
      <Pressable onPress={signOut} style={{ marginTop: "auto" }}>
        <Text>Sign Out</Text>
      </Pressable>
    </View>
  );
};

export default ProfileScreen;

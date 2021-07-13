import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

import userImg from "../assets/jardel.jpeg";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

const Header = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.getting}>Olá,</Text>
        <Text style={styles.userName}>Jardel</Text>
      </View>

      <Image source={userImg} style={styles.image} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
    marginTop: getStatusBarHeight(),
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 40,
  },
  getting: {
    fontSize: 32,
    color: colors.heading,
    fontFamily: fonts.text,
  },
  userName: {
    fontSize: 32,
    fontFamily: fonts.heading,
    color: colors.heading,
    lineHeight: 40,
  },
});

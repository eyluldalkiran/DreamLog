import React, { useState } from "react";
import { Dimensions } from "react-native";

import {
  SafeAreaView,
  View,
  Text,
  Image,
  Button,
  FlatList,
  StyleSheet,
  ImageBackground,
} from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const DreamWordCard = ({ word }) => {
  return (
    <View style={styles.card}>
      <ImageBackground
        source={require("../assets/star.jpg")}
        style={styles.image}
      >
        <Text style={styles.text}>{word}</Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
  },
  text: {
    fontSize: 20,
    color: "#fff",
  },
  image: {
    width: windowWidth - 20,
    height: 150,
    padding: 5,
    margin: 10,
    borderWidth: 0.3,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default DreamWordCard;

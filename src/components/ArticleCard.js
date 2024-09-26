import React from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
const windowWidth = Dimensions.get("window").width;
const ArticleCard = ({ article, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.title} numberOfLines={1}>
        {article.title}
      </Text>
      <View style={styles.authorContainer}>
        <AntDesign name="user" size={24} color="black" />
        <Text style={styles.authorText}>{article.author}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 120,
    borderRadius: 10,
    width: windowWidth - 20,
    backgroundColor: "white",
    margin: 7,
    marginStart: 10,
    padding: 5,
  },
  title: {
    padding: 10,
    margin: 20,
    fontSize: 20,
    color: "#36454F",
    fontWeight: "bold",
  },
  text: {},
  authorContainer: {
    flexDirection: "row",
    marginLeft: 15,
  },
  authorText: {
    margin: 4,
    marginLeft: 8,
    color: "#808080",
  },
});
export default ArticleCard;

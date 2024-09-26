import React from "react";

import {
  SafeAreaView,
  View,
  Text,
  Image,
  Linking,
  TouchableOpacity,
} from "react-native";
import { styles } from "./styles";
const ArticleDetailScreen = ({ route }) => {
  const article = route.params.article;
  const openUrl = () => {
    Linking.openURL(article.original_link);
  };
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{article.title}</Text>
        <Text style={styles.content}>{article.content}</Text>
      </View>
      <TouchableOpacity onPress={openUrl} style={styles.button}>
        <Text>Read More</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ArticleDetailScreen;

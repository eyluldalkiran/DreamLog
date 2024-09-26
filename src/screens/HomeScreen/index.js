import React, { useEffect, useRef, useState } from "react";

import {
  SafeAreaView,
  View,
  Text,
  Image,
  Button,
  FlatList,
} from "react-native";

import DreamWordCard from "../../components/DreamWordCard";
import nicewords from "../../../assets/nicewords.json";
import { styles } from "./styles";
import axios from "axios";
import ArticleCard from "../../components/ArticleCard";

const Home = ({ navigation }) => {
  const [data, setData] = useState(nicewords);
  const [articles, setArticles] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === nicewords.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const getArticles = async () => {
      const res = await axios.get("http://localhost:3000/articles");
      setArticles(res.data);
    };
    getArticles();
  }, []);
  useEffect(() => {
    if (flatListRef.current) {
      flatListRef.current.scrollToIndex({
        index: currentIndex,
        animated: true,
      });
    }
  }, [currentIndex]);
  const renderItem = ({ item }) => {
    return <DreamWordCard word={item.word} />;
  };
  const renderCard = ({ item }) => {
    return (
      <ArticleCard article={item} onPress={() => navigateArticleScreen(item)} />
    );
  };
  const navigateArticleScreen = (item) => {
    navigation.navigate("ArticleScreen", { article: item });
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <FlatList
          ref={flatListRef}
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          horizontal
          pagingEnabled
          scrollEnabled={false}
        />
      </View>
      <Text style={styles.title}>Articles</Text>
      <FlatList
        data={articles}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderCard}
        horizontal
      />
    </SafeAreaView>
  );
};
export default Home;

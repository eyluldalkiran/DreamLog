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
import nicewords from "../../assets/nicewords.json";
import { styles } from "./styles";

const Home = () => {
  const [data, setData] = useState(nicewords);
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
      <Text>Rüya Günlüğü:</Text>
    </SafeAreaView>
  );
};
export default Home;

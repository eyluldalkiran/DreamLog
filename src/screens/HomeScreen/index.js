import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Text, FlatList, Pressable } from "react-native";

import { styles } from "./styles";

const MOCK_DREAMS = [
  {
    id: "1",
    mood: "😨",
    title: "Lost in a city",
    text: "I was running through narrow streets and couldn’t find my way out.",
    date: "Aug 11",
  },
  {
    id: "2",
    mood: "🙂",
    title: "Flying again",
    text: "I was flying above the clouds and felt completely free.",
    date: "Aug 10",
  },
];

const Home = ({ navigation }) => {
  const [dreams, setDreams] = useState([]);

  useEffect(() => {
    // şimdilik mock, sonra storage
    setDreams(MOCK_DREAMS);
  }, []);

  const renderDream = ({ item }) => {
    return (
      <Pressable
        style={styles.dreamCard}
        onPress={() => navigation.navigate("DreamDetail", { dream: item })}
      >
        <Text style={styles.mood}>{item.mood}</Text>

        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>{item.title || "Untitled Dream"}</Text>
          <Text style={styles.cardText} numberOfLines={2}>
            {item.text}
          </Text>
          <Text style={styles.cardDate}>{item.date}</Text>
        </View>
      </Pressable>
    );
  };

  const renderEmptyState = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyEmoji}>🌙</Text>
      <Text style={styles.emptyTitle}>No dreams yet</Text>
      <Text style={styles.emptySubtitle}>
        Write your first dream and start remembering more.
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Dreamlog</Text>
        <Text style={styles.headerSubtitle}>Your dream journal</Text>
      </View>

      <FlatList
        data={dreams}
        keyExtractor={(item) => item.id}
        renderItem={renderDream}
        ListEmptyComponent={renderEmptyState}
        contentContainerStyle={{ paddingBottom: 120 }}
      />

      <Pressable
        style={styles.fab}
        onPress={() => navigation.navigate("AddDream")}
      >
        <Text style={styles.fabIcon}>＋</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default Home;

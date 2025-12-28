import React, { useState } from "react";
import { SafeAreaView, View, Text, TextInput, Pressable } from "react-native";

import { styles } from "./styles";

const MOODS = ["🙂", "😴", "😨", "🥰", "😕", "😵‍💫"];

const AddDream = ({ navigation }) => {
  const [text, setText] = useState("");
  const [mood, setMood] = useState("🙂");

  const handleSave = () => {
    if (!text.trim()) return;

    const newDream = {
      id: Date.now().toString(),
      mood,
      text,
      date: new Date().toDateString(),
    };

    // Şimdilik sadece geri dönüyoruz
    // Bir sonraki adımda AsyncStorage bağlayacağız
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()}>
          <Text style={styles.cancel}>Cancel</Text>
        </Pressable>

        <Text style={styles.headerTitle}>New Dream</Text>

        <Pressable onPress={handleSave}>
          <Text style={styles.save}>Save</Text>
        </Pressable>
      </View>

      {/* Mood Picker */}
      <View style={styles.moodContainer}>
        {MOODS.map((item) => (
          <Pressable
            key={item}
            style={[styles.moodItem, mood === item && styles.moodSelected]}
            onPress={() => setMood(item)}
          >
            <Text style={styles.moodText}>{item}</Text>
          </Pressable>
        ))}
      </View>

      {/* Dream Input */}
      <TextInput
        style={styles.input}
        placeholder="Write your dream here..."
        placeholderTextColor="#7D7D8A"
        multiline
        autoFocus
        value={text}
        onChangeText={setText}
      />
    </SafeAreaView>
  );
};

export default AddDream;

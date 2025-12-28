import React from "react";
import { SafeAreaView, View, Text, Pressable, Alert } from "react-native";

import { styles } from "./styles";
import { deleteDream } from "../../utils/dreamStorage";

const DreamDetail = ({ route, navigation }) => {
  const { dream } = route.params;

  const handleDelete = () => {
    Alert.alert("Delete Dream", "Are you sure you want to delete this dream?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Delete",
        style: "destructive",
        onPress: async () => {
          await deleteDream(dream.id);
          navigation.goBack();
        },
      },
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()}>
          <Text style={styles.back}>Back</Text>
        </Pressable>

        <Text style={styles.headerTitle}>Dream</Text>

        <Pressable onPress={handleDelete}>
          <Text style={styles.delete}>Delete</Text>
        </Pressable>
      </View>

      {/* Content */}
      <View style={styles.content}>
        <Text style={styles.mood}>{dream.mood}</Text>
        <Text style={styles.date}>{dream.date}</Text>

        <Text style={styles.text}>{dream.text}</Text>
      </View>
    </SafeAreaView>
  );
};

export default DreamDetail;

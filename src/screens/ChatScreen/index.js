import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import { styles } from "./styles";
import { generateContent } from "../../services/aiService";
const ChatScreen = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");

  const handleSend = async () => {
    if (inputText.trim() === "") return;

    const userMessage = { sender: "user", text: inputText };
    setMessages([...messages, userMessage]);

    const response = await generateContent(inputText);
    console.log("ne ki", response);
    const botMessage = { sender: "bot", text: response };

    // Yanıtı ekle
    setMessages([...messages, userMessage, botMessage]);
    setInputText("");
  };

  const renderMessage = ({ item }) => {
    const isUser = item.sender === "user";
    return (
      <View
        style={[
          styles.messageBubble,
          isUser ? styles.userMessage : styles.botMessage,
        ]}
      >
        <Text style={styles.messageText}>{item.text}</Text>
      </View>
    );
  };

  return (
    <ImageBackground
      source={require("../../../assets/bg.jpg")}
      style={styles.background}
    >
      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={(item, index) => index.toString()}
        style={styles.chatList}
      />

      <View style={styles.inputContainer}>
        <TextInput
          value={inputText}
          onChangeText={setInputText}
          placeholder="Input Your Dream."
          style={styles.input}
        />
        <TouchableOpacity onPress={handleSend} style={styles.sendButton}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default ChatScreen;

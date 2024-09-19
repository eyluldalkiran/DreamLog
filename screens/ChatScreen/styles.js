import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  chatList: {
    flex: 1,
    paddingHorizontal: 10,
    marginTop: 80,
  },
  inputContainer: {
    flexDirection: "row",
    padding: 10,
    borderTopWidth: 1,
    borderColor: "#ddd",

    paddingBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 20,
    padding: 10,
    color: "white",
  },
  sendButton: {
    justifyContent: "center",
    paddingHorizontal: 15,
    marginLeft: 10,
    backgroundColor: "pink",
    borderRadius: 20,
  },
  sendButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  messageBubble: {
    maxWidth: "70%",
    padding: 15,
    marginVertical: 8,
    borderRadius: 15,
  },
  userMessage: {
    backgroundColor: "purple",
    alignSelf: "flex-end",
  },
  botMessage: {
    backgroundColor: "#f1f1f1",
    alignSelf: "flex-start",
  },
  messageText: {
    fontSize: 16,
    color: "#333",
  },
});

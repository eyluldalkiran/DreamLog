import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0E0B16",
    paddingHorizontal: 16,
  },

  // Header
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#FFFFFF",
  },
  cancel: {
    fontSize: 16,
    color: "#8E8E93",
  },
  save: {
    fontSize: 16,
    color: "#6D5DF6",
    fontWeight: "600",
  },

  // Mood picker
  moodContainer: {
    flexDirection: "row",
    marginVertical: 16,
  },
  moodItem: {
    marginRight: 10,
    padding: 8,
    borderRadius: 12,
    backgroundColor: "#1C1A29",
  },
  moodSelected: {
    backgroundColor: "#6D5DF6",
  },
  moodText: {
    fontSize: 24,
  },

  // Input
  input: {
    flex: 1,
    fontSize: 16,
    color: "#FFFFFF",
    textAlignVertical: "top",
    lineHeight: 24,
  },
});

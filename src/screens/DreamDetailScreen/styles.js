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
  back: {
    fontSize: 16,
    color: "#6D5DF6",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#FFFFFF",
  },
  delete: {
    fontSize: 16,
    color: "#FF5A5F",
    fontWeight: "500",
  },

  // Content
  content: {
    marginTop: 24,
  },
  mood: {
    fontSize: 48,
    marginBottom: 8,
  },
  date: {
    fontSize: 14,
    color: "#8E8E93",
    marginBottom: 24,
  },
  text: {
    fontSize: 16,
    color: "#FFFFFF",
    lineHeight: 26,
  },
});

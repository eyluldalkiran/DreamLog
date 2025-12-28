import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0E0B16", // dark dreamy
    paddingHorizontal: 16,
  },

  // Header
  header: {
    marginTop: 12,
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "700",
    color: "#FFFFFF",
  },
  headerSubtitle: {
    fontSize: 14,
    color: "#A1A1AA",
    marginTop: 2,
  },

  // Dream Card
  dreamCard: {
    flexDirection: "row",
    backgroundColor: "#1C1A29",
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
  },
  mood: {
    fontSize: 28,
    marginRight: 12,
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FFFFFF",
    marginBottom: 4,
  },
  cardText: {
    fontSize: 14,
    color: "#C7C7CC",
  },
  cardDate: {
    marginTop: 8,
    fontSize: 12,
    color: "#8E8E93",
  },

  // Empty State
  emptyContainer: {
    alignItems: "center",
    marginTop: 80,
  },
  emptyEmoji: {
    fontSize: 48,
    marginBottom: 12,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#FFFFFF",
    marginBottom: 4,
  },
  emptySubtitle: {
    fontSize: 14,
    color: "#A1A1AA",
    textAlign: "center",
    paddingHorizontal: 24,
  },

  // FAB
  fab: {
    position: "absolute",
    right: 24,
    bottom: 32,
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#6D5DF6",
    alignItems: "center",
    justifyContent: "center",
    elevation: 6,
  },
  fabIcon: {
    fontSize: 32,
    color: "#FFFFFF",
    marginBottom: 2,
  },
});

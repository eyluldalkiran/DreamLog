import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#B6A5C4",
  },
  title: {
    fontSize: 30,
    marginLeft: 20,
    fontWeight: "bold",
    color: "white",
  },
  content: {
    padding: 15,
    fontSize: 15,
    margin: 3,
  },
  contentContainer: {
    margin: 5,
    padding: 5,
    marginTop: 20,
  },
  button: {
    backgroundColor: "white",
    margin: 3,
    width: 100,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    position: "absolute",
    right: 10,
    bottom: 10,
    padding: 10,
  },
});

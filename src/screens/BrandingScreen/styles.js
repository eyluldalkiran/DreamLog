import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#a284ed",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    // padding: 20,
    width: 200,
    height: 60,

    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    bottom: 30,
    right: 20,
    position: "absolute",
    borderWidth: 0.2,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "200",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 300,
  },
  gradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    width: 200,
    height: 60,
  },
  image: {
    width: 200,
    height: 200,
  },
  titleText: {
    fontSize: 32,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    textTransform: "uppercase",
    fontFamily: "EuphemiaUCAS-Bold",
  },
});

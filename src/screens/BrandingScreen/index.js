import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import { styles } from "./styles";

const Branding = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("../../../assets/moon.png")}
        style={styles.image}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
        style={styles.button}
      >
        <LinearGradient
          colors={[
            "rgba(238,120,217,255)",
            "rgba(214,158,247,255)",
            "rgba(174,138,238,255)",
          ]}
          style={styles.gradient}
        >
          <Text style={styles.buttonText}>Start</Text>
        </LinearGradient>
      </TouchableOpacity>
      <Text style={styles.titleText}>DREAMLOG</Text>
    </SafeAreaView>
  );
};
export default Branding;

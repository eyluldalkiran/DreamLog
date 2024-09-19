import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/HomeScreen";
import Branding from "./screens/BrandingScreen";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
const Stack = createNativeStackNavigator();
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CustomTab from "./components/CustomTabBar";
import AntDesign from "@expo/vector-icons/AntDesign";
import ChatScreen from "./screens/ChatScreen";

const Tab = createBottomTabNavigator();
export default function App() {
  const [isFirstLaunch, setIsFirstLaunch] = useState(true);

  useEffect(() => {
    const checkLaunched = () => {
      const alreadyLaunched = AsyncStorage.getItem("alreadyLaunched");
      if (alreadyLaunched) {
        setIsFirstLaunch(false);
      } else {
        setIsFirstLaunch(true);
        AsyncStorage.setItem("alreadyLaunched", true);
      }
    };
    checkLaunched();
  }, []);
  function MainTabNavigator() {
    return (
      <Tab.Navigator tabBar={(props) => <CustomTab {...props} />}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Chat"
          component={ChatScreen}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isFirstLaunch && (
          <Stack.Screen
            name="Branding"
            component={Branding}
            options={{ headerShown: false }}
          />
        )}
        <Stack.Screen
          name="Main"
          component={MainTabNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

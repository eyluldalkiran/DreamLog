import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./src/screens/HomeScreen";
import Branding from "./src/screens/BrandingScreen";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
const Stack = createNativeStackNavigator();
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CustomTab from "./src/components/CustomTabBar";
import AntDesign from "@expo/vector-icons/AntDesign";
import ChatScreen from "./src/screens/ChatScreen";
import ArticleDetailScreen from "./src/screens/ArticleDetailScreen";

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
  function HomeStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={Home} />
        <Stack.Screen name="ArticleScreen" component={ArticleDetailScreen} />
      </Stack.Navigator>
    );
  }

  function MainTabNavigator() {
    return (
      <Tab.Navigator tabBar={(props) => <CustomTab {...props} />}>
        <Tab.Screen
          name="Home"
          component={HomeStack}
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

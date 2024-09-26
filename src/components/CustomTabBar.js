import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
function CustomTab({ state, descriptors, navigation }) {
  return (
    <SafeAreaView
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };
        let iconName;
        switch (route.name) {
          case "Home":
            iconName = "home";
            break;
          case "Settings":
            iconName = "setting";
            break;
          case "Profile":
            iconName = "user";
            break;
          case "Chat":
            iconName = "plus";
            break;
          default:
            iconName = "questioncircleo";
        }

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={
              {
                //flex: 1,
              }
            }
          >
            <AntDesign name={iconName} size={30} color="black" />
          </TouchableOpacity>
        );
      })}
    </SafeAreaView>
  );
}
export default CustomTab;

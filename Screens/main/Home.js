import React from "react";
import { View, Text, StyleSheet } from "react-native";
// import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// import icons
import Ionicons from "@expo/vector-icons/Ionicons";

const Tabs = createBottomTabNavigator();

import PostsScreen from "./PostsScreen";
import ProfileScreen from "./ProfileScreen";
import CreatePostsScreen from "./CreatePostsScreen";

const Home = () => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Posts") {
            iconName = focused ? "grid" : "grid-outline";
          } else if (route.name === "CreatePosts") {
            iconName = focused ? "add-circle" : "add-circle-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    >
      <Tabs.Screen
        options={{ headerShown: false }}
        name="Posts"
        component={PostsScreen}
      />
      <Tabs.Screen
        options={{ headerShown: false }}
        name="CreatePosts"
        component={CreatePostsScreen}
      />
      <Tabs.Screen
        options={{ headerShown: false }}
        name="Profile"
        component={ProfileScreen}
      />
    </Tabs.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;

// import React from "react";
// import { View, Text, StyleSheet } from "react-native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { Ionicons } from "@expo/vector-icons";

// function Settings() {
//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <Text>Settings!</Text>
//     </View>
//   );
// }

// function Profile() {
//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <Text>Profile!</Text>
//     </View>
//   );
// }

// const Tabs = createBottomTabNavigator();

// const Home = () => {
//   return (
//     <Tabs.Navigator
//       screenOptions={({ route }) => ({
//         tabBarIcon: ({ focused, color, size }) => {
//           let iconName;

//           if (route.name === "Profile") {
//             iconName = focused
//               ? "ios-information-circle"
//               : "ios-information-circle-outline";
//           } else if (route.name === "Settings") {
//             iconName = focused ? "ios-list-box" : "ios-list";
//           }
//           return <Ionicons name={iconName} size={size} color={color} />;
//         },
//       })}
//       tabBarOptions={{
//         activeTintColor: "tomato",
//         inactiveTintColor: "gray",
//       }}
//     >
//       <Tabs.Screen name="Settings" component={Settings} />
//       <Tabs.Screen name="Profile" component={Profile} />
//     </Tabs.Navigator>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

// export default Home;

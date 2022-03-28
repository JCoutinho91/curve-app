import { FontAwesome } from "@expo/vector-icons";
import { Entypo, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName, Pressable } from "react-native";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import NotFoundScreen from "../screens/NotFoundScreen";
import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from "../../types";
import LinkingConfiguration from "./LinkingConfiguration";
import HomeScreen from "../screens/HomeScreen";
import PortofolioScreen from "../screens/PortofolioScreen";
import MarketScreen from "../screens/MarketScreen";
import RankingsScreen from "../screens/RankingsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import CoinDetailScreen from "../screens/CoinDetailScreen";
import ExchangeScreen from "../screens/CoinExchangeScreen";
import CoinExchangeScreen from "../screens/CoinExchangeScreen";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CoinDetails"
        component={CoinDetailScreen}
        options={{
          title: "Price Data",
        }}
      />
      <Stack.Screen
        name="CoinExchange"
        component={CoinExchangeScreen}
        options={{
          title: "Coin Exchange",
        }}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
    </Stack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }: RootTabScreenProps<"Home">) => ({
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate("Modal")}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}
            >
              <FontAwesome
                name="info-circle"
                size={30}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        name="Portofolio"
        component={PortofolioScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="pie-chart" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Market"
        component={MarketScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Entypo name="area-graph" size={30} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Rankings"
        component={RankingsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-podium-outline" size={30} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="face-profile"
              size={24}
              color={color}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}

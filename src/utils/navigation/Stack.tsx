import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "../../screens/Welcome/Welcome";
import UserInfo from "../../screens/UserInfo/UserInfo";
import Confirmation from "../../screens/Confirmation/Confirmation";
import Dashboard from "../../screens/Dashboard/Dashboard";
import Progress from "../../screens/Progress/Progress";
import RiskMeter from "../../screens/RiskMeter/RiskMeter";

export type RootStackParamList = {
  Welcome: undefined;
  UserInfo: undefined;
  Confirmation: undefined;
  Dashboard: undefined;
  Progress: undefined;
  RiskMeter: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="UserInfo"
          component={UserInfo}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Confirmation"
          component={Confirmation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{ title: "Dashboard" }}
        />
        <Stack.Screen
          name="Progress"
          component={Progress}
          options={{ title: "Progress" }}
        />
        <Stack.Screen
          name="RiskMeter"
          component={RiskMeter}
          options={{ title: "Risk-o-meter" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

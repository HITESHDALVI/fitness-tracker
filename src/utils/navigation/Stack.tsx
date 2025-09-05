import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Onboarding1 from "../../screens/Onboarding1/Onboarding1";
import Onboarding2 from "../../screens/Onboarding2/Onboarding2";
import Onboarding3 from "../../screens/Onboarding3/Onboarding3";
import Dashboard from "../../screens/Dashboard/Dashboard";
import Progress from "../../screens/Progress/Progress";
import RiskMeter from "../../screens/RiskMeter/RiskMeter";

export type RootStackParamList = {
  Onboarding1: undefined;
  Onboarding2: undefined;
  Onboarding3: undefined;
  Dashboard: undefined;
  Progress: undefined;
  RiskMeter: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding1">
        <Stack.Screen
          name="Onboarding1"
          component={Onboarding1}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Onboarding2"
          component={Onboarding2}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Onboarding3"
          component={Onboarding3}
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

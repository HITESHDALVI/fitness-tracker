import React from "react";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import { welcomeStyles } from "./styles/welcomeStyles";
import UserList from "../User/Userlist";

export default function Welcome({ navigation }: any) {
  const handleSubmit = () => {
    navigation.navigate("UserInfo");
  };
  return (
    <SafeAreaView style={welcomeStyles.containerMinimal}>
      {/* <View style={welcomeStyles.contentMinimal}>
        <View style={welcomeStyles.logoContainer}>
          <View style={welcomeStyles.logoCircle}>
            <Text style={welcomeStyles.logoEmoji}>🌱</Text>
          </View>
          <Text style={welcomeStyles.titleMinimal}>Fyxlife</Text>
        </View>

        <View style={welcomeStyles.textContainer}>
          <Text style={welcomeStyles.headlineMinimal}>Your fitness,</Text>
          <Text style={welcomeStyles.headlineMinimal}>simplified.</Text>
          <Text style={welcomeStyles.subMinimal}>
            Track workouts, monitor progress, and achieve your goals with ease.
          </Text>
        </View>

        <View style={welcomeStyles.actionContainer}>
          <TouchableOpacity
            style={welcomeStyles.ctaButton}
            onPress={() => {
              handleSubmit();
            }}
          >
            <Text style={welcomeStyles.ctaButtonText}>Start Your Journey</Text>
          </TouchableOpacity>
        </View>
      </View> */}
      <UserList navigation={navigation} />
    </SafeAreaView>
  );
}

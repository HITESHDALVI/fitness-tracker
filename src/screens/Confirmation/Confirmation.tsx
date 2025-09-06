import React from "react";
import {
  SafeAreaView,
  Text,
  View,
  Animated,
  TouchableOpacity,
} from "react-native";
import useConfirmation from "./hook/useConfirmation";
import { confirmationStyles } from "./styles/confirmationStyles";

export default function Confirmation({ navigation, route }: any) {
  const { profile, isLoading, fadeAnim, scaleAnim } = useConfirmation({
    navigation,
    route,
  });
  if (isLoading) {
    return (
      <SafeAreaView style={confirmationStyles.container}>
        <View style={confirmationStyles.loadingContainer}>
          <View style={confirmationStyles.loadingSpinner} />
          <Text style={confirmationStyles.loadingText}>
            Setting up your profile...
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={confirmationStyles.container}>
      <Animated.View
        style={[
          confirmationStyles.content,
          {
            opacity: fadeAnim,
            transform: [{ scale: scaleAnim }],
          },
        ]}
      >
        <View style={confirmationStyles.iconContainer}>
          <View style={confirmationStyles.successCircle}>
            <Text style={confirmationStyles.checkmark}>✓</Text>
          </View>
        </View>

        <View style={confirmationStyles.messageContainer}>
          <Text style={confirmationStyles.title}>Welcome to Fyxlife,</Text>
          <Text style={confirmationStyles.nameText}>{profile?.name}!</Text>
          <Text style={confirmationStyles.subtitle}>
            Your personalized fitness journey starts now
          </Text>
        </View>

        <View style={confirmationStyles.featuresContainer}>
          <Text style={confirmationStyles.featuresTitle}>
            What's waiting for you:
          </Text>
          <View style={confirmationStyles.featuresList}>
            <View style={confirmationStyles.featureItem}>
              <Text style={confirmationStyles.featureIcon}>📊</Text>
              <Text style={confirmationStyles.featureText}>
                Track your progress
              </Text>
            </View>
            <View style={confirmationStyles.featureItem}>
              <Text style={confirmationStyles.featureIcon}>🎯</Text>
              <Text style={confirmationStyles.featureText}>
                Achieve your goals
              </Text>
            </View>
            <View style={confirmationStyles.featureItem}>
              <Text style={confirmationStyles.featureIcon}>💪</Text>
              <Text style={confirmationStyles.featureText}>
                Build healthy habits
              </Text>
            </View>
          </View>
        </View>
      </Animated.View>

      <View style={confirmationStyles.bottomContainer}>
        <TouchableOpacity
          style={confirmationStyles.dashboardButton}
          onPress={() =>
            navigation.reset({
              index: 0,
              routes: [{ name: "Dashboard" }],
            })
          }
        >
          <Text style={confirmationStyles.dashboardButtonText}>
            Start Your Journey
          </Text>
          <Text style={confirmationStyles.buttonArrow}>→</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

import React, { useEffect } from "react";
import { SafeAreaView, Text, Button, StyleSheet } from "react-native";
import { Goal } from "../../types";
import { saveGoals, saveProfile } from "../../utils/storage";

export default function Onboarding3({ navigation, route }: any) {
  const { profile } = route.params;

  useEffect(() => {
    // Seed default goals and save profile
    const defaultGoals: Goal[] = [
      {
        id: "g1",
        title: "Move",
        description: "20 min walk",
        target: "20 min",
        completedToday: false,
      },
      {
        id: "g2",
        title: "Eat",
        description: "Healthy meals",
        target: "3 meals",
        completedToday: false,
      },
      {
        id: "g3",
        title: "Calm",
        description: "Meditation",
        target: "10 min",
        completedToday: false,
      },
    ];
    saveProfile(profile).catch(console.warn);
    saveGoals(defaultGoals).catch(console.warn);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Hi {profile?.name}, your profile is ready 🎉
      </Text>
      <Button
        title="Go to Dashboard"
        onPress={() =>
          navigation.reset({ index: 0, routes: [{ name: "Dashboard" }] })
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, justifyContent: "center" },
  title: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 12,
    textAlign: "center",
  },
});

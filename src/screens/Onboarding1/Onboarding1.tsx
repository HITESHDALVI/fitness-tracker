import React from "react";
import { View, Text, SafeAreaView, Button, StyleSheet } from "react-native";

export default function Onboarding1({ navigation }: any) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Welcome to Fyxlife🌱</Text>
      <Text style={styles.sub}>A simple fitness tracking experience</Text>
      <Button
        title="Get Started"
        onPress={() => navigation.navigate("Onboarding2")}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  title: { fontSize: 28, fontWeight: "700", marginBottom: 8 },
  sub: { fontSize: 16, marginBottom: 16 },
});

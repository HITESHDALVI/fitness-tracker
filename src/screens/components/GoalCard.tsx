import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Goal } from "../../types";

export default function GoalCard({
  goal,
  onToggle,
  onSwap,
}: {
  goal: Goal;
  onToggle: () => void;
  onSwap: () => void;
}) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{goal.title}</Text>
      <Text style={styles.desc}>{goal.description}</Text>
      <Text style={styles.target}>{goal.target}</Text>
      <View style={styles.actions}>
        <TouchableOpacity onPress={onToggle} style={styles.button}>
          <Text>{goal.completedToday ? "Completed" : "Mark"}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onSwap}
          style={[styles.button, { backgroundColor: "#eee" }]}
        >
          <Text>Swap</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 12,
    borderRadius: 10,
    backgroundColor: "#fff",
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 5,
  },
  title: { fontSize: 18, fontWeight: "700" },
  desc: { fontSize: 14, color: "#666" },
  target: { marginTop: 6, fontSize: 13 },
  actions: { flexDirection: "row", marginTop: 8 },
  button: {
    padding: 8,
    borderRadius: 6,
    marginRight: 8,
    backgroundColor: "#f0f0f0",
  },
});

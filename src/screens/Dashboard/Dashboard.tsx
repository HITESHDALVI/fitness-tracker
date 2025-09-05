import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
} from "react-native";
import GoalCard from "../components/GoalCard";
import { Goal } from "../../types";
import { loadGoals, loadProfile, saveGoals } from "../../utils/storage";

export default function Dashboard({ navigation }: any) {
  const [goals, setGoals] = useState<Goal[]>([]);
  const [name, setName] = useState<string>("");

  useEffect(() => {
    const fetch = async () => {
      const p = await loadProfile();
      if (p) setName(p.name);
      const g = await loadGoals();
      if (g) setGoals(g);
    };
    fetch();
  }, []);

  const toggle = (id: string) => {
    const next = goals.map((g) =>
      g.id === id ? { ...g, completedToday: !g.completedToday } : g
    );
    setGoals(next);
    saveGoals(next).catch(console.warn);
  };

  const swap = (id: string) => {
    // simple swap demo - replace target text
    const next = goals.map((g) =>
      g.id === id
        ? {
            ...g,
            description:
              g.description === "20 min walk"
                ? "10 min stretch"
                : g.description,
          }
        : g
    );
    setGoals(next);
    saveGoals(next).catch(console.warn);
  };

  const completedToday = goals.filter((g) => g.completedToday).length;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <Text style={styles.header}>Hi {name}</Text>
        <Text style={styles.sub}>
          Today you've completed {completedToday} goals
        </Text>
        <View style={{ marginTop: 12 }}>
          {goals.map((g) => (
            <GoalCard
              key={g.id}
              goal={g}
              onToggle={() => toggle(g.id)}
              onSwap={() => swap(g.id)}
            />
          ))}
        </View>
        <View style={{ marginTop: 12 }}>
          <Button
            title="View Progress"
            onPress={() => navigation.navigate("Progress")}
          />
          <View style={{ height: 8 }} />
          <Button
            title="Risk-o-meter"
            onPress={() => navigation.navigate("RiskMeter")}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: { fontSize: 24, fontWeight: "700" },
  sub: { fontSize: 16, color: "#555" },
});

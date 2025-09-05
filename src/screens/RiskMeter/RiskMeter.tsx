import React from "react";
import { SafeAreaView, Text, View, StyleSheet } from "react-native";

const risks = [
  {
    group: "Cardio",
    items: [
      { name: "Heart disease", score: 20 },
      { name: "Hypertension", score: 30 },
    ],
  },
  {
    group: "Metabolic",
    items: [
      { name: "Diabetes", score: 18 },
      { name: "Obesity", score: 25 },
    ],
  },
  { group: "Musculoskeletal", items: [{ name: "Osteoarthritis", score: 10 }] },
];

export default function RiskMeter() {
  return (
    <SafeAreaView style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 20, fontWeight: "700" }}>Risk-o-meter</Text>
      {risks.map((rg) => (
        <View key={rg.group} style={{ marginTop: 12 }}>
          <Text style={{ fontSize: 16, fontWeight: "600" }}>{rg.group}</Text>
          {rg.items.map((it) => (
            <View key={it.name} style={styles.row}>
              <Text>{it.name}</Text>
              <View style={styles.pill}>
                <Text>{it.score}%</Text>
              </View>
            </View>
          ))}
        </View>
      ))}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
  },
  pill: {
    backgroundColor: "#fff",
    padding: 6,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#eee",
  },
});

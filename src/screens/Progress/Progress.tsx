import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, View, StyleSheet } from "react-native";
import { loadGoals } from "../../utils/storage";

export default function Progress() {
  const [today, setToday] = useState(0);
  const [week, setWeek] = useState(0);
  const [month, setMonth] = useState(0);

  useEffect(() => {
    const fetch = async () => {
      const g = await loadGoals();
      if (g) {
        const t = g.filter((x) => x.completedToday).length;
        setToday(t);
        // For demo, calculate week/month as multiples
        setWeek(t * 5);
        setMonth(t * 20);
      }
    };
    fetch();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, padding: 16 }}>
      <Text style={styles.title}>Progress Summary</Text>
      <View style={styles.row}>
        <Text>Today</Text>
        <Text>{today}</Text>
      </View>
      <View style={styles.row}>
        <Text>This Week</Text>
        <Text>{week}</Text>
      </View>
      <View style={styles.row}>
        <Text>This Month</Text>
        <Text>{month}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: { fontSize: 20, fontWeight: "700", marginBottom: 12 },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 12,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
});

import React from "react";
import { StyleSheet, Text, View } from "react-native";

const StatsCard = ({
  title,
  value,
  subtitle,
  icon,
  color = "#00b894",
}: {
  title: string;
  value: string;
  subtitle: string;
  icon: string;
  color: string;
}) => (
  <View style={styles.statsCard}>
    <View
      style={[styles.statsIconContainer, { backgroundColor: `${color}15` }]}
    >
      <Text style={[styles.statsIcon, { color }]}>{icon}</Text>
    </View>
    <Text style={styles.statsValue}>{value}</Text>
    <Text style={styles.statsTitle}>{title}</Text>
    {subtitle && <Text style={styles.statsSubtitle}>{subtitle}</Text>}
  </View>
);

export default StatsCard;
const styles = StyleSheet.create({
  statsCard: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  statsIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  statsIcon: {
    fontSize: 18,
  },
  statsValue: {
    fontSize: 16,
    fontWeight: "700",
    color: "#2d3436",
    marginBottom: 2,
  },
  statsTitle: {
    fontSize: 12,
    color: "#6c757d",
    fontWeight: "500",
    textAlign: "center",
  },
  statsSubtitle: {
    fontSize: 10,
    color: "#adb5bd",
    marginTop: 2,
  },
});

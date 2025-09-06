import React from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "react-native";
import { windowWidth } from "../../utils/constants";

interface SummaryStatCardProps {
  title: string;
  value: number | string;
  subtitle: string;
  trend?: number;
  color?: string;
}
const SummaryStatCard: React.FC<SummaryStatCardProps> = ({
  title,
  value,
  subtitle,
  trend,
  color = "#00b894",
}) => (
  <View style={styles.summaryStatCard}>
    <Text style={styles.statTitle}>{title}</Text>
    <Text style={[styles.statValue, { color }]}>{value}</Text>
    <View style={styles.statFooter}>
      <Text style={styles.statSubtitle}>{subtitle}</Text>
      {trend !== undefined && (
        <Text
          style={[
            styles.statTrend,
            { color: trend > 0 ? "#00b894" : "#fd79a8" },
          ]}
        >
          {trend > 0 ? "↗" : "↘"} {Math.abs(trend)}%
        </Text>
      )}
    </View>
  </View>
);

export default SummaryStatCard;
const styles = StyleSheet.create({
  summaryStatCard: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 16,
    width: (windowWidth - 60) / 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  statTitle: {
    fontSize: 12,
    color: "#6c757d",
    fontWeight: "500",
    marginBottom: 4,
  },
  statValue: { fontSize: 20, fontWeight: "800", marginBottom: 4 },
  statFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  statSubtitle: { fontSize: 10, color: "#adb5bd" },
  statTrend: { fontSize: 10, fontWeight: "600" },
});

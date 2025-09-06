import { StyleSheet, Text, View } from "react-native";
import RiskLevelBadge from "./RiskLevelBadge";
import { getOverallRiskMessage } from "../RiskMeter/utils/helpers";
import React from "react";

const OverallRiskSummary = ({ risks }: { risks: any }) => {
  const allItems = risks.flatMap((group: any) => group.items);
  const overallAverage = Math.round(
    allItems.reduce((sum: number, item: any) => sum + item.score, 0) /
      allItems.length
  );

  const highRiskCount = allItems.filter((item: any) => item.score > 30).length;
  const lowRiskCount = allItems.filter((item: any) => item.score <= 15).length;

  return (
    <View style={styles.summaryCard}>
      <View style={styles.summaryHeader}>
        <Text style={styles.summaryTitle}>Overall Health Risk</Text>
        <Text style={styles.summarySubtitle}>
          Based on current lifestyle and health factors
        </Text>
      </View>

      <View style={styles.summaryContent}>
        <View style={styles.overallRiskContainer}>
          <RiskLevelBadge score={overallAverage} />
          <View style={styles.overallRiskText}>
            <Text style={styles.overallRiskLabel}>Your Risk Level</Text>
            <Text style={styles.overallRiskDescription}>
              {getOverallRiskMessage(overallAverage)}
            </Text>
          </View>
        </View>

        <View style={styles.riskBreakdown}>
          <View style={styles.breakdownItem}>
            <View
              style={[styles.breakdownDot, { backgroundColor: "#00b894" }]}
            />
            <Text style={styles.breakdownText}>Low Risk: {lowRiskCount}</Text>
          </View>
          <View style={styles.breakdownItem}>
            <View
              style={[styles.breakdownDot, { backgroundColor: "#fd79a8" }]}
            />
            <Text style={styles.breakdownText}>High Risk: {highRiskCount}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default OverallRiskSummary;

const styles = StyleSheet.create({
  summaryCard: {
    backgroundColor: "white",
    borderRadius: 16,
    padding: 20,
    marginHorizontal: 24,
    marginBottom: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  summaryHeader: {
    marginBottom: 16,
  },
  summaryTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#2d3436",
    marginBottom: 4,
  },
  summarySubtitle: {
    fontSize: 14,
    color: "#6c757d",
  },
  summaryContent: {
    gap: 16,
  },
  overallRiskContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  overallRiskText: {
    flex: 1,
    marginLeft: 16,
  },
  overallRiskLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: "#2d3436",
    marginBottom: 4,
  },
  overallRiskDescription: {
    fontSize: 12,
    color: "#6c757d",
    lineHeight: 16,
  },
  riskBreakdown: {
    flexDirection: "row",
    gap: 20,
  },
  breakdownItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  breakdownDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 8,
  },
  breakdownText: {
    fontSize: 12,
    color: "#6c757d",
    fontWeight: "500",
  },
});

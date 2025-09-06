import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import RiskLevelBadge from "./RiskLevelBadge";
import { getRiskDescription } from "../RiskMeter/utils/helpers";
import React from "react";

const RiskItem = ({ item }: { item: any }) => {
  const getRiskColor = (score: number) => {
    if (score <= 15) return "#00b894";
    if (score <= 30) return "#fdcb6e";
    if (score <= 50) return "#fd79a8";
    return "#e74c3c";
  };

  const color = getRiskColor(item.score);

  return (
    <TouchableOpacity style={styles.riskItem}>
      <View style={styles.riskItemHeader}>
        <Text style={styles.riskItemName}>{item.name}</Text>
        <RiskLevelBadge score={item.score} size="small" />
      </View>

      <View style={styles.progressContainer}>
        <View style={styles.progressBarBackground}>
          <View
            style={[
              styles.progressBarFill,
              {
                width: `${item.score}%`,
                backgroundColor: color,
              },
            ]}
          />
        </View>
      </View>

      <Text style={styles.riskDescription}>
        {getRiskDescription(item.name, item.score)}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  riskItem: {
    backgroundColor: "#f8f9fa",
    borderRadius: 12,
    padding: 16,
  },
  riskItemHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  riskItemName: {
    fontSize: 14,
    fontWeight: "600",
    color: "#2d3436",
    flex: 1,
  },
  progressContainer: {
    marginBottom: 8,
  },
  progressBarBackground: {
    height: 4,
    backgroundColor: "#e9ecef",
    borderRadius: 2,
  },
  progressBarFill: {
    height: "100%",
    borderRadius: 2,
    minWidth: 4,
  },
  riskDescription: {
    fontSize: 12,
    color: "#6c757d",
    lineHeight: 16,
  },
});

export default RiskItem;

import React from "react";
import { StyleSheet, Text, View } from "react-native";

const RiskLevelBadge = ({
  score,
  size = "normal",
}: {
  score: number;
  size?: string;
}) => {
  const getRiskLevel = (score: number) => {
    if (score <= 15) return { level: "Low", color: "#00b894", bg: "#e8f5e8" };
    if (score <= 30)
      return { level: "Moderate", color: "#fdcb6e", bg: "#fef9e7" };
    if (score <= 50) return { level: "High", color: "#fd79a8", bg: "#fdf2f8" };
    return { level: "Very High", color: "#e74c3c", bg: "#fef2f2" };
  };

  const risk = getRiskLevel(score);
  const isSmall = size === "small";

  return (
    <View
      style={[
        styles.riskBadge,
        { backgroundColor: risk.bg },
        isSmall && styles.riskBadgeSmall,
      ]}
    >
      <Text
        style={[
          styles.riskScore,
          { color: risk.color },
          isSmall && styles.riskScoreSmall,
        ]}
      >
        {score}%
      </Text>
      <Text
        style={[
          styles.riskLevel,
          { color: risk.color },
          isSmall && styles.riskLevelSmall,
        ]}
      >
        {risk.level}
      </Text>
    </View>
  );
};

export default RiskLevelBadge;

const styles = StyleSheet.create({
  riskBadge: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 12,
    alignItems: "center",
    minWidth: 60,
  },
  riskBadgeSmall: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    minWidth: 45,
  },
  riskScore: {
    fontSize: 16,
    fontWeight: "800",
  },
  riskScoreSmall: {
    fontSize: 12,
  },
  riskLevel: {
    fontSize: 10,
    fontWeight: "600",
    marginTop: 2,
  },
  riskLevelSmall: {
    fontSize: 8,
    marginTop: 1,
  },
});

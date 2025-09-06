import React from "react";
import { StyleSheet, Text, View } from "react-native";
import RiskLevelBadge from "./RiskLevelBadge";
import RiskItem from "./RiskItem";

type groupIconsType = {
  Cardio: string;
  Metabolic: string;
  Musculoskeletal: string;
  "Mental Health": string;
  Respiratory: string;
};
const groupIcons: groupIconsType = {
  Cardio: "❤️",
  Metabolic: "⚡",
  Musculoskeletal: "🦴",
  "Mental Health": "🧠",
  Respiratory: "🫁",
};
const RiskGroup = ({ group }: { group: any }) => {
  const averageScore = Math.round(
    group.items.reduce((sum: number, item: any) => sum + item.score, 0) /
      group.items.length
  );
  return (
    <View style={styles.riskGroup}>
      <View style={styles.groupHeader}>
        <View style={styles.groupTitleContainer}>
          <Text style={styles.groupIcon}>
            {groupIcons[group?.group as keyof groupIconsType] || "🏥"}
          </Text>
          <View>
            <Text style={styles.groupTitle}>{group.group}</Text>
            <Text style={styles.groupSubtitle}>
              {group.items.length} risk factor
              {group.items.length !== 1 ? "s" : ""}
            </Text>
          </View>
        </View>
        <RiskLevelBadge score={averageScore} />
      </View>

      <View style={styles.groupItems}>
        {group.items.map((item: any, index: number) => (
          <RiskItem key={item.name} item={item} />
        ))}
      </View>
    </View>
  );
};
export default RiskGroup;
const styles = StyleSheet.create({
  riskGroup: {
    backgroundColor: "white",
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  groupHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#f1f3f4",
  },
  groupTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  groupIcon: {
    fontSize: 24,
    marginRight: 12,
  },
  groupTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#2d3436",
  },
  groupSubtitle: {
    fontSize: 12,
    color: "#6c757d",
  },
  groupItems: {
    gap: 12,
  },
});

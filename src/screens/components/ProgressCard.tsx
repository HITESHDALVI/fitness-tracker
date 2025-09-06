import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface ProgressCardProps {
  title: string;
  completed: number;
  target: number;
  period: string;
  icon: string;
  color?: string;
  isMain?: boolean;
}

const ProgressCard: React.FC<ProgressCardProps> = ({
  title,
  completed,
  target,
  period,
  icon,
  color = "#00b894",
  isMain = false,
}) => {
  const percentage = target > 0 ? Math.min((completed / target) * 100, 100) : 0;
  const isOnTrack = completed >= target;

  return (
    <View style={[styles.progressCard, isMain && styles.progressCardMain]}>
      <View style={styles.cardHeader}>
        <View style={[styles.iconContainer, { backgroundColor: `${color}15` }]}>
          <Text style={[styles.cardIcon, { color }]}>{icon}</Text>
        </View>
        <View style={styles.cardHeaderText}>
          <Text style={styles.cardTitle}>{title}</Text>
          <Text style={styles.cardPeriod}>{period}</Text>
        </View>
        {isOnTrack && (
          <View style={styles.achievementBadge}>
            <Text style={styles.achievementText}>🎯</Text>
          </View>
        )}
      </View>

      <View style={styles.progressNumbers}>
        <Text style={[styles.completedNumber, { color }]}>{completed}</Text>
        <Text style={styles.targetText}>of {target}</Text>
      </View>

      {/* Progress Bar */}
      <View style={styles.progressBarContainer}>
        <View style={styles.progressBarBackground}>
          <View
            style={[
              styles.progressBarFill,
              {
                width: `${percentage}%`,
                backgroundColor: isOnTrack ? color : "#fd79a8",
              },
            ]}
          />
        </View>
        <Text style={styles.percentageText}>{Math.round(percentage)}%</Text>
      </View>

      <View style={styles.statusContainer}>
        <Text
          style={[styles.statusText, { color: isOnTrack ? color : "#fd79a8" }]}
        >
          {isOnTrack ? "✓ On Track" : `${target - completed} left to goal`}
        </Text>
      </View>
    </View>
  );
};

export default ProgressCard;
const styles = StyleSheet.create({
  progressCard: {
    backgroundColor: "white",
    borderRadius: 16,
    padding: 20,
    marginHorizontal: 24,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  progressCardMain: {
    borderWidth: 2,
    borderColor: "#00b894",
    backgroundColor: "#f8fff8",
  },
  cardHeader: { flexDirection: "row", alignItems: "center", marginBottom: 16 },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  cardIcon: { fontSize: 18 },
  cardHeaderText: { flex: 1 },
  cardTitle: { fontSize: 16, fontWeight: "700", color: "#2d3436" },
  cardPeriod: { fontSize: 12, color: "#6c757d" },
  progressNumbers: {
    flexDirection: "row",
    alignItems: "baseline",
    marginBottom: 12,
  },
  completedNumber: { fontSize: 32, fontWeight: "800", marginRight: 8 },
  targetText: { fontSize: 16, color: "#6c757d", fontWeight: "500" },
  progressBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  progressBarBackground: {
    flex: 1,
    height: 8,
    backgroundColor: "#f1f3f4",
    borderRadius: 4,
    marginRight: 12,
  },
  progressBarFill: { height: "100%", borderRadius: 4, minWidth: 4 },
  percentageText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#6c757d",
    minWidth: 35,
  },
  statusContainer: { alignItems: "center" },
  statusText: { fontSize: 14, fontWeight: "600" },
  achievementBadge: {
    backgroundColor: "#fff3cd",
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  achievementText: {
    fontSize: 16,
  },
});

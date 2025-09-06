import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Goal } from "../../types";
import ProgressBar from "./ProgressBar";
import GoalIcon from "./GoalIcon";

export default function GoalCard({
  goal,
  onToggle,
  onSwap,
}: {
  goal: Goal;
  onToggle: () => void;
  onSwap: () => void;
}) {
  const getProgress = () => {
    if (goal.completedToday) return 100;

    return 0;
  };

  const progress = getProgress();
  const isCompleted = goal.completedToday;

  return (
    <View style={[styles.card, isCompleted && styles.cardCompleted]}>
      <View style={styles.cardHeader}>
        <GoalIcon title={goal.title} completed={isCompleted} />
        <View style={styles.headerContent}>
          <View style={styles.titleRow}>
            <Text style={[styles.title, isCompleted && styles.titleCompleted]}>
              {goal.title}
            </Text>
            {isCompleted && (
              <View style={styles.completedLabel}>
                <Text style={styles.completedLabelText}>Done</Text>
              </View>
            )}
          </View>
          <Text style={styles.description}>{goal.description}</Text>
          {goal.target && (
            <View style={styles.targetContainer}>
              <Text style={styles.targetLabel}>Target:</Text>
              <Text style={styles.targetValue}>{goal.target}</Text>
            </View>
          )}
        </View>
      </View>
      <ProgressBar
        progress={progress}
        color={isCompleted ? "#00b894" : "#e9ecef"}
      />
      <View style={styles.actions}>
        <TouchableOpacity
          onPress={onToggle}
          style={[
            styles.primaryButton,
            isCompleted && styles.primaryButtonCompleted,
          ]}
        >
          <Text
            style={[
              styles.primaryButtonText,
              isCompleted && styles.primaryButtonTextCompleted,
            ]}
          >
            {isCompleted ? "✓ Completed" : "Mark Complete"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          disabled={goal?.completedToday}
          onPress={() => {
            onSwap();
          }}
          style={styles.secondaryButton}
        >
          <Text style={styles.secondaryButtonText}>⚡ Swap</Text>
        </TouchableOpacity>
      </View>
      {isCompleted && (
        <View style={styles.motivationContainer}>
          <Text style={styles.motivationText}>
            Great job! You're building healthy habits 🌟
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    borderWidth: 1,
    borderColor: "transparent",
  },
  cardCompleted: {
    borderColor: "#00b894",
    backgroundColor: "#f8fff8",
  },

  cardHeader: {
    flexDirection: "row",
    marginBottom: 16,
  },

  headerContent: {
    flex: 1,
  },
  titleRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#2d3436",
    flex: 1,
  },
  titleCompleted: {
    color: "#00b894",
  },
  completedLabel: {
    backgroundColor: "#00b894",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 12,
  },
  completedLabelText: {
    fontSize: 10,
    color: "white",
    fontWeight: "600",
  },

  description: {
    fontSize: 14,
    color: "#6c757d",
    lineHeight: 20,
    marginBottom: 8,
  },

  targetContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  targetLabel: {
    fontSize: 12,
    color: "#adb5bd",
    fontWeight: "500",
    marginRight: 4,
  },
  targetValue: {
    fontSize: 12,
    color: "#495057",
    fontWeight: "600",
  },

  actions: {
    flexDirection: "row",
    gap: 12,
  },
  primaryButton: {
    flex: 2,
    backgroundColor: "#00b894",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#00b894",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  primaryButtonCompleted: {
    backgroundColor: "#6c757d",
    shadowColor: "#6c757d",
  },
  primaryButtonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "600",
  },
  primaryButtonTextCompleted: {
    color: "white",
  },
  secondaryButton: {
    flex: 1,
    backgroundColor: "#f8f9fa",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#dee2e6",
  },
  secondaryButtonText: {
    color: "#6c757d",
    fontSize: 14,
    fontWeight: "600",
  },

  motivationContainer: {
    marginTop: 12,
    backgroundColor: "rgba(0, 184, 148, 0.1)",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  motivationText: {
    fontSize: 12,
    color: "#00b894",
    fontWeight: "500",
    textAlign: "center",
  },
});

import React from "react";
import { StyleSheet, Text, View } from "react-native";

const GoalIcon = ({
  title,
  completed,
}: {
  title: string;
  completed: boolean;
}) => {
  const getIcon = (goalTitle: string) => {
    const title = goalTitle.toLowerCase();
    if (
      title.includes("move") ||
      title.includes("exercise") ||
      title.includes("walk") ||
      title.includes("run")
    )
      return "🏃‍♂️";
    if (
      title.includes("eat") ||
      title.includes("meal") ||
      title.includes("nutrition") ||
      title.includes("food")
    )
      return "🍽️";
    if (
      title.includes("calm") ||
      title.includes("meditat") ||
      title.includes("relax") ||
      title.includes("mindful")
    )
      return "😌";
    if (
      title.includes("water") ||
      title.includes("hydrat") ||
      title.includes("drink")
    )
      return "💧";
    if (title.includes("sleep") || title.includes("rest")) return "😴";
    if (title.includes("read") || title.includes("learn")) return "📚";
    return "🎯";
  };

  return (
    <View
      style={[styles.iconContainer, completed && styles.iconContainerCompleted]}
    >
      <Text style={styles.iconText}>{getIcon(title)}</Text>
      {completed && (
        <View style={styles.completedBadge}>
          <Text style={styles.completedCheck}>✓</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#f8f9fa",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 16,
    position: "relative",
  },
  iconContainerCompleted: {
    backgroundColor: "#e8f5e8",
  },
  iconText: {
    fontSize: 24,
  },
  completedBadge: {
    position: "absolute",
    top: -2,
    right: -2,
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: "#00b894",
    alignItems: "center",
    justifyContent: "center",
  },
  completedCheck: {
    fontSize: 10,
    color: "white",
    fontWeight: "bold",
  },
});
export default GoalIcon;

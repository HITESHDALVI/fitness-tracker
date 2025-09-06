import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ProgressBar = ({
  progress,
  color = "#00b894",
}: {
  progress: number;
  color: string;
}) => (
  <View style={styles.progressBarContainer}>
    <View style={styles.progressBarBackground}>
      <View
        style={[
          styles.progressBarFill,
          {
            width: `${Math.min(progress, 100)}%`,
            backgroundColor: color,
          },
        ]}
      />
    </View>
    <Text style={styles.progressText}>{Math.round(progress)}%</Text>
  </View>
);

const styles = StyleSheet.create({
  progressBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  progressBarBackground: {
    flex: 1,
    height: 6,
    backgroundColor: "#f1f3f4",
    borderRadius: 3,
    marginRight: 12,
  },
  progressBarFill: {
    height: "100%",
    borderRadius: 3,
    minWidth: 2,
  },
  progressText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#6c757d",
    minWidth: 35,
  },
});

export default ProgressBar;

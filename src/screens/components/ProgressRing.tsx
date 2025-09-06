import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ProgressRing = ({
  progress,
  size = 60,
  strokeWidth = 4,
  color = "#00b894",
}: {
  progress: number;
  size?: number;
  strokeWidth?: number;
  color?: string;
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <View style={[styles.progressRing, { width: size, height: size }]}>
      <View
        style={[
          styles.progressCircle,
          {
            width: size,
            height: size,
            borderRadius: size / 2,
            borderWidth: strokeWidth,
            borderColor: "#f1f3f4",
          },
        ]}
      >
        <View
          style={[
            styles.progressFill,
            {
              width: size - strokeWidth * 2,
              height: size - strokeWidth * 2,
              borderRadius: (size - strokeWidth * 2) / 2,
              borderWidth: strokeWidth,
              borderColor: color,
              transform: [{ rotate: `${(progress / 100) * 360}deg` }],
            },
          ]}
        />
        <Text style={styles.progressText}>{Math.round(progress)}%</Text>
      </View>
    </View>
  );
};

export default ProgressRing;

const styles = StyleSheet.create({
  progressRing: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  progressCircle: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  progressFill: {
    position: "absolute",
    borderRightColor: "transparent",
    borderBottomColor: "transparent",
    borderLeftColor: "transparent",
  },
  progressText: {
    fontSize: 12,
    fontWeight: "700",
    color: "#2d3436",
  },
});

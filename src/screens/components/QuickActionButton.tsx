import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { windowWidth } from "../../utils/constants";

const QuickActionButton = ({
  icon,
  title,
  onPress,
  color = "#00b894",
}: {
  icon: string;
  title: string;
  onPress: () => void;
  color: string;
}) => (
  <TouchableOpacity
    style={[styles.quickActionButton, { borderColor: color }]}
    onPress={() => {
      onPress();
    }}
  >
    <Text style={[styles.quickActionIcon, { color }]}>{icon}</Text>
    <Text style={[styles.quickActionText, { color }]}>{title}</Text>
  </TouchableOpacity>
);
export default QuickActionButton;

const styles = StyleSheet.create({
  quickActionButton: {
    flex: 1,
    minWidth: (windowWidth - 60) / 2,
    backgroundColor: "white",
    borderWidth: 2,
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  quickActionIcon: {
    fontSize: 24,
    marginBottom: 8,
  },
  quickActionText: {
    fontSize: 14,
    fontWeight: "600",
  },
});

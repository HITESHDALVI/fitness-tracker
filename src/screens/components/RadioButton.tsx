import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import React from "react";
type RadioButttonProps = {
  selected: boolean;
  onPress: () => void;
  label: string;
};
const RadioButton = ({ selected, onPress, label }: RadioButttonProps) => {
  return (
    <TouchableOpacity style={styles.radioContainer} onPress={onPress}>
      <View style={styles.radioButton}>
        {selected && <View style={styles.radioButtonSelected} />}
      </View>
      <View style={styles.radioTextContainer}>
        <Text style={[styles.radioLabel]}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  radioContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: "white",
    padding: 16,
    borderRadius: 12,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: "#dee2e6",
  },
  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#dee2e6",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 2,
    marginRight: 12,
  },
  radioButtonSelected: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#00b894",
  },
  radioTextContainer: {
    flex: 1,
  },
  radioLabel: {
    fontSize: 16,
    fontWeight: "500",
    color: "#2d3436",
    marginBottom: 2,
  },
  radioDescription: {
    fontSize: 14,
    color: "#6c757d",
    lineHeight: 18,
  },
});

export default RadioButton;

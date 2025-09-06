import { StyleSheet, Text, View } from "react-native";
import React from "react";
import RadioButton from "./RadioButton";

type RadioGroupProps = {
  title: string;
  options: {
    value: string;
    label: string;
  }[];
  selectedValue: string;
  handleSelection: (option: string) => void;
};
const RadioGroup = ({
  title,
  options,
  selectedValue,
  handleSelection,
}: RadioGroupProps) => (
  <View style={styles.radioGroup}>
    <Text style={styles.sectionTitle}>{title}</Text>
    {options.map((option) => (
      <RadioButton
        key={option?.value}
        selected={selectedValue === option?.value}
        onPress={() => {
          handleSelection(option?.value);
        }}
        label={option?.label}
      />
    ))}
  </View>
);

export default RadioGroup;

const styles = StyleSheet.create({
  radioGroup: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#495057",
    marginBottom: 16,
  },
});

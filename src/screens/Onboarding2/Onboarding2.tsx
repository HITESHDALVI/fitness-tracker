import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Button,
  StyleSheet,
  Picker,
} from "react-native";
import { Profile } from "../../types";

export default function Onboarding2({ navigation, route }: any) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("30");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("male");
  const [activityLevel, setActivityLevel] = useState("moderate");

  const onNext = () => {
    const profile: Profile = {
      name,
      age: Number(age),
      phone,
      gender: gender as any,
      activityLevel: activityLevel as any,
      createdAt: new Date().toISOString(),
    };
    navigation.navigate("Onboarding3", { profile });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Tell us about you</Text>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        placeholder="Age"
        keyboardType="number-pad"
        value={age}
        onChangeText={setAge}
        style={styles.input}
      />
      <TextInput
        placeholder="Phone"
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
        style={styles.input}
      />
      <Text style={{ marginTop: 8 }}>Gender</Text>
      <View style={{ borderWidth: 1, borderColor: "#ddd", marginBottom: 8 }}>
        {/* simple picker fallback for demo */}
        <Button
          title={gender}
          onPress={() =>
            setGender(
              gender === "male"
                ? "female"
                : gender === "female"
                ? "other"
                : "male"
            )
          }
        />
      </View>
      <Text style={{ marginTop: 8 }}>Activity Level</Text>
      <View style={{ borderWidth: 1, borderColor: "#ddd", marginBottom: 8 }}>
        <Button
          title={activityLevel}
          onPress={() =>
            setActivityLevel(
              activityLevel === "low"
                ? "moderate"
                : activityLevel === "moderate"
                ? "high"
                : "low"
            )
          }
        />
      </View>
      <Button title="Confirm" onPress={onNext} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 22, fontWeight: "700", marginBottom: 12 },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
  },
});

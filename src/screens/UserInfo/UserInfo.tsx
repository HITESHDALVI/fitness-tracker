import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import useUserInfo from "./hook/useUserInfo";
import { userInfoStyles } from "./styles/userInfoStyles";
import RadioGroup from "../components/RadioGroup";
import { activityOptions, genderOptions } from "./utils/constant";

export default function UserInfo({ navigation, route }: any) {
  const {
    name,
    age,
    phone,
    gender,
    activityLevel,
    onNext,
    handleStateChange,
    isFormValid,
  } = useUserInfo({
    navigation,
  });

  return (
    <SafeAreaView style={userInfoStyles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header Section */}
        <View style={userInfoStyles.header}>
          <View style={userInfoStyles.progressContainer}>
            <View style={userInfoStyles.progressBar}>
              <View style={userInfoStyles.progressFill} />
            </View>
            {/* <Text style={userInfoStyles.progressText}>Step 1 of 2</Text> */}
          </View>

          <Text style={userInfoStyles.title}>Tell us about you</Text>
          <Text style={userInfoStyles.subtitle}>
            Help us personalize your fitness experience
          </Text>
        </View>

        {/* Form Content */}
        <View style={userInfoStyles.formContainer}>
          {/* Basic Information */}
          <View style={userInfoStyles.inputGroup}>
            <Text style={userInfoStyles.inputLabel}>Name</Text>
            <TextInput
              placeholder="Enter your name"
              value={name}
              onChangeText={(value) => handleStateChange("name", value)}
              style={userInfoStyles.input}
              placeholderTextColor="#a0a0a0"
            />
          </View>

          <View style={userInfoStyles.inputRow}>
            <View
              style={[userInfoStyles.inputGroup, { flex: 1, marginRight: 12 }]}
            >
              <Text style={userInfoStyles.inputLabel}>Age</Text>
              <TextInput
                placeholder="Age"
                keyboardType="number-pad"
                value={age}
                onChangeText={(value) => handleStateChange("age", value)}
                style={userInfoStyles.input}
                placeholderTextColor="#a0a0a0"
                maxLength={2}
              />
            </View>

            <View style={[userInfoStyles.inputGroup, { flex: 2 }]}>
              <Text style={userInfoStyles.inputLabel}>Phone</Text>
              <TextInput
                placeholder="Phone number"
                keyboardType="phone-pad"
                value={phone}
                onChangeText={(value) => handleStateChange("phone", value)}
                style={userInfoStyles.input}
                placeholderTextColor="#a0a0a0"
              />
            </View>
          </View>

          {/* Gender Selection */}
          <RadioGroup
            title="Gender"
            options={genderOptions}
            selectedValue={gender}
            handleSelection={(value) => {
              handleStateChange("gender", value);
            }}
          />

          {/* Activity Level Selection */}
          <RadioGroup
            title="Activity Level"
            options={activityOptions}
            selectedValue={activityLevel}
            handleSelection={(value) => {
              handleStateChange("activityLevel", value);
            }}
          />
        </View>
      </ScrollView>

      {/* Bottom Button */}
      <View style={userInfoStyles.bottomContainer}>
        <TouchableOpacity
          style={[
            userInfoStyles.confirmButton,
            !isFormValid && userInfoStyles.confirmButtonDisabled,
          ]}
          onPress={onNext}
          disabled={!isFormValid}
        >
          <Text
            style={[
              userInfoStyles.confirmButtonText,
              !isFormValid && userInfoStyles.confirmButtonTextDisabled,
            ]}
          >
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

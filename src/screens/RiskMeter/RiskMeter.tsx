import React, { useState } from "react";
import { SafeAreaView, Text, View, StyleSheet, ScrollView } from "react-native";
import { risks } from "./utils/constant";
import RiskGroup from "../components/RiskGroup";
import OverallRiskSummary from "../components/OverallRiskSummary";

export default function RiskMeter() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.header}>
          <Text style={styles.title}>Risk-o-meter</Text>
          <Text style={styles.subtitle}>
            Your personalized health risk assessment
          </Text>
        </View>

        <OverallRiskSummary risks={risks} />
        <View style={styles.riskGroupsContainer}>
          <Text style={styles.sectionTitle}>Risk Categories</Text>
          {risks.map((riskGroup, index) => (
            <RiskGroup key={riskGroup.group} group={riskGroup} />
          ))}
        </View>
        <View style={styles.recommendationsSection}>
          <Text style={styles.sectionTitle}>Recommendations</Text>
          <View style={styles.recommendationsList}>
            <View style={styles.recommendationItem}>
              <Text style={styles.recommendationIcon}>🏃‍♂️</Text>
              <View style={styles.recommendationContent}>
                <Text style={styles.recommendationTitle}>Stay Active</Text>
                <Text style={styles.recommendationDesc}>
                  Regular exercise can reduce multiple risk factors
                </Text>
              </View>
            </View>
            <View style={styles.recommendationItem}>
              <Text style={styles.recommendationIcon}>🥗</Text>
              <View style={styles.recommendationContent}>
                <Text style={styles.recommendationTitle}>Healthy Diet</Text>
                <Text style={styles.recommendationDesc}>
                  Balanced nutrition supports overall wellness
                </Text>
              </View>
            </View>
            <View style={styles.recommendationItem}>
              <Text style={styles.recommendationIcon}>🩺</Text>
              <View style={styles.recommendationContent}>
                <Text style={styles.recommendationTitle}>Regular Checkups</Text>
                <Text style={styles.recommendationDesc}>
                  Monitor your health with healthcare provider
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  scrollContent: {
    paddingBottom: 20,
    flexGrow: 1,
  },

  header: {
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: "800",
    color: "#2d3436",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#6c757d",
    lineHeight: 22,
  },

  recommendationsSection: {
    paddingHorizontal: 24,
    marginTop: 8,
    marginBottom: 24,
  },
  recommendationsList: {
    gap: 12,
  },
  recommendationItem: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  recommendationIcon: {
    fontSize: 24,
    marginRight: 16,
  },
  recommendationContent: {
    flex: 1,
  },
  recommendationTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#2d3436",
    marginBottom: 2,
  },
  recommendationDesc: {
    fontSize: 12,
    color: "#6c757d",
    lineHeight: 16,
  },
  riskGroupsContainer: {
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#2d3436",
    marginBottom: 16,
  },
});

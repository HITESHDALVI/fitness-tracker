import React from "react";
import { SafeAreaView, Text, View, StyleSheet, ScrollView } from "react-native";
import ProgressCard from "../components/ProgressCard";
import SummaryStatCard from "../components/SummaryStatCard";
import useProgress from "./hook/useProgress";

export default function Progress() {
  const { progress, summaryCards, progressCards } = useProgress({});
  if (progress.loading) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>Loading progress...</Text>
        </View>
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.header}>
          <Text style={styles.title}>Progress Summary</Text>
          <Text style={styles.subtitle}>
            Track your wellness journey and achievements
          </Text>
        </View>

        {progressCards.map((card, index) => (
          <View key={index} style={card.isMain ? {} : styles.gridRow}>
            <ProgressCard {...card} />
          </View>
        ))}

        <View style={styles.summarySection}>
          <Text style={styles.sectionTitle}>Quick Stats</Text>
          <View style={styles.summaryGrid}>
            {summaryCards.map((card, index) => (
              <SummaryStatCard key={index} {...card} />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f8f9fa" },
  scrollContent: { paddingBottom: 20 },
  loadingContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
  loadingText: { fontSize: 16, color: "#6c757d" },
  header: { paddingHorizontal: 24, paddingTop: 20, paddingBottom: 24 },
  title: { fontSize: 28, fontWeight: "800", color: "#2d3436", marginBottom: 8 },
  subtitle: { fontSize: 16, color: "#6c757d", lineHeight: 22 },
  progressGrid: { paddingHorizontal: 0 },
  gridRow: { marginBottom: 0 },
  summarySection: { paddingHorizontal: 24, marginTop: 8, marginBottom: 24 },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#2d3436",
    marginBottom: 16,
  },
  summaryGrid: { flexDirection: "row", flexWrap: "wrap", gap: 12 },
});

import React from "react";
import { SafeAreaView, View, Text, ScrollView } from "react-native";
import GoalCard from "../components/GoalCard";
import useDashboard from "./hooks/useDashboard";
import StatsCard from "../components/StatsCard";
import ProgressRing from "../components/ProgressRing";
import { dashboardStyles } from "./style/dashboardStyle";
import QuickActionButton from "../components/QuickActionButton";

export default function Dashboard({ navigation }: any) {
  const {
    completedToday,
    swap,
    toggle,
    name,
    goals,
    totalGoals,
    completionPercentage,
    currentStreak,
    todayFormatted,
  } = useDashboard({});

  return (
    <SafeAreaView style={dashboardStyles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={dashboardStyles.scrollContent}
      >
        <View style={dashboardStyles.header}>
          <View style={dashboardStyles.welcomeContainer}>
            <Text style={dashboardStyles.dateText}>{todayFormatted}</Text>
            <Text style={dashboardStyles.welcomeText}>Hi {name}! 👋</Text>
            <Text style={dashboardStyles.motivationText}>
              Let's make today amazing
            </Text>
          </View>

          <View style={dashboardStyles.progressContainer}>
            <ProgressRing progress={completionPercentage} />
          </View>
        </View>

        <View style={dashboardStyles.summaryContainer}>
          <Text style={dashboardStyles.sectionTitle}>Today's Progress</Text>
          <View style={dashboardStyles.summaryCard}>
            <Text style={dashboardStyles.completionText}>
              <Text style={dashboardStyles.completionNumber}>
                {completedToday}
              </Text>
              <Text style={dashboardStyles.completionTotal}>
                {" "}
                of {totalGoals}
              </Text>
              <Text style={dashboardStyles.completionLabel}>
                {" "}
                goals completed
              </Text>
            </Text>

            {completionPercentage === 100 && (
              <View style={dashboardStyles.celebrationContainer}>
                <Text style={dashboardStyles.celebrationEmoji}>🎉</Text>
                <Text style={dashboardStyles.celebrationText}>
                  Perfect day!
                </Text>
              </View>
            )}
          </View>
        </View>

        <View style={dashboardStyles.statsContainer}>
          <View style={dashboardStyles.statsRow}>
            <StatsCard
              title="Current Streak"
              value={`${currentStreak} days`}
              icon="🔥"
              color="#ff6b6b"
              subtitle=""
            />
            <StatsCard
              title="This Week"
              value={`${Math.round(completionPercentage)}%`}
              subtitle="Average"
              icon="📊"
              color="#4ecdc4"
            />
            <StatsCard
              title="Next Goal"
              value="2h left"
              subtitle="Hydration"
              icon="⏰"
              color="#ffe66d"
            />
          </View>
        </View>

        <View style={dashboardStyles.goalsSection}>
          <View style={dashboardStyles.goalsSectionHeader}>
            <Text style={dashboardStyles.sectionTitle}>
              Your Wellness Goals
            </Text>
          </View>
          <View style={dashboardStyles.goalsContainer}>
            {goals.map((g) => (
              <GoalCard
                key={g.id}
                goal={g}
                onToggle={() => {
                  toggle(g.id);
                }}
                onSwap={() => {
                  swap(g.id);
                }}
              />
            ))}
          </View>
        </View>

        <View style={dashboardStyles.quickActionsSection}>
          <Text style={dashboardStyles.sectionTitle}>Quick Actions</Text>
          <View style={dashboardStyles.quickActionsContainer}>
            <QuickActionButton
              icon="📈"
              title="View Progress"
              onPress={() => navigation.navigate("Progress")}
              color="#00b894"
            />
            <QuickActionButton
              icon="⚡"
              title="Risk-o-meter"
              onPress={() => navigation.navigate("RiskMeter")}
              color="#fd79a8"
            />
          </View>
        </View>
        <View style={dashboardStyles.motivationSection}>
          <View style={dashboardStyles.motivationCard}>
            <Text style={dashboardStyles.motivationTitle}>💪 Keep Going!</Text>
            <Text style={dashboardStyles.motivationQuote}>
              "Every small step counts towards your bigger goals. You're doing
              great!"
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

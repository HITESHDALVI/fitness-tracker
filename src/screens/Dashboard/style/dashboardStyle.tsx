import { StyleSheet } from "react-native";

export const dashboardStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  scrollContent: {
    paddingBottom: 20,
    flexGrow: 1,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 24,
  },
  welcomeContainer: {
    flex: 1,
  },
  dateText: {
    fontSize: 14,
    color: "#6c757d",
    fontWeight: "500",
    marginBottom: 4,
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: "800",
    color: "#2d3436",
    marginBottom: 4,
  },
  motivationText: {
    fontSize: 16,
    color: "#6c757d",
    fontWeight: "500",
  },
  progressContainer: {
    marginLeft: 16,
  },

  summaryContainer: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#2d3436",
    marginBottom: 16,
  },
  summaryCard: {
    backgroundColor: "white",
    borderRadius: 16,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    alignItems: "center",
  },
  completionText: {
    textAlign: "center",
  },
  completionNumber: {
    fontSize: 32,
    fontWeight: "800",
    color: "#00b894",
  },
  completionTotal: {
    fontSize: 18,
    fontWeight: "600",
    color: "#6c757d",
  },
  completionLabel: {
    fontSize: 16,
    color: "#6c757d",
    fontWeight: "500",
  },
  celebrationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
    padding: 12,
    backgroundColor: "#00b89415",
    borderRadius: 12,
  },
  celebrationEmoji: {
    fontSize: 20,
    marginRight: 8,
  },
  celebrationText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#00b894",
  },

  statsContainer: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  statsRow: {
    flexDirection: "row",
    gap: 12,
  },
  goalsSection: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  goalsSectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  seeAllText: {
    fontSize: 14,
    color: "#00b894",
    fontWeight: "600",
  },
  goalsContainer: {
    gap: 12,
  },

  motivationSection: {
    paddingHorizontal: 24,
  },
  motivationCard: {
    backgroundColor: "#6c5ce7",
    borderRadius: 16,
    padding: 20,
    alignItems: "center",
  },
  motivationTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "white",
    marginBottom: 8,
  },
  motivationQuote: {
    fontSize: 14,
    color: "rgba(255,255,255,0.9)",
    textAlign: "center",
    lineHeight: 20,
    fontStyle: "italic",
  },
  quickActionsSection: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  quickActionsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
});

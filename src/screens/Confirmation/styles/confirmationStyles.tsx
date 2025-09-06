import { StyleSheet } from "react-native";

export const confirmationStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },

  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingSpinner: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: "#e9ecef",
    borderTopColor: "#00b894",
    marginBottom: 16,
  },
  loadingText: {
    fontSize: 16,
    color: "#6c757d",
    fontWeight: "500",
  },

  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 120,
  },

  iconContainer: {
    alignItems: "center",
    marginBottom: 40,
    position: "relative",
    flexDirection: "column",
  },
  successCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#00b894",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#00b894",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 8,
  },
  checkmark: {
    fontSize: 36,
    color: "white",
    fontWeight: "bold",
  },
  celebrationEmojis: {
    position: "absolute",
    top: -10,
    right: -20,
    flexDirection: "row",
  },

  messageContainer: {
    alignItems: "center",
    marginBottom: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    color: "#2d3436",
    textAlign: "center",
    lineHeight: 30,
  },
  nameText: {
    fontSize: 28,
    fontWeight: "800",
    color: "#00b894",
    textAlign: "center",
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: "#6c757d",
    textAlign: "center",
    lineHeight: 22,
    marginHorizontal: 20,
  },

  summaryContainer: {
    marginBottom: 32,
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
  },
  summaryTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#2d3436",
    marginBottom: 16,
    textAlign: "center",
  },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#f1f3f4",
  },
  summaryLabel: {
    fontSize: 14,
    color: "#6c757d",
    fontWeight: "500",
  },
  summaryValue: {
    fontSize: 14,
    color: "#2d3436",
    fontWeight: "600",
  },

  featuresContainer: {
    marginTop: 8,
  },
  featuresTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#495057",
    marginBottom: 16,
    textAlign: "center",
  },
  featuresList: {
    gap: 12,
  },
  featureItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(0, 184, 148, 0.1)",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
  },
  featureIcon: {
    fontSize: 20,
    marginRight: 12,
  },
  featureText: {
    fontSize: 14,
    color: "#2d3436",
    fontWeight: "500",
    flex: 1,
  },

  bottomContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#f8f9fa",
    paddingHorizontal: 24,
    paddingVertical: 20,
    paddingBottom: 34,
    borderTopWidth: 1,
    borderTopColor: "#e9ecef",
  },
  dashboardButton: {
    backgroundColor: "#00b894",
    paddingVertical: 18,
    paddingHorizontal: 32,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    shadowColor: "#00b894",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 8,
  },
  dashboardButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "700",
    marginRight: 8,
  },
  buttonArrow: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

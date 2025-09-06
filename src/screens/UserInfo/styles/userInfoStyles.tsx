import { Platform, StyleSheet } from "react-native";

export const userInfoStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
    paddingTop: Platform.OS === "ios" ? 0 : 30,
  },

  // Header Styles
  header: {
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 32,
  },
  progressContainer: {
    marginBottom: 32,
  },
  progressBar: {
    height: 4,
    backgroundColor: "#e9ecef",
    borderRadius: 2,
    marginBottom: 8,
  },
  progressFill: {
    height: "100%",
    width: "50%",
    backgroundColor: "#00b894",
    borderRadius: 2,
  },
  progressText: {
    fontSize: 12,
    color: "#6c757d",
    fontWeight: "500",
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

  // Form Styles
  formContainer: {
    paddingHorizontal: 24,
    paddingBottom: 100, // Space for bottom button
  },
  inputGroup: {
    marginBottom: 24,
  },
  inputRow: {
    flexDirection: "row",
    marginBottom: 24,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: "#495057",
    marginBottom: 8,
  },
  input: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#dee2e6",
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 12,
    fontSize: 16,
    color: "#2d3436",
  },

  // Bottom Button Styles
  bottomContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#f8f9fa",
    paddingHorizontal: 24,
    paddingVertical: 20,
    paddingBottom: 34, // Safe area padding
    borderTopWidth: 1,
    borderTopColor: "#e9ecef",
  },
  confirmButton: {
    backgroundColor: "#00b894",
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    shadowColor: "#00b894",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  confirmButtonDisabled: {
    backgroundColor: "#dee2e6",
    shadowOpacity: 0,
    elevation: 0,
  },
  confirmButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  confirmButtonTextDisabled: {
    color: "#adb5bd",
  },
});

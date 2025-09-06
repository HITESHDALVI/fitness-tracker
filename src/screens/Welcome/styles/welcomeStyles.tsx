import { StyleSheet } from "react-native";

export const welcomeStyles = StyleSheet.create({
  containerMinimal: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  contentMinimal: {
    flex: 1,
    justifyContent: "space-between",
    padding: 32,
    paddingTop: 80,
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 40,
  },
  logoCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#e8f5e8",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  logoEmoji: {
    fontSize: 36,
  },
  titleMinimal: {
    fontSize: 28,
    fontWeight: "700",
    color: "#2d3436",
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headlineMinimal: {
    fontSize: 36,
    fontWeight: "800",
    color: "#2d3436",
    textAlign: "center",
    lineHeight: 42,
  },
  subMinimal: {
    fontSize: 16,
    color: "#636e72",
    textAlign: "center",
    marginTop: 24,
    lineHeight: 22,
    marginHorizontal: 20,
  },
  actionContainer: {
    marginTop: 40,
  },
  ctaButton: {
    backgroundColor: "#00b894",
    paddingVertical: 18,
    paddingHorizontal: 48,
    borderRadius: 12,
    alignItems: "center",
  },
  ctaButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});

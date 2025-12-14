import { StyleSheet } from "react-native";

export const userStyles = StyleSheet.create({
  container: {
    paddingHorizontal: "4%",
    paddingVertical: "6%",
    backgroundColor: "rgba(59, 70, 228, 0.8))",
  },

  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffffff",
  },

  subtitle: {
    fontSize: 14,
    color: "rgba(255,255,255,0.8)",
    marginTop: 4,
  },

  addButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "rgba(255,255,255,0.2)",
    justifyContent: "center",
    alignItems: "center",
  },

  searchContainer: {
    position: "relative",
    justifyContent: "center",
  },

  searchIcon: {
    position: "absolute",
    left: 12,
  },

  searchInput: {
    height: 44,
    borderRadius: 16,
    backgroundColor: "#ffffff",
    paddingLeft: 40,
    paddingRight: 16,
    fontSize: 14,
    color: "#111827",
  },
});

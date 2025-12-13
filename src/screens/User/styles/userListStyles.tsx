import { StyleSheet } from "react-native";

export const userListStyles = StyleSheet.create({
  list: {
    padding: "4%",
    marginVertical: "2%",
    flexGrow: 1,
  },

  card: {
    backgroundColor: "#ffffff",
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
  },

  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",
  },

  avatarText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },

  info: {
    flex: 1,
    marginHorizontal: 12,
  },

  nameRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginBottom: 4,
  },

  name: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
    flexShrink: 1,
  },

  activeDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#22c55e",
  },

  meta: {
    fontSize: 13,
    color: "#6b7280",
    marginBottom: 2,
  },

  email: {
    fontSize: 13,
    color: "#4b5563",
  },

  moreBtn: {
    width: 32,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
  },
});

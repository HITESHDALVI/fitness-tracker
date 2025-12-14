import { StyleSheet } from "react-native";

export const userListStyles = StyleSheet.create({
  list: {
    padding: "4%",
    flexGrow: 1,
    backgroundColor: "#E4E4E4",
  },

  card: {
    backgroundColor: "#ffffff",
    borderRadius: 20,
    padding: "5%",
    paddingHorizontal: "4%",
    // marginVertical: "2%",
    borderWidth: 0.25,
    borderColor: "rgba(238, 238, 238, 0.8)",
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
    fontSize: 24,
    fontWeight: "400",
  },

  info: {
    flex: 1,
    marginHorizontal: 12,
  },

  name: {
    fontSize: 16,
    marginBottom: 2,
    color: "rgba(0, 0, 3, 0.8)",
    fontWeight: "500",
    letterSpacing: 0.4,
  },

  email: {
    fontSize: 14,
    color: "rgba(79, 80, 83, 0.8)",
    fontWeight: "400",
    letterSpacing: 0.25,
  },

  moreBtn: {
    width: 42,
    height: 42,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#262AB8",
    borderRadius: 50,
  },
  container: {
    marginBottom: 12,
  },

  deleteBg: {
    position: "absolute",
    right: 0,
    top: 0,
    bottom: 0,
    width: "100%",
    backgroundColor: "#ef4444",
    justifyContent: "center",
    alignItems: "flex-end",
    paddingRight: "4%",
    borderRadius: 20,
  },
});

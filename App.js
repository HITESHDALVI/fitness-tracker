import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import AppNavigator from "./src/utils/navigation/Stack";
import { ApolloProvider } from "@apollo/client/react";
import { client } from "./src/services/applloClient";

export default function App() {
  return (
    <ApolloProvider client={client}>
      <AppNavigator />
      <StatusBar style="auto" />
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

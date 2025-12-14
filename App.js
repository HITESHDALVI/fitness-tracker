import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import AppNavigator from "./src/utils/navigation/Stack";
import { ApolloProvider } from "@apollo/client/react";
import { client } from "./src/services/applloClient";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  return (
    <ApolloProvider client={client}>
      <GestureHandlerRootView>
        <AppNavigator />
        <StatusBar style="auto" />
      </GestureHandlerRootView>
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

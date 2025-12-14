import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import { userStyles } from "./styles/userStyles";

interface Props {
  filteredUsers: any[];
  searchQuery: string;
  setSearchQuery: (value: string) => void;
}

const UsersHeader = ({ navigation }: any) => {
  return (
    <View style={userStyles.container}>
      <View style={userStyles.headerRow}>
        <View>
          <Text style={userStyles.title}>Users</Text>
          <Text style={userStyles.subtitle}>{10} total</Text>
        </View>

        <TouchableOpacity
          style={userStyles.addButton}
          onPress={() => {
            navigation.navigate("UserInfo");
          }}
        >
          <Feather name="plus" size={24} color="#ffffff" />
        </TouchableOpacity>
      </View>

      <View style={userStyles.searchContainer}>
        <Feather
          name="search"
          size={18}
          color="#9ca3af"
          style={userStyles.searchIcon}
        />
        <TextInput
          placeholder="Search users..."
          placeholderTextColor="#9ca3af"
          value={""}
          onChangeText={() => {}}
          style={userStyles.searchInput}
        />
      </View>
    </View>
  );
};

export default UsersHeader;

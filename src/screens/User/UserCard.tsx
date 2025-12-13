import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { userListStyles } from "./styles/userListStyles";
import Feather from "react-native-vector-icons/Feather";
import { UserCardProps } from "./types";

const colors = ["#00b894", "#6c5ce7", "#0984e3", "#e84393"];

const UserCard: React.FC<UserCardProps> = ({
  item: user,
  getInitials,
  index,
}) => {
  const isActive = user.activity === "high";
  return (
    <TouchableOpacity style={userListStyles.card}>
      <View style={userListStyles.row}>
        <View
          style={[
            userListStyles.avatar,
            { backgroundColor: colors[index % colors.length] },
          ]}
        >
          <Text style={userListStyles.avatarText}>
            {getInitials(user.name)}
          </Text>
        </View>

        <View style={userListStyles.info}>
          <View style={userListStyles.nameRow}>
            <Text style={userListStyles.name} numberOfLines={1}>
              {user.name}
            </Text>

            {user.activity === "high" && (
              <View style={userListStyles.activeDot} />
            )}
          </View>

          <Text style={userListStyles.meta}>
            {user.age} years • {user.gender}
          </Text>

          <Text style={userListStyles.email} numberOfLines={1}>
            {user.email}
          </Text>
        </View>

        <TouchableOpacity style={userListStyles.moreBtn}>
          <Feather name="more-vertical" size={18} color="#9ca3af" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default UserCard;

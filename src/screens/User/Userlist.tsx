import React, { useCallback } from "react";
import { FlatList } from "react-native";
import { userListStyles } from "./styles/userListStyles";
import { useQuery } from "@apollo/client/react";
import { GET_USERS } from "../../services/queries/queries";
import UserCard from "./UserCard";
import { GetUsersResponse } from "./types";
import UsersHeader from "./UsersHeader";

const UserList = () => {
  const getInitials = useCallback((name: string) => {
    return name
      .trim()
      .split(/\s+/)
      .map((word) => word[0])
      .join("")
      .toUpperCase();
  }, []);
  const { data } = useQuery<GetUsersResponse>(GET_USERS);
  const users = data?.users ?? [];
  console.log({ data });

  return (
    <>
      <UsersHeader />
      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => (
          <UserCard item={item} getInitials={getInitials} index={index} />
        )}
        contentContainerStyle={userListStyles.list}
        showsVerticalScrollIndicator={false}
      />
    </>
  );
};

export default UserList;

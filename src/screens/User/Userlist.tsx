import React, { useCallback, useEffect, useState } from "react";
import { FlatList } from "react-native";
import { userListStyles } from "./styles/userListStyles";
import { useMutation, useQuery } from "@apollo/client/react";
import { GET_USERS } from "../../services/queries/queries";
import UserCard from "./UserCard";
import { GetUsersResponse, User } from "./types";
import UsersHeader from "./UsersHeader";
import { DELETE_USER } from "../../services/queries/mutation";

const UserList = ({ navigation, route }: any) => {
  const getInitials = useCallback((name: string) => {
    return name
      .trim()
      .split(/\s+/)
      .map((word) => word[0])
      .join("")
      .toUpperCase();
  }, []);
  const { data } = useQuery<GetUsersResponse>(GET_USERS);
  const [deleteUser] = useMutation(DELETE_USER, {
    refetchQueries: [
      {
        query: GET_USERS,
      },
    ],
  });
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    if (data?.users) {
      setUsers(data.users);
    }
  }, [data]);
  const handleDelete = useCallback(
    async (id: string) => {
      setUsers((prev) => prev.filter((user) => user.id !== id));
      try {
        await deleteUser({
          variables: { deleteUserId: id },
        });
      } catch (err) {
        console.log("Delete failed", err);
      }
    },
    [deleteUser]
  );
  const handleNavigate = useCallback((id: string) => {
    navigation.navigate("UserInfo", {
      type: "edit",
      id: id,
    });
  }, []);

  return (
    <>
      <UsersHeader navigation={navigation} route={route} />
      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => (
          <UserCard
            item={item}
            getInitials={getInitials}
            index={index}
            onPress={handleNavigate}
            onDelete={handleDelete}
          />
        )}
        contentContainerStyle={userListStyles.list}
        showsVerticalScrollIndicator={false}
      />
    </>
  );
};

export default UserList;

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useQuery } from "@apollo/client/react";
import { GetUsersResponse } from "./types";
import { GET_USER } from "../../services/queries/queries";

type Props = {};

const UserDetails = (props: Props) => {
  const { data } = useQuery<GetUsersResponse>(GET_USER);

  return (
    <View>
      <Text>UserDetails</Text>
    </View>
  );
};

export default UserDetails;

const styles = StyleSheet.create({});

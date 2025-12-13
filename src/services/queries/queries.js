import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query Users {
    users {
      id
      name
      age
      email
      phone
      gender
      activity
    }
  }
`;

export const GET_USER = gql`
  query User($userId: ID!) {
    user(id: $userId) {
      id
      name
      age
      email
      phone
      gender
      activity
    }
  }
`;

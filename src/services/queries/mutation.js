import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation CreateUser(
    $name: String!
    $email: String!
    $phone: String!
    $age: Int
    $gender: Gender
    $activity: Activity
  ) {
    createUser(
      name: $name
      email: $email
      phone: $phone
      age: $age
      gender: $gender
      activity: $activity
    ) {
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
export const DELETE_USER = gql`
  mutation DeleteUser($deleteUserId: ID!) {
    deleteUser(id: $deleteUserId) {
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

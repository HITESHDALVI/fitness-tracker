export interface User {
  id: string;
  name: string;
  email: string;
  gender: "male" | "female";
  age: number;
  phone: string;
  activity: "high" | "low" | "moderate";
}

export interface GetUsersResponse {
  users: User[];
}

export interface UserCardProps {
  item: User;
  getInitials: (name: string) => string;
  index: number;
  onPress: (id: string) => void;
  onDelete: (id: any) => Promise<void>;
}

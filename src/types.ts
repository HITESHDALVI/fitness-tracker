export type Gender = "male" | "female" | "other";

export type Profile = {
  name: string;
  age: number;
  phone?: string;
  gender?: Gender;
  activityLevel?: "low" | "moderate" | "high";
  createdAt?: string;
};

export type Goal = {
  id: number;
  title: string;
  description?: string;
  target: string;
  completedToday: boolean;
  swap_description: string;
  swapped: boolean;
  og_description: string;
};

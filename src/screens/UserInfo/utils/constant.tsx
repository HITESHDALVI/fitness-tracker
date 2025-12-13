export const initialState = {
  name: "",
  age: "",
  phone: "",
  gender: "",
  activityLevel: "moderate",
  email: "",
};
export const genderOptions = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
  { value: "other", label: "Other" },
];

export const activityOptions = [
  {
    value: "low",
    label: "Low Activity",
    description: "Sedentary job, little to no exercise",
  },
  {
    value: "moderate",
    label: "Moderate Activity",
    description: "Light exercise 1-3 days per week",
  },
  {
    value: "high",
    label: "High Activity",
    description: "Intense exercise 4+ days per week",
  },
];

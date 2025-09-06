import { Goal } from "../../../types";

export const defaultGoals: Goal[] = [
  {
    id: 1,
    title: "Move",
    description: "20 min walk",
    target: "20 min",
    completedToday: false,
    swap_description: "10 min stretch",
    og_description: "20 min walk",
    swapped: false,
  },
  {
    id: 2,
    title: "Eat",
    description: "Healthy meals",
    target: "3 meals",
    completedToday: false,
    swap_description: "Morning Breakfast",
    og_description: "Healthy meals",
    swapped: false,
  },
  {
    id: 3,
    title: "Calm",
    description: "10 min meditation",
    target: "10 min",
    completedToday: false,
    swap_description: "15 min yoga",
    og_description: "10 min meditation",
    swapped: false,
  },
];

import { Goal } from "../../../types";

export const defaultGoals: Goal[] = [
  {
    id: "g1",
    title: "Move",
    description: "20 min walk",
    target: "20 min",
    completedToday: false,
  },
  {
    id: "g2",
    title: "Eat",
    description: "Healthy meals",
    target: "3 meals",
    completedToday: false,
  },
  {
    id: "g3",
    title: "Calm",
    description: "Meditation",
    target: "10 min",
    completedToday: false,
  },
];

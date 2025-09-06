import { useEffect, useState } from "react";
import { loadGoals, loadProfile, saveGoals } from "../../../utils/storage";
import { Goal } from "../../../types";

type Props = {};

const useDashboard = ({}) => {
  const [goals, setGoals] = useState<Goal[]>([]);
  const [name, setName] = useState<string>("");
  const completedToday = goals.filter((g) => g.completedToday).length;
  const totalGoals = goals.length;
  const completionPercentage =
    totalGoals > 0 ? (completedToday / totalGoals) * 100 : 0;

  const currentStreak = 5;

  const today = new Date();
  const todayFormatted = today.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
  useEffect(() => {
    const fetch = async () => {
      const p = await loadProfile();
      if (p) setName(p.name);
      const g = await loadGoals();
      if (g) setGoals(g);
    };
    fetch();
  }, []);

  const toggle = (id: number) => {
    const next = goals.map((g) =>
      g.id === id ? { ...g, completedToday: !g.completedToday } : g
    );
    setGoals(next);
    saveGoals(next).catch(console.warn);
  };

  const swap = (id: number) => {
    const next = goals.map((g) =>
      g.id === id
        ? {
            ...g,
            description: g.swapped ? g.og_description : g.swap_description,
            swapped: !g?.swapped,
          }
        : g
    );

    setGoals(next);
    saveGoals(next).catch(console.warn);
  };

  return {
    completedToday,
    swap,
    toggle,
    name,
    goals,
    totalGoals,
    completionPercentage,
    currentStreak,
    todayFormatted,
  };
};

export default useDashboard;

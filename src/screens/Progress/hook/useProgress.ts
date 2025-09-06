import React, { useEffect, useState } from "react";
import { loadGoals } from "../../../utils/storage";

type Props = {};
const targets = {
  today: 3,
  week: 21,
  month: 90,
};

const initialState = {
  today: 0,
  week: 0,
  month: 0,
  loading: true,
};
const useProgress = (props: Props) => {
  const [progress, setProgress] = useState(initialState);

  const totalCompleted = progress.today + progress.week + progress.month;
  const averageDaily = progress.week / 7;
  const progressCards = [
    {
      title: "Today's Goals",
      completed: progress.today,
      target: targets.today,
      period: "Today",
      icon: "🎯",
      color: "#00b894",
      isMain: true,
    },
    {
      title: "This Week",
      completed: progress.week,
      target: targets.week,
      period: "7 days",
      icon: "📅",
      color: "#4ecdc4",
    },
    {
      title: "This Month",
      completed: progress.month,
      target: targets.month,
      period: "30 days",
      icon: "📊",
      color: "#6c5ce7",
    },
  ];

  const summaryCards = [
    {
      title: "Total Completed",
      value: totalCompleted,
      subtitle: "All time",
      color: "#00b894",
    },
    {
      title: "Daily Average",
      value: averageDaily.toFixed(1),
      subtitle: "This week",
      trend: 12,
      color: "#fd79a8",
    },
    {
      title: "Best Streak",
      value: "5 days",
      subtitle: "Personal record",
      color: "#fdcb6e",
    },
    {
      title: "Success Rate",
      value: `${Math.round((progress.today / targets.today) * 100)}%`,
      subtitle: "Today",
      trend: -5,
      color: "#74b9ff",
    },
  ];
  const fetchProgress = async () => {
    try {
      const g: any[] | null = await loadGoals();
      if (g) {
        const t = g.filter((x) => x.completedToday).length;
        setProgress({
          today: t,
          week: t * 5,
          month: t * 20,
          loading: false,
        });
      } else {
        setProgress((prev) => ({ ...prev, loading: false }));
      }
    } catch (error) {
      console.warn("Error loading goals:", error);
      setProgress((prev) => ({ ...prev, loading: false }));
    }
  };

  useEffect(() => {
    fetchProgress();
  }, []);
  return {
    progress,
    targets,
    summaryCards,
    progressCards,
  };
};

export default useProgress;

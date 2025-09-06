type descriptions = {
  "Heart disease": string;
  Hypertension: string;
  Diabetes: string;
  Obesity: string;
  Osteoarthritis: string;
};

export const getRiskDescription = (name: string, score: number) => {
  const descriptions = {
    "Heart disease":
      score > 30
        ? "Consider cardiovascular exercise and diet changes"
        : "Good heart health maintenance",
    Hypertension:
      score > 30
        ? "Monitor blood pressure regularly"
        : "Keep up healthy lifestyle habits",
    Diabetes:
      score > 30
        ? "Focus on blood sugar management"
        : "Continue healthy eating patterns",
    Obesity:
      score > 30
        ? "Consider weight management program"
        : "Maintain current healthy weight",
    Osteoarthritis:
      score > 30
        ? "Joint-friendly exercises recommended"
        : "Keep joints healthy with movement",
  };
  return (
    descriptions?.[name as keyof descriptions] ||
    "Maintain healthy lifestyle habits"
  );
};

export const getOverallRiskMessage = (score: number) => {
  if (score <= 15) return "Excellent! You're maintaining great health habits.";
  if (score <= 30) return "Good overall health with some areas to improve.";
  if (score <= 50) return "Moderate risk level. Consider lifestyle changes.";
  return "Higher risk level. Consult healthcare provider.";
};

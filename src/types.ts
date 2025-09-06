export type Gender = 'male' | 'female' | 'other';

export type Profile = {
  name: string;
  age: number;
  phone?: string;
  gender?: Gender;
  activityLevel?: 'low' | 'moderate' | 'high';
  createdAt?: string;
};

export type Goal = {
  id: string;
  title: string;
  description?: string;
  target: string;  
  completedToday: boolean;
};

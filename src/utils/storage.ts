import AsyncStorage from '@react-native-async-storage/async-storage';
import { Profile, Goal } from '../types';


const PROFILE_KEY = 'fyx_profile_v1';
const GOALS_KEY = 'fyx_goals_v1';
const META_KEY = 'fyx_meta_v1';

export const saveProfile = async (p: Profile) => {
  await AsyncStorage.setItem(PROFILE_KEY, JSON.stringify(p));
};

export const loadProfile = async (): Promise<Profile | null> => {
  const s = await AsyncStorage.getItem(PROFILE_KEY);
  return s ? JSON.parse(s) : null;
};

export const saveGoals = async (g: Goal[]) => {
  await AsyncStorage.setItem(GOALS_KEY, JSON.stringify(g));
};

export const loadGoals = async (): Promise<Goal[] | null> => {
  const s = await AsyncStorage.getItem(GOALS_KEY);
  return s ? JSON.parse(s) : null;
};

export const clearAll = async () => {
  await AsyncStorage.clear();
};

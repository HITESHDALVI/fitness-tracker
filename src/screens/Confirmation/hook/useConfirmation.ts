import { useEffect, useState } from "react";
import { saveGoals, saveProfile } from "../../../utils/storage";
import { defaultGoals } from "../utils/constant";
import { Animated } from "react-native";

type Props = { navigation: any; route: any };

const useConfirmation = ({ navigation, route }: Props) => {
  const { profile } = route.params;
  const [fadeAnim] = useState(new Animated.Value(0));
  const [scaleAnim] = useState(new Animated.Value(0.5));
  const [isLoading, setIsLoading] = useState(true);
  const saveUserData = async () => {
    try {
      await saveProfile(profile);
      await saveGoals(defaultGoals);
      setIsLoading(false);

      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.spring(scaleAnim, {
          toValue: 1,
          tension: 50,
          friction: 7,
          useNativeDriver: true,
        }),
      ]).start();
    } catch (error) {
      console.warn(error);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    saveUserData();
  }, [fadeAnim, scaleAnim]);

  return {
    profile,
    isLoading,
    fadeAnim,
    scaleAnim,
  };
};

export default useConfirmation;

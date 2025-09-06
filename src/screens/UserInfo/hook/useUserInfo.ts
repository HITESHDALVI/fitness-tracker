import { useState } from "react";
import { Gender, Profile } from "../../../types";
import { initialState } from "../utils/constant";

type Props = { navigation: any };


const useUserInfo = ({ navigation }: Props) => {
  const [userInfo, setUserInfo] = useState(initialState);
  const isFormValid = userInfo?.name && userInfo?.age && userInfo?.phone && userInfo?.gender && userInfo?.activityLevel;

  const handleStateChange = (key: string, value: string) => {
    setUserInfo((prev) => ({ ...prev, [key]: value }));
  };
  const onNext = () => {
    const profile: Profile = {
      name: userInfo?.name,
      age: Number(userInfo?.age),
      phone: userInfo?.phone,
      gender: userInfo?.gender as Gender,
      activityLevel: userInfo?.activityLevel as any,
      createdAt: new Date().toISOString(),
    };
    navigation.navigate("Confirmation", { profile });
  };
  return {
    ...userInfo,
    onNext,
    handleStateChange,
    isFormValid
  };
};

export default useUserInfo;

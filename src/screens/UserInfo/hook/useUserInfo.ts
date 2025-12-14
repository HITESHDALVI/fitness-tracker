import { useState } from "react";
import { Gender, Profile } from "../../../types";
import { initialState } from "../utils/constant";
import { useMutation } from "@apollo/client/react";
import { CREATE_USER } from "../../../services/queries/mutation";
import { GET_USERS } from "../../../services/queries/queries";

type Props = { navigation: any };

const useUserInfo = ({ navigation }: Props) => {
  const [userInfo, setUserInfo] = useState(initialState);
  const isFormValid =
    userInfo?.name &&
    userInfo?.age &&
    userInfo?.phone &&
    userInfo?.gender &&
    userInfo?.activityLevel;
  const [CreateUser, { data }] = useMutation(CREATE_USER, {
    refetchQueries: [
      {
        query: GET_USERS,
      },
    ],
  });
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
    CreateUser({
      variables: {
        name: userInfo?.name,
        age: Number(userInfo?.age),
        phone: userInfo?.phone,
        gender: userInfo?.gender as Gender,
        activity: userInfo?.activityLevel as any,
        email: userInfo?.email,
      },
    })
      .then((res) => {
        navigation.goBack();
      })
      .catch((error) => {
        console.log({ error });
      });
    // navigation.navigate("Confirmation", { profile });
  };
  return {
    ...userInfo,
    onNext,
    handleStateChange,
    isFormValid,
  };
};

export default useUserInfo;

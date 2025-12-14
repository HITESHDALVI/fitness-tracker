import { useEffect, useState } from "react";
import { Gender, Profile } from "../../../types";
import { initialState } from "../utils/constant";
import { useMutation, useQuery } from "@apollo/client/react";
import { CREATE_USER, UPDATE_USER } from "../../../services/queries/mutation";
import { GET_USER, GET_USERS } from "../../../services/queries/queries";
import { GetUserResponse } from "../../User/types";

type Props = { navigation: any; route: any };

const useUserInfo = ({ navigation, route }: Props) => {
  const { params } = route;
  const isEdit = params?.type === "edit";
  const [userInfo, setUserInfo] = useState(initialState);
  const isFormValid =
    userInfo?.name &&
    userInfo?.age &&
    userInfo?.phone &&
    userInfo?.gender &&
    userInfo?.activityLevel;

  const { data, loading } = useQuery<GetUserResponse>(GET_USER, {
    variables: { userId: params?.id },
    skip: !isEdit,
  });
  const [CreateUser] = useMutation(CREATE_USER, {
    refetchQueries: [
      {
        query: GET_USERS,
      },
    ],
  });
  const [UpdateUser] = useMutation(UPDATE_USER, {
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
    if (params?.type === "add") {
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
    } else {
      UpdateUser({
        variables: {
          id: params?.id,
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
    }
  };
  useEffect(() => {
    if (isEdit && data?.user) {
      setUserInfo({
        name: data.user.name ?? "",
        age: String(data.user.age ?? ""),
        phone: data.user.phone ?? "",
        email: data.user.email ?? "",
        gender: data.user.gender ?? "",
        activityLevel: data.user.activity ?? "",
      });
    }
  }, [isEdit, data]);
  return {
    ...userInfo,
    onNext,
    handleStateChange,
    isFormValid,
  };
};

export default useUserInfo;

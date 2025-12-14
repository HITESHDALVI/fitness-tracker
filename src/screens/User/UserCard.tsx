import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import React from "react";
import { userListStyles } from "./styles/userListStyles";
import Feather from "react-native-vector-icons/Feather";
import { UserCardProps } from "./types";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  FadeOut,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const colors = [
  "#6366F1", // Indigo
  "#22C55E", // Emerald
  "#0EA5E9", // Sky Blue
  "#F97316", // Orange
  "#EC4899", // Pink
  "#14B8A6", // Teal
];
const SCREEN_WIDTH = Dimensions.get("window").width;
const SWIPE_THRESHOLD = -SCREEN_WIDTH * 0.3;
const UserCard: React.FC<UserCardProps> = ({
  item: user,
  getInitials,
  index,
  onPress,
  onDelete,
}) => {
  const translateX = useSharedValue(0);
  const panGesture = Gesture.Pan()
    .activeOffsetX([-10, 10])
    .failOffsetY([-10, 10])
    .onUpdate((e) => {
      if (e.translationX < 0) {
        translateX.value = Math.max(e.translationX, -SCREEN_WIDTH);
      }
    })
    .onEnd(() => {
      if (translateX.value < SWIPE_THRESHOLD) {
        translateX.value = withTiming(-SCREEN_WIDTH, { duration: 200 });
        runOnJS(onDelete)(user.id);
      } else {
        translateX.value = withTiming(0, { duration: 200 });
      }
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));
  return (
    <GestureDetector gesture={panGesture}>
      <Animated.View exiting={FadeOut} style={userListStyles.container}>
        <View style={userListStyles.deleteBg}>
          <Feather name="trash-2" size={22} color="#fff" />
        </View>
        <Animated.View style={[userListStyles.card, animatedStyle]}>
          <View style={userListStyles.row}>
            <View
              style={[
                userListStyles.avatar,
                { backgroundColor: colors[index % colors.length] },
              ]}
            >
              <Text style={userListStyles.avatarText}>
                {getInitials(user.name)}
              </Text>
            </View>

            <View style={userListStyles.info}>
              <Text style={userListStyles.name} numberOfLines={1}>
                {user.name}
              </Text>
              <Text style={userListStyles.email} numberOfLines={1}>
                {user.email}
              </Text>
            </View>

            <TouchableOpacity
              style={userListStyles.moreBtn}
              onPress={() => {
                onPress(user.id);
              }}
            >
              <Feather name="edit-3" size={18} color="white" />
            </TouchableOpacity>
          </View>
        </Animated.View>
      </Animated.View>
    </GestureDetector>
  );
};

export default UserCard;

import { FunctionComponent } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

type Props = {
  selected: boolean;
  onPress: () => void;
};

export const Dot: FunctionComponent<Props> = ({ selected, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.circle, { backgroundColor: selected ? "black" : "gray" }]}
      onPress={onPress}
    ></TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  circle: {
    height: 12,
    width: 12,
    borderRadius: 12,
    marginHorizontal: 4,
  },
});

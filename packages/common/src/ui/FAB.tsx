import * as React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface Props {
  onPress?: () => void;
}

const styles = StyleSheet.create({
  fab: {
    width: 40,
    height: 40,
    backgroundColor: "pink",
    position: "absolute",
    bottom: 10,
    right: 10,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3
  },
  text: {
    margin: "auto",
    fontSize: 18
  }
});

export const FAB: React.FC<Props> = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.fab}>
      <Text style={styles.text}>+</Text>
    </TouchableOpacity>
  );
};

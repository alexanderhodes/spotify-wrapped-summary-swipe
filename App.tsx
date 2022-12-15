import { StyleSheet, Text, View } from "react-native";
import { Summary } from "./src/components/Summary";

export default function App() {
  return (
    <View style={styles.container}>
      <Summary backgroundColor="green" textColor="white" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Summary, SUMMARY_HEIGHT } from "./src/components/Summary";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{ height: SUMMARY_HEIGHT }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={[styles.summaryContainer]}>
            <Summary backgroundColor="green" textColor="white" />
          </View>
          <View style={[styles.summaryContainer]}>
            <Summary backgroundColor="red" textColor="white" />
          </View>
          <View style={[styles.summaryContainer]}>
            <Summary backgroundColor="blue" textColor="white" />
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent: 'center'
  },
  summaryScrollContainer: {
    marginBottom: 12,
  },
  summaryContainer: {
    paddingHorizontal: 8,
  },
});

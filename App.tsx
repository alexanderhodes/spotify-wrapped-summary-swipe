import { useState } from "react";
import { Dimensions, ScrollView, StyleSheet, View } from "react-native";
import { Dot } from "./src/components/Dot";
import {
  Summary,
  SUMMARY_HEIGHT,
  SUMMARY_WIDTH,
} from "./src/components/Summary";

export default function App() {
  const [selected, setSelected] = useState(0);

  const screenWidth = Dimensions.get("screen").width;

  // 16 is padding that is added horizontally around summary
  const summaryWidth = SUMMARY_WIDTH + 16
  const horizontalPadding = (screenWidth - summaryWidth) / 2;

  return (
    <View style={styles.container}>
      <View style={[styles.summaryScrollContainer, { height: SUMMARY_HEIGHT }]}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: horizontalPadding }}
          decelerationRate="fast"
          // snap interval for width of summary items
          snapToInterval={summaryWidth}
        >
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
      <View style={styles.dotsContainer}>
        <Dot selected={selected === 0} onPress={() => setSelected(0)} />
        <Dot selected={selected === 1} onPress={() => setSelected(1)} />
        <Dot selected={selected === 2} onPress={() => setSelected(2)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  summaryScrollContainer: {
    marginBottom: 12,
  },
  summaryContainer: {
    paddingHorizontal: 8,
  },
  dotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
});

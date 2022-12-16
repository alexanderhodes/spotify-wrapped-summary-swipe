import { useRef, useState } from "react";
import { Dimensions, NativeScrollEvent, NativeSyntheticEvent, ScrollView, StyleSheet, View } from "react-native";
import { Dot } from "./src/components/Dot";
import {
  Summary,
  SUMMARY_HEIGHT,
  SUMMARY_WIDTH,
} from "./src/components/Summary";

export default function App() {
  const [selected, setSelected] = useState(0);
  const scrollViewRef = useRef<ScrollView>(null)

  const screenWidth = Dimensions.get("screen").width;

  // 16 is padding that is added horizontally around summary
  const summaryWidth = SUMMARY_WIDTH + 16
  // padding that is located on the left and right for centering the summary item
  const horizontalPadding = (screenWidth - summaryWidth) / 2;

  const onScrollEnd = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const item = Math.round(event.nativeEvent.contentOffset.x / summaryWidth)
    setSelected(item)
  }

  const changePage = (index: number) => {
    if (scrollViewRef.current) {
      setSelected(index)
      // calculate scroll position by multiplying selected index with with of summary item
      scrollViewRef.current?.scrollTo({ x: index * summaryWidth, animated: true })
    }
  }

  return (
    <View style={styles.container}>
      <View style={[styles.summaryScrollContainer, { height: SUMMARY_HEIGHT }]}>
        <ScrollView
          ref={scrollViewRef}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: horizontalPadding }}
          decelerationRate="fast"
          // snap interval for width of summary items
          snapToInterval={summaryWidth}
          // updating the index when scroll is ended
          onMomentumScrollEnd={onScrollEnd}
          overScrollMode="never"
        >
          <View style={styles.summaryContainer}>
            <Summary backgroundColor="green" textColor="white" />
          </View>
          <View style={styles.summaryContainer}>
            <Summary backgroundColor="red" textColor="white" />
          </View>
          <View style={styles.summaryContainer}>
            <Summary backgroundColor="blue" textColor="white" />
          </View>
        </ScrollView>
      </View>
      <View style={styles.dotsContainer}>
        <Dot selected={selected === 0} onPress={() => changePage(0)} />
        <Dot selected={selected === 1} onPress={() => changePage(1)} />
        <Dot selected={selected === 2} onPress={() => changePage(2)} />
      </View>
      <View>
        <TouchableOpacity style={styles.shareOpacity} onPress={() => {}}>
          <Text style={styles.shareText}>Share</Text>
        </TouchableOpacity>
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
    marginBottom: 16,
  },
  shareOpacity: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 24,
    backgroundColor: "green"
  },
  shareText: {
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "uppercase",
    color: "white"
  }
});

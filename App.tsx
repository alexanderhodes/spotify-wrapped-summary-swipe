import { useRef, useState } from "react";
import { Dimensions, NativeScrollEvent, NativeSyntheticEvent, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Dot } from "./src/components/Dot";
import {
  Summary,
  SUMMARY_HEIGHT,
  SUMMARY_WIDTH,
} from "./src/components/Summary";
import { captureRef } from "react-native-view-shot"

export default function App() {
  const [selected, setSelected] = useState(0);
  const scrollViewRef = useRef<ScrollView>(null)
  const summary1Ref = useRef<View>(null)
  const summary2Ref = useRef<View>(null)
  const summary3Ref = useRef<View>(null)

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

  const onShare = async () => {
    try {
      let ref = summary1Ref
      if (selected === 1) {
        ref = summary2Ref
      } else if (selected === 2) {
        ref = summary3Ref
      }

      const screenshotUri = await captureRef(ref, {
        format: "png",
        quality: 1
      })

      console.log('screenshotUri', screenshotUri)
    } catch (e) {
      console.error('Error', e)
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
          <View ref={summary1Ref} style={styles.summaryContainer}>
            <Summary backgroundColor="green" textColor="white" />
          </View>
          <View ref={summary2Ref} style={styles.summaryContainer}>
            <Summary backgroundColor="red" textColor="white" />
          </View>
          <View ref={summary3Ref} style={styles.summaryContainer}>
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
        <TouchableOpacity style={styles.shareOpacity} onPress={onShare}>
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

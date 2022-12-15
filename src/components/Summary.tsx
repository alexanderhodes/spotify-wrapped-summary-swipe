import React, { FunctionComponent } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";

const { width, height } = Dimensions.get("screen");

export const SUMMARY_HEIGHT = height * 0.6;
export const SUMMARY_WIDTH = width * 0.665;

type Props = {
  backgroundColor: string;
  textColor: string;
};

export const Summary: FunctionComponent<Props> = ({
  backgroundColor,
  textColor,
}) => {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: backgroundColor,
          height: SUMMARY_HEIGHT,
          width: SUMMARY_WIDTH,
        },
      ]}
    >
      <View style={[styles.header]}>
        <View style={[styles.headerPlaceholder, { backgroundColor: backgroundColor }]}></View>
      </View>
      <View style={[styles.body]}>
        <View style={[styles.row]}>
          <View style={styles.column}>
            <Text style={[styles.title, { color: textColor }]}>
              {"Top songs"}
            </Text>
            <Text style={[styles.text, { color: textColor }]}>{"#1 Song"}</Text>
            <Text style={[styles.text, { color: textColor }]}>{"#2 Song"}</Text>
            <Text style={[styles.text, { color: textColor }]}>{"#3 Song"}</Text>
          </View>
          <View style={styles.column}>
            <Text style={[styles.title, { color: textColor }]}>
              {"Top categories"}
            </Text>
            <Text style={[styles.text, { color: textColor }]}>
              {"#1 Category"}
            </Text>
            <Text style={[styles.text, { color: textColor }]}>
              {"#2 Category"}
            </Text>
            <Text style={[styles.text, { color: textColor }]}>
              {"#3 Category"}
            </Text>
          </View>
        </View>
        <View style={[styles.row]}>
          <View style={styles.column}>
            <Text style={[styles.title, { color: textColor }]}>
              {"Minutes"}
            </Text>
            <Text style={[styles.text, { color: textColor, fontSize: 20 }]}>
              {"123.456"}
            </Text>
          </View>
          <View style={styles.column}>
            <Text style={[styles.title, { color: textColor }]}>{"Songs"}</Text>
            <Text style={[styles.text, { color: textColor, fontSize: 20 }]}>
              {"789"}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    padding: 16,
  },
  header: {
    flex: 1,
    backgroundColor: "white",
    marginBottom: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  headerPlaceholder: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  body: {
    flex: 1,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 32,
  },
  column: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

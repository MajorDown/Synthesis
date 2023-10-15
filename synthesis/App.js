import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { styles } from "./styles/styles";
import Controller from "./component/Controller";
import ChannelBar from "./component/ChannelBar";

export default function App() {
  return (
    <View style={styles.app}>
      <StatusBar style="auto" />
      <Controller />
      <ChannelBar />
    </View>
  );
}

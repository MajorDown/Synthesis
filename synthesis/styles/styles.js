import { StyleSheet } from "react-native";
import { chart } from "./chart";

export const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: chart.colorBack,
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
  },
  channelBar: {
    marginTop: 5,
    borderColor: chart.colorWindow,
    borderWidth: 5,
    borderRadius: 5,
    width: "100%",
    height: "20%",
  },
  controller: {
    borderColor: chart.colorWindow,
    borderWidth: 5,
    borderRadius: 5,
    padding: 1,
    width: "100%",
    height: "75%",
  },
});

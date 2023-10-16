import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { styles } from "./styles/styles";
import { NotesDataProvider } from "./contexts/notesDataContext";
import AxisController from "./component/AxisController";
import ChannelBar from "./component/ChannelBar";

export default function App() {
  const [touches, setTouches] = useState([]);
  return (
    <View style={styles.app}>
      <StatusBar style="auto" />
      <NotesDataProvider>
        <AxisController firstNote={"C"} tessiture={2} onControl={setTouches} />
        <ChannelBar />
      </NotesDataProvider>
    </View>
  );
}

import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { Button, View } from "react-native";
import { styles } from "./styles/styles";
import { NotesDataProvider } from "./contexts/notesDataContext";
import AxisController from "./components/AxisController";
import ChannelBar from "./components/ChannelBar";

import Sound from "react-native-sound";

export default function App() {
  const [touches, setTouches] = useState([]);

  Sound.setCategory("Playback");
  let cornemuse = new Sound(
    "/assets/sounds/cornemuse.mp3",
    Sound.MAIN_BUNDLE,
    (err) => {
      if (err) {
        console.log("failed to load sound :", err);
        return;
      }
      console.log(
        "duration in seconds: " +
          cornemuse.getDuration() +
          "number of channels: " +
          cornemuse.getNumberOfChannels()
      );
      // Play the sound with an onEnd callback
      cornemuse.play((success) => {
        if (success) {
          console.log("successfully finished playing");
        } else {
          console.log("playback failed due to audio decoding errors");
        }
      });
    }
  );

  return (
    <View style={styles.app}>
      <StatusBar style="auto" />
      <NotesDataProvider>
        <AxisController firstNote={"C"} tessiture={2} onControl={setTouches} />
        <ChannelBar />
        <Button title="sound" onPress={() => playSound()}></Button>
      </NotesDataProvider>
    </View>
  );
}

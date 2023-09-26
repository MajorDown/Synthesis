import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import styles from "./styles/styles";

export default function App() {
  const [loadedFont, FontError] = useFonts({
    "Orbitron-Bold": require("./assets/fonts/Orbitron-Bold.ttf"),
    "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
  });
  if (FontError) return <Text>loading...</Text>;
  if (loadedFont)
    return (
      <View style={styles.app}>
        <StatusBar style="light" />
      </View>
    );
}

import { Pressable, Text } from "react-native";
import { styles } from "../styles/styles";
import { useState } from "react";

const Controller = () => {
  const [touches, setTouches] = useState([]);

  return (
    <Pressable
      onTouchMove={(event) => {
        setTouches(event.nativeEvent.touches);
        console.log(event.nativeEvent.touches);
      }}
      onTouchEnd={() => {
        setTouches([]);
      }}
      style={styles.controller}
    >
      <Text style={{ color: "white" }}>
        Coordonnées des touches :
        {touches.map((touch) => (
          <Text key={touch.identifier}>
            ID : {touch.identifier}, x : {touch.locationX}, y :{" "}
            {touch.locationY}
          </Text>
        ))}
      </Text>
    </Pressable>
  );
};

export default Controller;

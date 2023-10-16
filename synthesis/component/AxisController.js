/**
 * Composant permettant de détecter les touches sur l'écran et de retourner leurs coordonnées en %.
 *
 * @property {string} firstNote La note de départ du gradient.
 * @property {number} octaveNumber Le numéro d'octave du gradient.
 * @property {function(array)} onControl Fonction appelée lorsque les coordonnées des touches changent.
 * @returns {React.Node}
 */

import { Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "../styles/styles";
import { useState, useEffect } from "react";
import { useNotesDataContext } from "../contexts/notesDataContext";
import renderGradient from "../utils/renderGradient";
import renderFrequency from "../utils/renderFrequency";

const AxisController = ({ firstNote, tessiture = 1, onControl }) => {
  // CONTEXTS
  const { notesData, updateNotesData } = useNotesDataContext();

  // STATES
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  });
  const [colorGradient, setColorGradient] = useState([
    ...renderGradient(firstNote, tessiture),
  ]);
  const [touches, setTouches] = useState([]);

  // HANDLERS
  const handleLayout = (event) => {
    setDimensions({
      width: event.nativeEvent.layout.width,
      height: event.nativeEvent.layout.height,
    });
  };

  const handleTouchMove = (event) => {
    const newTouches = event.nativeEvent.touches.map((touch) => ({
      id: touch.identifier,
      x: (touch.locationX / dimensions.width) * 100,
      y: (touch.locationY / dimensions.height) * 100,
      freq: renderFrequency(
        notesData,
        firstNote,
        tessiture,
        (touch.locationX / dimensions.width) * 100
      ),
    }));
    setTouches(newTouches);
  };

  const handleTouchEnd = () => {
    setTouches([]);
  };

  // USEEFFECTS
  useEffect(() => {
    setColorGradient(renderGradient(firstNote, tessiture));
  }, [firstNote, tessiture]);

  useEffect(() => {
    onControl(touches);
    console.log(touches);
  }, [touches]);

  // RENDER
  return (
    <Pressable
      style={styles.axisController}
      onLayout={(event) => handleLayout(event)}
      onTouchMove={(event) => handleTouchMove(event)}
      onTouchEnd={() => handleTouchEnd()}
    >
      <LinearGradient
        colors={colorGradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{ width: "100%", height: "100%", opacity: 0.3 }}
      ></LinearGradient>
    </Pressable>
  );
};

export default AxisController;

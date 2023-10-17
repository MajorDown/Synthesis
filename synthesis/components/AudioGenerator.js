import { AudioContext } from "webaudio";

export const AudioGenerator = ({ frequency, type }) => {
  // Créez un contexte audio
  const audioContext = new AudioContext();
  // Vérifiez que l'objet AudioContext est défini
  if (!audioContext) {
    console.log("audiocontext n'est pas défini");
    return null;
  }
  // Créez un oscillateur
  const waveform = audioContext.createOscillator();
  // Définissez les propriétés initiales de l'oscillateur
  waveform.type = type;
  waveform.frequency.value = frequency;
  waveform.gain.value = 1;
  // Retournez le composant
  return <View>{waveform}</View>;
};

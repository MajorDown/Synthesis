export default function renderFrequency(
  notesChart,
  firstNote,
  octaveNumber,
  x
) {
  // Détermine la fréquence minimale
  const lowestNote = notesChart.find((note) => note.name === firstNote);
  const lowestFrequency = lowestNote.freq;

  // Calcule la fréquence maximale
  const highestFrequency = lowestFrequency * Math.pow(2, octaveNumber);

  // Calcule la fréquence de la touche
  const frequency =
    lowestFrequency + ((highestFrequency - lowestFrequency) * x) / 100;

  return frequency;
}

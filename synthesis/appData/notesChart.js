export const notesChart = [
  {
    name: "C",
    frenchName: "Do",
    freq: 261.63,
    touch: "white",
    color: "rgb(255, 0, 0)",
  },
  {
    name: "C#",
    frenchName: "Do#",
    freq: 277.18,
    touch: "black",
    color: "rgb(255, 77, 0)",
  },
  {
    name: "D",
    frenchName: "Ré",
    freq: 293.66,
    touch: "white",
    color: "rgb(255, 170, 0)",
  },
  {
    name: "D#",
    frenchName: "Ré#",
    freq: 311.13,
    touch: "black",
    color: "rgb(238, 255, 0)",
  },
  {
    name: "E",
    frenchName: "Mi",
    freq: 329.63,
    touch: "white",
    color: "rgb(136, 255, 0)",
  },
  {
    name: "F",
    frenchName: "Fa",
    freq: 349.23,
    touch: "white",
    color: "rgb(0, 255, 119)",
  },
  {
    name: "F#",
    frenchName: "Fa#",
    freq: 370.03,
    touch: "black",
    color: "rgb(0, 255, 191)",
  },
  {
    name: "G",
    frenchName: "Sol",
    freq: 392.0,
    touch: "white",
    color: "rgb(0, 217, 255)",
  },
  {
    name: "G#",
    frenchName: "Sol#",
    freq: 415.3,
    touch: "black",
    color: "rgb(0, 76, 255)",
  },
  {
    name: "A",
    frenchName: "La",
    freq: 440.0,
    touch: "white",
    color: "rgb(140, 0, 255)",
  },
  {
    name: "A#",
    frenchName: "La#",
    freq: 466.16,
    touch: "black",
    color: "rgb(242, 0, 255)",
  },
  {
    name: "B",
    frenchName: "Si",
    freq: 493.88,
    touch: "white",
    color: "rgb(255, 0, 128)",
  },
];

export function createNotesChartStartingWith(startingNote) {
  const notes = [...notesChart];
  const index = notes.findIndex((note) => note.name === startingNote);
  if (index === -1) {
    console.error(
      `createNotesChartStartingWith ~> La note de départ "${startingNote}" n'a pas été trouvée dans le tableau.`
    );
    return notes;
  }
  return notes.slice(index).concat(notes.slice(0, index));
}

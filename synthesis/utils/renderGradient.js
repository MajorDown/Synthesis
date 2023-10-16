/**
 * Génère un gradient de couleur à partir d'une note de départ et d'un nombre d'octaves.
 *
 * @param {string} startNote La note de départ du gradient.
 * @param {number} octaveNumber Le nombre d'octaves du gradient.
 * @returns {array} Un tableau de couleurs.
 */

import { createNotesChartStartingWith } from "../appData/notesChart";

export default function renderGradient(startNote, octaveNumber) {
  let finalColors = [];
  let colors = [
    ...createNotesChartStartingWith(startNote).map((note) => note.color),
  ];
  for (let i = 0; i < octaveNumber; i++) {
    finalColors.push(...colors);
  }
  return finalColors;
}

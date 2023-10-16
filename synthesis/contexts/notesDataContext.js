import React, { createContext, useContext, useState } from "react";
import { notesChart } from "../appData/notesChart";

// DECLARATION DU CONTEXT
const notesDataContext = createContext();

// DECLARATION DU HOOK
export function useNotesDataContext() {
  return useContext(notesDataContext);
}

// DECLARATION DU PROVIDER
export function NotesDataProvider({ children }) {
  const [notesData, setNotesData] = useState(notesChart);
  const updateNotesData = (newData) => {
    setNotesData(newData);
  };
  return (
    <notesDataContext.Provider value={{ notesData, updateNotesData }}>
      {children}
    </notesDataContext.Provider>
  );
}

import React, { createContext, useState, useContext } from "react";

export interface Horse {
  name: string;
  velocity: number;
  position: number; // Percentage of the track
}

interface HorseContextProps {
  selectedHorse: Horse;
  setSelectedHorse: (horse: Horse) => void;
  horses: Horse[];
  setHorses: (horses: Horse[]) => void;
}

const HorseContext = createContext<HorseContextProps | null>(null);

const HorseProvider: React.FC = ({ children }) => {
  const [selectedHorse, setSelectedHorse] = useState<Horse>({} as Horse);
  const [horses, setHorses] = useState<Horse[]>([
    {
      name: "Silver",
      velocity: 0,
      position: 0
    },
    {
      name: "Pegasus",
      velocity: 0,
      position: 0
    },
    {
      name: "Jockey",
      velocity: 0,
      position: 0
    },
    {
      name: "Washington",
      velocity: 0,
      position: 0
    }
  ]);

  return (
    <HorseContext.Provider value={{
      selectedHorse,
      setSelectedHorse,
      horses,
      setHorses
    }}>
      {children}
    </HorseContext.Provider>
  );
};

function useHorse(): HorseContextProps {
  const context = useContext(HorseContext);

  if (!context) {
    throw new Error("useHorse must be used within a HorseProvider");
  }

  return context;
}

export { HorseProvider, useHorse };

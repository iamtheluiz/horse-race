import React, { createContext, useState, useContext } from "react";

interface Horse {
  name: string;
  velocity: number;
  position: number | undefined;
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
      position: undefined
    },
    {
      name: "Pegasus",
      velocity: 0,
      position: undefined
    },
    {
      name: "Jockey",
      velocity: 0,
      position: undefined
    },
    {
      name: "Washington",
      velocity: 0,
      position: undefined
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

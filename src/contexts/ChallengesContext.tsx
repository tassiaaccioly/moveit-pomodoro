import { createContext, useState, ReactNode } from "react";
import challenges from "../dbs/challenges.json";

interface Challenge {
  type: "body" | "eye";
  description: string;
  amount: number;
}

interface ChallengesContextData {
  level: number;
  challengesCompleted: number;
  currentExperience: number;
  //we could put object here but it's not very descriptive so we create another interface for the challenge and add that interface to the type of the variable;
  activeChallenge: Challenge;
  startNewChallenge: () => void;
  levelUp: () => void;
}

interface ChallengesProviderProps {
  children: ReactNode;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children }) {
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);

  const [activeChallenge, setActiveChallenge] = useState(null);

  function levelUp() {
    setLevel(level + 1);
  }

  function startNewChallenge() {
    const randomChallengeIdx = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIdx];

    setActiveChallenge(challenge);
  }

  return (
    <ChallengesContext.Provider
      value={{
        level,
        challengesCompleted,
        currentExperience,
        startNewChallenge,
        levelUp,
        activeChallenge,
      }}
    >
      {children}
    </ChallengesContext.Provider>
  );
}

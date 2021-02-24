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
  experienceToNextLevel: number;
  startNewChallenge: () => void;
  levelUp: () => void;
  resetChallenge: () => void;
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

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  function levelUp() {
    setLevel(level + 1);
  }

  function startNewChallenge() {
    const randomChallengeIdx = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIdx];

    setActiveChallenge(challenge);
  }

  function resetChallenge() {
    setActiveChallenge(null);
  }

  return (
    <ChallengesContext.Provider
      value={{
        level,
        challengesCompleted,
        currentExperience,
        activeChallenge,
        experienceToNextLevel,
        startNewChallenge,
        levelUp,
        resetChallenge,
      }}
    >
      {children}
    </ChallengesContext.Provider>
  );
}

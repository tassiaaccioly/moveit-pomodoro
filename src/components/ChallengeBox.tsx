import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/ChallengeBox.module.css";

export function ChallengeBox() {
  const { activeChallenge, resetChallenge } = useContext(ChallengesContext);

  return (
    <div className={styles.challengeBoxContainer}>
      {activeChallenge ? (
        <div className={styles.challengeActive}>
          <header>Win {activeChallenge.amount}XP</header>

          <main>
            <img src={`icons/${activeChallenge.type}.svg`} alt="" />
            <strong>New Challenge</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button
              type="button"
              className={styles.challengeFailBtn}
              onClick={resetChallenge}
            >
              Failed
            </button>
            <button type="button" className={styles.challengeSucceededBtn}>
              Completed
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <strong>Finish a cycle to get a challenge</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level Up" />
            Level Up by completing challenges
          </p>
        </div>
      )}
    </div>
  );
}

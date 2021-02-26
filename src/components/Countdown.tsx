import { useContext } from "react";
import { CountdownContext } from "../contexts/CountdownContext";
import styles from "../styles/components/Countdown.module.css";

import { Checkmark } from "../assets/checkmark";

export function Countdown() {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    startCountdown,
    resetCountdown,
  } = useContext(CountdownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      {hasFinished ? (
        <button disabled className={styles.countdownButton}>
          Finished Cycle <Checkmark />
        </button>
      ) : (
        <>
          {isActive ? (
            <button
              type="button"
              className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
              onClick={resetCountdown}
            >
              Stop cycle
            </button>
          ) : (
            <button
              type="button"
              className={styles.countdownButton}
              onClick={startCountdown}
            >
              Start a cycle
            </button>
          )}
        </>
      )}
    </div>
  );
}


import { useContext } from "react";
import { CountdownContext } from '../contexts/CountdownContext'
import styles from "../styles/components/Countdown.module.css";

export function Countdown() {
  const { 
    minutes,
    seconds,
    hasFinished,
    isActive,
    startCountdown,
    resetCountdown,
    } = useContext(CountdownContext)  

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

  return (
    <div className={styles.container}>
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
          Ciclo encerrado
          <img src="icons/complete.svg" alt="Complete" />
        </button>
      ) : (
        <>
          {isActive ? (
            <button
              type="button"
              className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
              onClick={resetCountdown}
            >
              Abandonar ciclo <p>x</p>
            </button>
          ) : (
            <button
              type="button"
              className={styles.countdownButton}
              onClick={startCountdown}
            >
              iniciar ciclo
              <img src="icons/play-arrow.svg" alt="arrow" />
            </button>
          )}
        </>
      )}
    </div>
  );
}

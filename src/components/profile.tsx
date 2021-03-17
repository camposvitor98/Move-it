import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContexts';
import styles from '../styles/components/Profile.module.css'

export function Profile() {
  const { level } = useContext(ChallengesContext)
    return(
        <div className={styles.profileContainer}>
          <img src="https://github.com/camposvitor98.png" alt="Vitor Campos"/>
          <div>
            <strong>Vítor Campos</strong>
            <p>
              <img src="icons/level.svg" alt="Level"/>
              Level {level}
            </p>
          </div>  
        </div>
    );
}
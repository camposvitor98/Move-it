import Head from 'next/head'

import { CompletedChellenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from '../components/profile';
import { ChallengeBox } from "../components/ChallengeBox";
import { ChallengesProvider } from '../contexts/ChallengesContexts'

import styles from '../styles/pages/Home.module.css'
import { CountdownProvidor } from '../contexts/CountdownContext';
import { GetServerSideProps } from 'next';

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {
  return (
    <ChallengesProvider 
    level={props.level}
    currentExperience={props.currentExperience}
    challengesCompleted={props.challengesCompleted}
    
    >
      <div className={styles.container}>
        <head>
          <title>
            Início | Move.it
          </title>
        </head>
        <ExperienceBar />

        <CountdownProvidor>
          <section>
            <div>
              <Profile />
              <CompletedChellenges />
                <Countdown />
            </div>
            <div>
                <ChallengeBox />
            </div>
          </section>
        </CountdownProvidor>
      </div>
    </ChallengesProvider>

  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies
  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}
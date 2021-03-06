import { ChallengeBox } from "../components/ChallengeBox"
import { CompleteChallengens } from "../components/CompleteChallenges"
import { Countdown } from "../components/Countdown"
import { ExperienceBar } from "../components/ExperienceBar"
import { Profile } from "../components/Profile"
import { ChallengesProvider } from "../contexts/ChallengesContext"
import { CountdownProvider } from "../contexts/CountdownContext"
import styles from '../styles/pages/Home.module.css'

export default function Home(props) {

  return (
    <ChallengesProvider level={props.level} currentExperience={props.currentExperience} challengesCompleted={props.challengesCompleted}>
      <div className={styles.container}>
        <ExperienceBar/>

        <CountdownProvider>
          <section style={{marginTop: '32px'}}>
            <div>
              <Profile />
              <CompleteChallengens/>
              <Countdown/>
            </div>

            <div>
              <ChallengeBox/>
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengesProvider>
  )
}

export const getServerSideProps = async (context) => {

  const { level, currentExperience, challengesCompleted } = context.req.cookies

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}

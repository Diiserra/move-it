import { useContext } from "react"
import { ChallengesContext } from "../contexts/ChallengesContext"
import styles from '../styles/components/CompleteChallenges.module.css'

export function CompleteChallengens(){
    const { challengesCompleted } = useContext(ChallengesContext)

    return (
        <div className={styles.completeChallengensContainer}>
            <span>Desafios completos</span>
            <span>{challengesCompleted}</span>
        </div>
    )
}
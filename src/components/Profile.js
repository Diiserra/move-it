import { useContext } from "react"
import { ChallengesContext } from "../contexts/ChallengesContext"
import styles from '../styles/components/Profile.module.css'

export function Profile(){
    const {level, levelUp} = useContext(ChallengesContext)

    return (
        <div className={styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/54649210?s=400&u=20703d554012a1b0d6739acfe2bd192180935014&v=4" alt=""/>
            <div>
                <strong>Diego Lima</strong>
                <p>
                    <img src="icons/level.svg"></img>
                    Level {level}
                </p>
            </div>
        </div>
    )
}
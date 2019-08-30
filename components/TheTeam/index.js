import { H2 } from '../Headers'
import { TextMedium, TextBoldMedium } from '../Text'

import styles from './index.scss'

const TeamMember = ({ children, name, fullName }) => {
  return (
    <div className={styles.teamMember}>
      <div className={styles.imageWrapper}>
        <img 
          src={`/static/${name}.jpg`} 
          alt="team member image" 
          className={styles.image}
        />
      </div>
      <TextBoldMedium className={styles.name}>
        {fullName}
      </TextBoldMedium>
      <TextMedium className={styles.bio}>
        {children}
      </TextMedium>
    </div>
  )
}

const TheTeam = () => {
  return (
    <div className={styles.wrapper}>
      <H2 className={styles.heading}>
        The team
      </H2>
      <div className={styles.team}>
        <TeamMember name="jon" fullName="Jonathan Borichevskiy">
          Backend/data engineer looking to make this planet a better place. Loves learning all the things, particularly cognitive science and space! Enjoys reading, running, and traveling.
        </TeamMember>
        <TeamMember name="jamie" fullName="Jamie Allen">
          Product designer turned Software engineer. Loves building things. Attempting to build our way towards a greener, more sustainable future.
        </TeamMember>
        <TeamMember name="alex" fullName="Alex Ly">
          Finance professional by day. Amateur photographer & violinist by night. Climate enthusiast around the clock. Looking to leave the world in a better state than how I found it.
        </TeamMember>
      </div>
    </div>
  )
}

export default TheTeam
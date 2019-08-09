import styles from './index.scss'

// import { TextMedium } from '../Text'
import Header from '../Header'
import { H1, H3 } from '../Headers'
import BrowserImg from '../BrowserImg'

const Homepage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.centralColumn}>
        <Header />
        <H1 className={styles.mainHeading}>
          Shopping green online is difficult. Let's 
          make it easier.
        </H1>
        <H3 className={styles.subHeading}>
          A browser extension to visualize carbon impact, 
          provide greener options, and reward 
          sustainable choices.
        </H3>
        <BrowserImg />
      </div>
    </div>
  )
}

export default Homepage
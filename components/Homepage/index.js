import styles from './index.scss'

import Header from '../Header'
import { H1, H3 } from '../Headers'
import BrowserImg from '../BrowserImg'
import Footer from '../Footer'
import Column from '../Column'
import DownloadButton from '../DownloadButton'

const Homepage = () => {
  return (
    <div className={styles.wrapper}>
      <Column size="large">
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
        <div className={styles.buttonWrapper}>
          <DownloadButton onClick={() => alert('Coming soon!')}/>
        </div>
        <BrowserImg />
      </Column>
      <Footer />
    </div>
  )
}

export default Homepage
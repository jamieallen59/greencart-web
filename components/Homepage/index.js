import Header from '../Header'
import { H1, H3 } from '../Headers'
import BrowserImg from '../BrowserImg'
import Footer from '../Footer'
import Column from '../Column'
import Features from '../Features'
import DownloadLink from '../DownloadLink'

import styles from './index.scss'

const Homepage = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Column size="large">
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
          <DownloadLink href="https://chrome.google.com/webstore/detail/greencart/jmfjmndmhlffkanjlnjdlblnfacpdmbc?hl=en-GB&gl=GB" />
        </div>
        <BrowserImg />
      </Column>
      <Features />
      <Footer />
    </div>
  )
}

export default Homepage
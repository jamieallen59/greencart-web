
import Header from '../components/Header'
import { H2 } from '../components/Headers'
import { TextMedium, TextBoldMedium } from '../components/Text'
// import BrowserImg from '../components/BrowserImg'
import Footer from '../components/Footer'
import Column from '../components/Column'
import TheTeam from '../components/TheTeam'
// import DownloadLink from '../DownloadLink'

import styles from './about.scss'

const AboutPage = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Column size="large" className={styles.mainContent}>
        <H2 className={styles.heading}>
          Mission
        </H2>
        <TextMedium className={styles.missionText}>
          According to a study by Microsoft, the average 
          attention span of a person is only 8 seconds 
          (down from 12 in 2000)! At 8 seconds, you hardly 
          have enough time to compare apples at your local 
          grocery store; yet a small change such as eating 
          locally grown produce could save the equivalent of 
          1,000 miles of greenhouse gases over the course of a 
          year!
        </TextMedium>
        <TextMedium className={styles.missionText}>
          At greenCart, we believe together we can make a big difference in reversing the climate crisis which the world is currently seeing. Our vision is to do so by raising awareness around the carbon impact of our daily shopping decisions and steer behavior towards greener choices in an eCommerce setting.
        </TextMedium>
        <TextMedium className={styles.missionText}>
          With roughly one-quarter of the planet’s human generated greenhouse gases being attributable to the world’s food system(2), we decided to start our journey with raising awareness around food shopping choices.
        </TextMedium>
        <TextBoldMedium className={styles.missionText}>
          Your online shopping habits are next – bringing to light the carbon footprint of your purchases based on their country of origin as well as promoting greener choices in general (such as digital as opposed to physical).
        </TextBoldMedium>
        <TextMedium className={styles.missionText}>
          We're tackling the opaque and confusing online shopping experience next - bringing to light the carbon footprint of items based on their country of origin, manufacturing materials, shipping speed, and promoting greener alternatives.
        </TextMedium>
      </Column>
      <TheTeam />
      <Footer />
    </div>
  )
}

export default AboutPage
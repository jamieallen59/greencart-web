import styles from './index.scss'

import { H2, H3 } from '../Headers'
import { TextBoldLarge } from '../Text'
import KindleSVG from '../Icons/kindle';
import SmileSVG from '../Icons/smile';
import VegetablesSVG from '../Icons/vegetables';

const Feature = ({ Icon = 'TEXT', description }) => {
  return (
    <div className={styles.feature}>
      {Icon}
      <TextBoldLarge className={styles.description}>
        {description}
      </TextBoldLarge>
    </div>
  )
}

const Features = () => {
  return (
    <div className={styles.wrapper}>
      <H2 className={styles.heading}>
        Features
      </H2>
      <H3 className={styles.subHeading}>
        Works alongside Amazon to:
      </H3>
      <div className={styles.features}>
        <Feature 
          description="Automatically redirect you to Amazon Smile"
          Icon={<SmileSVG className={styles.smile} />}
        />
        <Feature 
          description="Highlight greener options when buying books"
          Icon={<KindleSVG className={styles.kindle} />}
        />
        <Feature 
          description="Point towards more carbon friendly foods"
          Icon={<VegetablesSVG className={styles.vegetables} />}
        />
      </div>
    </div>
  )
}

export default Features
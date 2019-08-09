import styles from './index.scss'

import Logo from '../Logo'
import Column from '../Column'

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <Column size="large">
        <Logo className={styles.logo}/>
      </Column>
    </div>
  )
}

export default Footer
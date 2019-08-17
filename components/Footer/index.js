import styles from './index.scss'

import { H3 } from '../Headers'
import Link from '../Link'
import Logo from '../Logo'
import Column from '../Column'

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <Column size="large">
        <Link className={styles.logoWrapper} to='/'>
          <Logo className={styles.logo}/>
          <H3 className={styles.brandName}>
            greenCart
          </H3>
        </Link>
      </Column>
    </div>
  )
}

export default Footer
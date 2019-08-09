import styles from './index.scss'

import { TextMedium } from '../Text'
import { H1 } from '../Headers'
import Link from '../Link'
import Logo from '../Logo'

const Header = () => {
  return (
    <header className={styles.wrapper}>
      <div className={styles.logoWrapper}>
        <Logo />
        <H1 className={styles.brandName}>
          greenCart
        </H1>
      </div>
      <Link 
        className={styles.contact} 
        to="mailto:hello@greencart.app"
      >
        <TextMedium>
          Contact
        </TextMedium>
      </Link>
    </header>
  )
}

export default Header
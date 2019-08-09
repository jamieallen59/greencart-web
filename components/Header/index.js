import styles from './index.scss'

import { TextMedium } from '../Text'
import Link from '../Link'
import Logo from '../Logo'

const Header = () => {
  return (
    <header className={styles.wrapper}>
      <Logo />
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
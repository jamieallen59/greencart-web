import styles from './index.scss'

import { H2, H4 } from '../Headers'
import Link from '../Link'
import Logo from '../Logo'
import Column from '../Column'
import Button from '../Button'


const Header = () => {
  return (
    <header className={styles.wrapper}>
      <Column className={styles.contentWrapper} size="large">
        <Link className={styles.logoWrapper} to='/'>
          <Logo />
          <H2 className={styles.brandName}>
            greenCart
          </H2>
        </Link>
        <Button className={styles.features} onClick={() => {
          window.scrollTo({
            top: document.body.scrollHeight,
            left: 0,
            behavior: 'smooth'
          })
        }}>
          <H4 className={styles.linkText}>
            Features
          </H4>
        </Button>
        <Link
          className={styles.link} 
          to="mailto:hello@greencart.app"
        >
          <H4 className={styles.linkText}>
            Contact
          </H4>
        </Link>
      </Column>
    </header>
  )
}

export default Header
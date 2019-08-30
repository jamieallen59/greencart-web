import { useRouter } from 'next/router'
import Link from 'next/link'

import { H2, H4 } from '../Headers'
import { default as GreenCartLink } from '../Link'
import Logo from '../Logo'
import Column from '../Column'
import Button from '../Button'

import styles from './index.scss'

const Header = () => {
  const router = useRouter()
  const { pathname } = router
  const isHomepage = pathname === '/'

  return (
    <header className={styles.wrapper}>
      <Column className={styles.contentWrapper} size="large">
        <GreenCartLink className={styles.logoWrapper} to='/'>
          <Logo />
          <H2 className={styles.brandName}>
            greenCart
          </H2>
        </GreenCartLink>
        <div className={styles.links}>
          {
            isHomepage
              ? <Button className={styles.link} onClick={() => {
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
              : null
          }
          <Link href='/about'>
            <div className={styles.link}>
              <H4 className={styles.linkText}>
                About
              </H4>
            </div>
          </Link>
          <GreenCartLink
            className={styles.link} 
            to="mailto:hello@greencart.app"
          >
            <H4 className={styles.linkText}>
              Contact
            </H4>
          </GreenCartLink>
        </div>
      </Column>
    </header>
  )
}

export default Header
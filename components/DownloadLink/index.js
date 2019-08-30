import PropTypes from 'prop-types'

import ChromeSVG from '../Icons/chrome'
import Link from '../Link'
import { TextMedium } from '../Text'

import styles from './index.scss'

const DownloadButton = ({ href }) => {
  return (
    <Link className={styles.wrapper} to={href}>
      <ChromeSVG className={styles.chromeIcon} />
      <TextMedium className={styles.text}>
        Get on the chrome store!
      </TextMedium>
    </Link>
  )
}

DownloadButton.propTypes = {
  href: PropTypes.string.isRequired
}

export default DownloadButton
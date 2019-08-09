import PropTypes from 'prop-types'

import Button from '../Button'
import ChromeSVG from '../Icons/chrome'
import { TextMedium } from '../Text'

import styles from './index.scss'

const DownloadButton = ({ onClick }) => {
  return (
    <Button className={styles.wrapper} onClick={onClick}>
      <ChromeSVG className={styles.chromeIcon} />
      <TextMedium>
        Get on the chrome store!
      </TextMedium>
    </Button>
  )
}

DownloadButton.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default DownloadButton
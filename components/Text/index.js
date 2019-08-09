import PropTypes from 'prop-types'

import styles from './index.scss'

const TextMedium = ({ children, className }) => {
  return (
    <p className={`${styles.textMedium} ${className}`}>
      {children}
    </p>
  )
}

TextMedium.defaultProps = {
  className: ''
}

TextMedium.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string
}

export {
  TextMedium
}

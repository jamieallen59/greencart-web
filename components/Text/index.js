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

const TextBoldMedium = ({ children, className }) => {
  return (
    <p className={`${styles.textBoldMedium} ${className}`}>
      {children}
    </p>
  )
}

TextBoldMedium.defaultProps = {
  className: ''
}

TextBoldMedium.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string
}

const TextBoldLarge = ({ children, className }) => {
  return (
    <p className={`${styles.textBoldLarge} ${className}`}>
      {children}
    </p>
  )
}

TextBoldLarge.defaultProps = {
  className: ''
}

TextBoldLarge.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string
}

export {
  TextMedium,
  TextBoldMedium,
  TextBoldLarge
}

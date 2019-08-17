import PropTypes from 'prop-types'

import styles from './index.scss'

const H1 = ({ children, className }) => {
  return (
    <h1 className={`${styles.headerOne} ${className}`}>
      {children}
    </h1>
  )
}

H1.defaultProps = {
  className: ''
}

H1.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string
}

const H2 = ({ children, className }) => {
  return (
    <h2 className={`${styles.headerTwo} ${className}`}>
      {children}
    </h2>
  )
}

H2.defaultProps = {
  className: ''
}

H2.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string
}

const H3 = ({ children, className }) => {
  return (
    <h3 className={`${styles.headerThree} ${className}`}>
      {children}
    </h3>
  )
}

H3.defaultProps = {
  className: ''
}

H3.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string
}

const H4 = ({ children, className }) => {
  return (
    <h4 className={`${styles.headerFour} ${className}`}>
      {children}
    </h4>
  )
}

H4.defaultProps = {
  className: ''
}

H4.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string
}

export {
  H1, H2, H3, H4
}
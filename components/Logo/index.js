import PropTypes from 'prop-types'

import styles from './index.scss'

const Logo = ({ className }) => {
  return (
    <img
      className={`${styles.wrapper} ${className}`}
      src="static/greencart_logo.png" 
      alt="greencart logo"
    />
  )
}

Logo.defaultProps = {
  className: ''
}

Logo.propTypes = {
  className: PropTypes.string
}

export default Logo


import PropTypes from 'prop-types'

import styles from './index.scss'

const Button = ({ children, className }) => {
  return (
    <button className={`${styles.wrapper} ${className}`}>
      {children}
    </button>
  )
}

Button.defaultProps = {
  className: ''
}

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.node.isRequired,
    PropTypes.element.isRequired
  ]).isRequired,
  className: PropTypes.string
}

export default Button
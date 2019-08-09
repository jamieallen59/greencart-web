import PropTypes from 'prop-types'

import styles from './index.scss'

const Button = ({ children, className, onClick }) => {
  return (
    <button 
      className={`${styles.wrapper} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

Button.defaultProps = {
  className: ''
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.node.isRequired,
    PropTypes.element.isRequired
  ]).isRequired,
  className: PropTypes.string
}

export default Button
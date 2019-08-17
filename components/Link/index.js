import PropTypes from 'prop-types'

import styles from './index.scss'

const Link = ({ children, className, to }) => {
  return (
    <a
      className={`${styles.wrapper} ${className}`}
      href={to}
    >
      {children}
    </a>
  )
}

Link.defaultProps = {
  className: ''
}

Link.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.node.isRequired,
    PropTypes.element.isRequired
  ]).isRequired,
  className: PropTypes.string
}

export default Link
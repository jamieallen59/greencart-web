import PropTypes from 'prop-types'

import styles from './index.scss'

const getSizeClass = size => {
  switch (size) {
    case 'large':
      return styles.large
    default:
      return styles.large
  }
}

const Column = ({ children, size, className }) => {
  const sizeClass = getSizeClass(size)

  return (
    <div className={`${sizeClass} ${className}`}>
      {children}
    </div>
  )
}

Column.defaultProps = {
  className: '',
  size: 'large'
}

Column.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.node.isRequired,
    PropTypes.element.isRequired
  ]).isRequired,
  size: PropTypes.oneOf(['large']),
  className: PropTypes.string
}

export default Column
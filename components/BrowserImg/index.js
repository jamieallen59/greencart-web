import styles from './index.scss'

const Logo = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.browserButtonWrapper}>
          <div className={styles.browserButton}></div>
        </div>
      </div>
      <div className={styles.content}>
        <img 
          src='/static/highlight_books.png' 
          alt="Chrome store image" 
          className={styles.image}
        />
      </div>
    </div>
  )
}

export default Logo


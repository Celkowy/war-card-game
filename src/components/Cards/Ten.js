import styles from '../CardLayout.module.css'

function Ten({ suit }) {
  return (
    <>
      <div className={`${styles.card_contaier__column}`}>
        <div>{suit}</div>
        <div>{suit}</div>
        <div className={`${styles.rotate}`}>{suit}</div>
        <div className={`${styles.rotate}`}>{suit}</div>
      </div>
      <div className={`${styles.card_contaier__column} ${styles.second_column} ${styles.ten}`}>
        <div>{suit}</div>
        <div className={`${styles.rotate}`}>{suit}</div>
      </div>
      <div className={`${styles.card_contaier__column}`}>
        <div>{suit}</div>
        <div>{suit}</div>
        <div className={`${styles.rotate}`}>{suit}</div>
        <div className={`${styles.rotate}`}>{suit}</div>
      </div>
    </>
  )
}

export default Ten

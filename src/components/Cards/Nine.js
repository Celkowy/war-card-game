import styles from '../CardLayout.module.css'

function Nine({ suit }) {
  return (
    <>
      <div className={`${styles.card_contaier__column}`}>
        <div>{suit}</div>
        <div>{suit}</div>
        <div className={`${styles.rotate}`}>{suit}</div>
        <div className={`${styles.rotate}`}>{suit}</div>
      </div>
      <div className={`${styles.card_contaier__column} ${styles.second_column}`}>
        <div>{suit}</div>
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

export default Nine

import styles from '../CardLayout.module.css'

function Five({ suit }) {
  return (
    <>
      <div className={`${styles.card_contaier__column}`}>
        <div>{suit}</div>
        <div>{suit}</div>
      </div>
      <div className={`${styles.card_contaier__column} ${styles.card_center}`}>
        <div>{suit}</div>
      </div>
      <div className={`${styles.card_contaier__column}`}>
        <div>{suit}</div>
        <div>{suit}</div>
      </div>
    </>
  )
}

export default Five

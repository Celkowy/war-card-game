import styles from '../CardLayout.module.css'

function Four({ suit }) {
  return (
    <>
      <div className={`${styles.card_contaier__column}`}>
        <div>{suit}</div>
        <div className={`${styles.rotate}`}>{suit}</div>
      </div>
      <div className={`${styles.card_contaier__column}`}></div>
      <div className={`${styles.card_contaier__column}`}>
        <div>{suit}</div>
        <div className={`${styles.rotate}`}>{suit}</div>
      </div>
    </>
  )
}

export default Four

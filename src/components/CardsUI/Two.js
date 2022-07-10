import styles from '../CardLayout.module.css'

function Two({ suit }) {
  return (
    <>
      <div className={`${styles.card_contaier__column}`}></div>
      <div className={`${styles.card_contaier__column} ${styles.space_around}`}>
        <div>{suit}</div>
        <div className={`${styles.rotate}`}>{suit}</div>
      </div>
      <div className={`${styles.card_contaier__column}`}></div>
    </>
  )
}

export default Two

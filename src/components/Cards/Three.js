import styles from '../CardLayout.module.css'

function Three({ suit }) {
  return (
    <>
      <div className={`${styles.card_contaier__column}`}></div>
      <div className={`${styles.card_contaier__column}`}>
        <div>{suit}</div>
        <div>{suit}</div>
        <div>{suit}</div>
      </div>
      <div className={`${styles.card_contaier__column}`}></div>
    </>
  )
}

export default Three

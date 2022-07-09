import styles from '../CardLayout.module.css'

function Six({ suit }) {
  return (
    <>
      <div className={`${styles.card_contaier__column}`}>
        <div>{suit}</div>
        <div>{suit}</div>
        <div>{suit}</div>
      </div>
      <div className={`${styles.card_contaier__column}`}></div>
      <div className={`${styles.card_contaier__column}`}>
        <div>{suit}</div>
        <div>{suit}</div>
        <div>{suit}</div>
      </div>
    </>
  )
}

export default Six

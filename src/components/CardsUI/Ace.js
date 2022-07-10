import styles from '../CardLayout.module.css'

function Ace({ suit }) {
  return (
    <>
      <div className={`${styles.card_contaier__column} ${styles.card_center}`}>
        <div>{suit}</div>
      </div>
    </>
  )
}

export default Ace

import styles from './CardLayout.module.css'
import CardLayoutHandler from './CardLayoutHandler'

export default function Card({ card, link, suitCorner, redColor, suit }) {
  return (
    <>
      <div onClick={link} className={`${styles.card}`}>
        <div className={styles.container}>
          <div className={`${redColor ? styles.red : ''}`}>{card.card}</div>
          <div>{suitCorner}</div>
        </div>

        <div className={`${styles.card_contaier}`}>
          <CardLayoutHandler card={card} suit={suit} redColor={redColor} />
        </div>

        <div className={`${styles.container} ${styles.right}`}>
          <div className={`${redColor ? styles.red : ''}`}>{card.card}</div>
          <div>{suitCorner}</div>
        </div>
      </div>
    </>
  )
}

import styles from './CardLayout.module.css'
import { ImHeart } from 'react-icons/im'
import { GiDiamonds } from 'react-icons/gi'
import { GiClubs } from 'react-icons/gi'
import { GiSpades } from 'react-icons/gi'
import CardLayoutHandler from './CardLayoutHandler'
import Ace from './Cards/Ace'

export default function Card({ card, pip, link }) {
  let suitCorner = ''
  let suit = ''
  let redColor = false

  if (card.suit === 'hearts') {
    suitCorner = <ImHeart className={styles.suit}></ImHeart>
    redColor = true
    suit = <ImHeart className={styles.suitCenter}></ImHeart>
  } else if (card.suit === 'spades') {
    suitCorner = <GiSpades className={`${styles.suit} ${styles.spades}`}></GiSpades>
    suit = <GiSpades className={`${styles.suitCenter} ${styles.spades}`}></GiSpades>
  } else if (card.suit === 'diamonds') {
    suitCorner = <GiDiamonds className={styles.suit}></GiDiamonds>
    suit = <GiDiamonds className={styles.suitCenter}></GiDiamonds>

    redColor = true
  } else {
    suitCorner = <GiClubs className={`${styles.suit} ${styles.clubs}`}></GiClubs>
    suit = <GiClubs className={`${styles.suitCenter} ${styles.clubs}`}></GiClubs>
  }

  return (
    <>
      <div onClick={link} className={`${styles.card}`}>
        <div className={styles.container}>
          <div className={`${redColor ? styles.red : ''}`}>{card.card}</div>
          <div>{suitCorner}</div>
        </div>

        <div className={`${styles.card_contaier}`}>
          <CardLayoutHandler card={card} suit={suit} />
        </div>

        <div className={`${styles.container} ${styles.right}`}>
          <div className={`${redColor ? styles.red : ''}`}>{card.card}</div>
          <div>{suitCorner}</div>
        </div>
      </div>
    </>
  )
}

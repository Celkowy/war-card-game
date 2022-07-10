import styles from './CardLayout.module.css'
import { ImHeart } from 'react-icons/im'
import { GiDiamonds } from 'react-icons/gi'
import { GiClubs } from 'react-icons/gi'
import { GiSpades } from 'react-icons/gi'
import CardLayoutHandler from './CardLayoutHandler'

export default function Card({ card, link }) {
  let suitCorner = ''
  let suit = ''
  let redColor = false

  if (card.suit === 'hearts') {
    suitCorner = <ImHeart className={styles.suit}></ImHeart>
    redColor = true
    suit = <ImHeart className={card.card === 'A' ? `${styles.suitCenter} ${styles.ace}` : styles.suitCenter}></ImHeart>
  } else if (card.suit === 'spades') {
    suitCorner = <GiSpades className={`${styles.suit} ${styles.spades}`}></GiSpades>
    suit = (
      <GiSpades
        className={
          card.card === 'A'
            ? `${styles.suitCenter} ${styles.spades} ${styles.ace}`
            : `${styles.suitCenter} ${styles.spades}`
        }
      ></GiSpades>
    )
  } else if (card.suit === 'diamonds') {
    suitCorner = <GiDiamonds className={styles.suit}></GiDiamonds>
    suit = (
      <GiDiamonds className={card.card === 'A' ? `${styles.suitCenter} ${styles.ace}` : styles.suitCenter}></GiDiamonds>
    )
    redColor = true
  } else if (card.suit === 'clubs') {
    suitCorner = <GiClubs className={`${styles.suit} ${styles.clubs}`}></GiClubs>
    suit = (
      <GiClubs
        className={
          card.card === 'A'
            ? `${styles.suitCenter} ${styles.clubs} ${styles.ace}`
            : `${styles.suitCenter} ${styles.clubs}`
        }
      ></GiClubs>
    )
  }

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

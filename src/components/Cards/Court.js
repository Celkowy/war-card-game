import styles from '../CardLayout.module.css'
import { GiOldKing } from 'react-icons/gi'
import { GiChessQueen } from 'react-icons/gi'
import { GiJackPlug } from 'react-icons/gi'

function Court({ suit, cardFigure, redColor }) {
  let courtFigure = ''

  if (cardFigure === 'K') {
    courtFigure = <GiOldKing />
  } else if (cardFigure === 'Q') {
    courtFigure = <GiChessQueen />
  } else {
    courtFigure = <GiJackPlug />
  }

  return (
    <>
      <div className={`${styles.card_contaier__column}`}>
        <div></div>
        <div></div>
        <div className={`${styles.rotate}`}>{suit}</div>
      </div>
      <div
        className={
          redColor
            ? `${styles.card_contaier__column} ${styles.second_column} ${styles.court} ${styles.red}`
            : `${styles.card_contaier__column} ${styles.second_column} ${styles.court}`
        }
      >
        {courtFigure}
      </div>
      <div className={`${styles.card_contaier__column}`}>
        <div>{suit}</div>
        <div></div>
        <div></div>
      </div>
    </>
  )
}

export default Court

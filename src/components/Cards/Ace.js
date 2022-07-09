import styles from '../CardLayout.module.css'
import { GiOldKing } from 'react-icons/gi'
import { GiJackPlug } from 'react-icons/gi'

function Ace({ suit }) {
  return (
    <>
      <div className={`${styles.card_contaier__column}`}>
        <div></div>
        <div></div>
        <div>{suit}</div>
      </div>
      <div className={`${styles.card_contaier__column} ${styles.second_column}`}>
        <GiOldKing className={`${styles.king}`} />
      </div>
      <div className={`${styles.card_contaier__column}`}>
        <div>{suit}</div>
        <div></div>
        <div></div>
      </div>
    </>
  )
}

export default Ace

{
  /* <>
      <div className={`${styles.card_contaier__column} ${styles.card_center}`}>
        <div>{suit}</div>
      </div>
    </> */
}

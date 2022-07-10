import Two from './Cards/Two'
import Three from './Cards/Three'
import Four from './Cards/Four'
import Five from './Cards/Five'
import Six from './Cards/Six'
import Seven from './Cards/Seven'
import Eight from './Cards/Eight'
import Nine from './Cards/Nine'
import Ten from './Cards/Ten'
import Ace from './Cards/Ace'
import Court from './Cards/Court'

function CardLayoutHandler({ card, suit, redColor }) {
  let cardLayout = ''
  if (card.card === 2) {
    cardLayout = <Two suit={suit} />
  } else if (card.card === 3) {
    cardLayout = <Three suit={suit} />
  } else if (card.card === 4) {
    cardLayout = <Four suit={suit} />
  } else if (card.card === 5) {
    cardLayout = <Five suit={suit} />
  } else if (card.card === 6) {
    cardLayout = <Six suit={suit} />
  } else if (card.card === 7) {
    cardLayout = <Seven suit={suit} />
  } else if (card.card === 8) {
    cardLayout = <Eight suit={suit} />
  } else if (card.card === 9) {
    cardLayout = <Nine suit={suit} />
  } else if (card.card === 10) {
    cardLayout = <Ten suit={suit} />
  } else if (card.card === 'A') {
    cardLayout = <Ace suit={suit} />
  } else {
    cardLayout = <Court suit={suit} cardFigure={card.card} redColor={redColor} />
  }

  return cardLayout
}

export default CardLayoutHandler

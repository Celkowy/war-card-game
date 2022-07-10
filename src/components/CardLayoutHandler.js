import Two from './CardsUI/Two'
import Three from './CardsUI/Three'
import Four from './CardsUI/Four'
import Five from './CardsUI/Five'
import Six from './CardsUI/Six'
import Seven from './CardsUI/Seven'
import Eight from './CardsUI/Eight'
import Nine from './CardsUI/Nine'
import Ten from './CardsUI/Ten'
import Ace from './CardsUI/Ace'
import Court from './CardsUI/Court'

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

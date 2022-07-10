import SuitLayoutHandler from './SuitLayoutHandler'

export default function Player(props) {
  return <SuitLayoutHandler card={props.cards[0]}></SuitLayoutHandler>
}

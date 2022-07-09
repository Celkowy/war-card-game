import Card from './Card'

export default function Player(props) {
  function linki() {
    console.log('linki')
  }

  return <Card card={props.cards[0]} link={linki}></Card>
}

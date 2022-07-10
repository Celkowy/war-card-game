import './App.css'
import Wrapper from './Wrapper'
import Player from './components/Player'
import Computer from './components/Computer'
import styles from './Wrapper.module.css'
import { figures } from './components/FullDeck/Figures'
import React from 'react'

const cards = [...figures]
const playerCards = []
let computerCards = []
for (let i = 0; i < 26; i++) {
  const random = randomNumber(cards.length)
  playerCards.push(cards[random])
  cards.splice(random, 1)
}

computerCards = [...cards.sort(() => 0.5 - Math.random())]

function randomNumber(maxValue) {
  return Math.floor(Math.random() * maxValue)
}

function App() {
  return (
    <Wrapper className={styles.wrapper}>
      <Computer cards={computerCards}></Computer>
      <Player cards={playerCards}></Player>
    </Wrapper>
  )
}

export default App

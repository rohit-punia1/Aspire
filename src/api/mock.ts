import { Card } from '../types'
import { randomCardNumber, randomExpiry } from '../utils/random'

const initial: Card[] = [
  {
    id: '1',
    name: 'Mark Henry',
    number: randomCardNumber(),
    expiry: '12/24',
    cvv: '123',

    brand: 'VISA'
  },
  {
    id: '2',
    name: 'Company Card',
    number: randomCardNumber(),
    expiry: '02/25',
    cvv: '123',

    brand: 'VISA'
  }
]

export async function fetchCards(): Promise<Card[]> {

  const stored = localStorage.getItem('aspire_cards')
  if (stored) return JSON.parse(stored)
  localStorage.setItem('aspire_cards', JSON.stringify(initial))
  return initial
}

export async function addCard(name: string): Promise<Card> {
  const c: Card = {
    id: Date.now().toString(),
    name,
    number: randomCardNumber(),
    expiry: randomExpiry(),
    cvv: '123',
    brand: 'VISA'
  }
  const cards = await fetchCards()
  const updated = [...cards, c]
  localStorage.setItem('aspire_cards', JSON.stringify(updated))

  return c
}

import React from 'react'
import { Card as CardType } from '../types'

export default function CardTile({card}:{card:CardType}) {
  return (
    <div className="card-green w-[520px] h-56 relative shadow-lg">
      <div className="flex justify-between items-start">
        <div>
          <div className="text-xl font-semibold">{card.name}</div>
          <div className="mt-6 tracking-widest text-lg">{card.number}</div>
        </div>
        <div className="text-sm opacity-80">VISA</div>
      </div>

      <div className="absolute bottom-6 left-6 text-sm">
        <div>Thru: {card.expiry}</div>
      </div>
    </div>
  )
}

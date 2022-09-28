import React from 'react'
import { Card } from '../card/card.component.jsx'
import './card-list.style.css'

export const CardList = ({ monsters }) => {
  return (
    <div className="card-list">
      {monsters.map((monster) => {
        return <Card key={monster.id} monster={monster}></Card>
      })}
    </div>
  )
}

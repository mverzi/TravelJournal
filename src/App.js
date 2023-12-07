import React from "react"
import Header from "./components/Header"
import Card from "./components/Card"
import data from "./data"
import './style.css'

export default function App(){

  const cards = data.map(item => {
    return (
      <Card 
        key={item.id}
        {...item}
      />
    )
  })

  return (
    <div className="container">
      <Header />
      <section>
        {cards}
      </section>
    </div>
  )
}

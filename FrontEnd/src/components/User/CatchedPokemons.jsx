import React from 'react'

function CatchedPokemons() {
    const pokeCatched = JSON.parse(localStorage.getItem('poke'))
  return (
    <div>CatchedPokemons</div>
  )
}

export default CatchedPokemons
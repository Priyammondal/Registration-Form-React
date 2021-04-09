import React from 'react'

function PokemonList({setName}) {
    return (
        <div>
        <h1>This is Pokemon List</h1>
        <button onClick={
            ()=>{
                setName("Bulbasore")
            }
        }>Change Name</button>
        </div>
    )
}

export default PokemonList

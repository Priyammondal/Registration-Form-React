import React,{useState} from 'react'
import PokemonList from './PokemonList'

function Pagination() {
    const [name,setName]=useState("Charizard");
    return (
        <div>
            <h1>This is Psgination</h1>
            <PokemonList setName={setName}/>
            {name}
        </div>
    )
}

export default Pagination

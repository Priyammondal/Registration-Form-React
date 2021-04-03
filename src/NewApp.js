import React, { useState, useEffect } from 'react'
import PokemonList from './PokemonList'
import Pagination from './Pagination'
import Axios from 'axios';

function NewApp() {
    const [Pokemon, SetPokemon] = useState([])
    const [CurrentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon")
    const [NextPageUrl, setNextPageUrl] = useState()
    const [PrevPageUrl, setPrevPageUrl] = useState()
    const [Loading, setLoading] = useState(true)
    useEffect(() => {
        setLoading(true)
        let cancel
        Axios.get(CurrentPageUrl, {
            cancelToken: new Axios.CancelToken(c => cancel = c)
        }).then(res => {
            setLoading(false)
            setNextPageUrl(res.data.next)
            setPrevPageUrl(res.data.previous)
            SetPokemon(res.data.results.map((p) => p.name))
        })
        return () => cancel()

    }, [CurrentPageUrl])


    function gotoNextPage() {
        setCurrentPageUrl(NextPageUrl)
    }
    function gotoPrevPage() {
        setCurrentPageUrl(PrevPageUrl)
    }


    if (Loading) return "Loading..."

    return (
        <div>
            <PokemonList pokemon={Pokemon} />
            <Pagination
                gotoNextPage={NextPageUrl ? gotoNextPage : null}
                gotoPrevPage={PrevPageUrl ? gotoPrevPage : null}
            />
        </div>
    );
}

export default NewApp

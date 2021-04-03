import React, { useState } from 'react'
import Axios from 'axios';

function About() {
    const [joke, setJoke] = useState("");


    const getJoke = () => {
        Axios.get("https://official-joke-api.appspot.com/random_joke").then(
            (response) => {
                console.log(response);
                setJoke(response.data.setup + "....." + response.data.punchline);
            }
        )


        // fetch("https://official-joke-api.appspot.com/random_joke").then(
        //     (response) => response.json())
        //     .then((data) => {
        //         setJoke(data.setup + " ... " + data.punchline);
        //     }
        // )
}
return (
    <div className="container">
        <h2>this is about page</h2>
        <button onClick={getJoke}>GetJoke</button>
        {joke}
    </div>
)
}

export default About

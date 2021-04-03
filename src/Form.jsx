import React, { useState } from 'react';

const Form = () => {
    const [username,setUsername]=useState("");
    const [age,setAge]=useState("");
    const [address,setAddress]=useState("");

    function update() {

        let data = { username, age, address }
        console.warn("Your data has been updated",data)
    }
    return (
        <div className="form">
            <h1>Make a new user login page</h1>
                <input type="text" value={username} name="Username" onChange={(e) => { setUsername(e.target.value) }} /> <br />
                <input type="text" value={age} name="Age" onChange={(e) => { setAge(e.target.value) }} /> <br />
                <input type="text" value={address} name="Address" onChange={(e) => { setAddress(e.target.value) }} /> <br />
                <button onClick={update}>Click Me</button>
        </div>
    )
}

export default Form

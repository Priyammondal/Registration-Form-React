import React, { useState } from 'react';
const Demo3 = (props) => {
    const [name, setName] = useState("chiku");
    const [age,setAge]= useState(props.age);
    return (
        <div className="demo3">
            <h1>Welcome, Niloy Das</h1>
            <h2>Name: {name}</h2>
            <button onClick={() => {
                setName("Niloy Das")
            }}>update name</button>
            <h2>Age: {age}</h2>
            <button onClick={()=>{setAge(76)}}>Update Age</button>
        </div>
    )
}
export default Demo3;
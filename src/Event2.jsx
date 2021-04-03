import React,{useState} from 'react'

const Event2 = () => {
    const [name,setName]=useState("Priyam Mondal");
    function update(e)
    {
        // setName("Niloy Das");
        setName(e.target.value);
        let data ={name};

        console.log(data);
    }
    return (
        <div className="form">
            <h1>This is Event2</h1>
            <input type="text" value={name} onChange={update}/> <br/>
            <button onClick={update}>Update Name</button>
        </div>
    )
}

export default Event2

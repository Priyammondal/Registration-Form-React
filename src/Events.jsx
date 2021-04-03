import React,{useState} from 'react';
const Events = () => {
    const [name,setName]=useState("P.M");
    function change(e)
    {
        setName(e.target.value);
        console.warn(e.target.value);
    }
    return(
        <div>
            <h1>Hellow React...!!</h1>
            {/* <h3>{name}</h3> */}
            <input type="text" value={name} onChange={change} />
            <button onClick={()=>{alert(name);console.log(name)}}>Update Name</button>
        </div>
    )
}
export default Events;
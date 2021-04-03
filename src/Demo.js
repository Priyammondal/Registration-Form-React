import React,{useEffect,useState} from 'react';
const Demo = () => {
    const [name,setName]=useState("P.M");
    const [age,setAge]=useState(64);
    useEffect(
        ()=>{console.warn("Component did mount",{name})},[])
    useEffect(
        ()=>{console.warn("Component did update",{name},{age})},[name,age])
    return (
       <div className="container">
        <h1>This is Demo</h1>
        <h2>{name}</h2>
        <h2>{age}</h2>
        <button onClick={()=>{setName("Priyam Mondal")}}>update name</button>
        <button onClick={()=>{setAge(22)}}>update age</button>
       </div>
    )
}
export default Demo;
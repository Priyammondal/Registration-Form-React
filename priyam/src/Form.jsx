import React, { useState } from 'react'

function Form() {
    const [UserRegistration, setUserRegistration] = useState({
        UserName: "",
        Email: "",
        PhoneNumber: "",
        Password: ""
    })
    const [Records,setRecords]=useState([])
    const HandleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name, value);
        setUserRegistration({ ...UserRegistration, [name]: value })
    }
    const HandleSubmit = (e) => {
        e.preventDefault();
        const newRecord = {...UserRegistration, id : new Date().getTime().toString()}
        console.log(Records);
        setRecords([...Records, newRecord]);
        console.log(Records);
        setUserRegistration({
            UserName: "",
            Email: "",
            PhoneNumber: "",
            Password: ""
        })
    }
    return (
        <div className="body">
            <h1>REGISTRATION FORM</h1>
            <form onSubmit={HandleSubmit}>
                <div className="halum">
                    <label htmlFor="UserName">UserName</label>
                    <input type="text" autoComplete="off"
                        value={UserRegistration.UserName}
                        onChange={HandleInput}
                        name="UserName"
                        id="UserName" />
                </div>
                <div className="halum">
                    <label htmlFor="Email">Email</label>
                    <input type="email" autoComplete="off"
                        value={UserRegistration.Email}
                        onChange={HandleInput}
                        name="Email"
                        id="Email" />
                </div>
                <div className="halum">
                    <label htmlFor="PhoneNumber">Phone Number</label>
                    <input type="number" autoComplete="off"
                        value={UserRegistration.PhoneNumber}
                        onChange={HandleInput}
                        name="PhoneNumber"
                        id="PhoneNumber" />
                </div>
                <div className="halum">
                    <label htmlFor="Password">Password</label>
                    <input type="password" autoComplete="off"
                        value={UserRegistration.Password}
                        onChange={HandleInput}
                        name="Password"
                        id="Password" />
                </div>
                <button type="submit">Submit</button>


            </form>
            <div>
                {
                    Records.map((e)=>{
                        return(
                            <div className="showData" key={e.id}>
                                <p>{e.UserName}</p>
                                <p>{e.Email}</p>
                                <p>{e.PhoneNumber}</p>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}
export default Form


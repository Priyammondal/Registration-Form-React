import React, { useState } from 'react'

function NewForm() {
    const HandleInput = ()=>{
        
    }
    return (
        <body>
            <h1>REGISTRATION FORM</h1>
            <div id="form">
                <div className="halum">
                    <label htmlFor="UserName">UserName</label>
                    <input type="text" autoComplete="off"
                        value="testing"
                        name="UserName"
                        id="UserName" />
                </div>
                <div className="halum">
                    <label htmlFor="Email">Email</label>
                    <input type="text" autoComplete="off"
                        value="testing"
                        onChange={HandleInput}
                        name="Email"
                        id="Email" />
                </div>
                <div className="halum">
                    <label htmlFor="PhoneNumber">Phone Number</label>
                    <input type="text" autoComplete="off"
                        value="testing"
                        onChange={HandleInput}
                        name="PhoneNumber"
                        id="PhoneNumber" />
                </div>
                <div className="halum">
                    <label htmlFor="Password">Password</label>
                    <input type="text" autoComplete="off"
                        value="testing"
                        onChange={HandleInput}
                        name="Password"
                        id="Password" />
                </div>
                <button type="submit">Submit</button>


            </div >

        </body >
    )
}
export default NewForm


import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
function Listing() {
    const [user, setUser] = useState(
        [
            { name: "Priyam", age: 22 },
            { name: "Niloy", age: 22 },
            { name: "Bikram", age: 21 },
            { name: "Anish", age: 23 },
            { name: "Amarta", age: 24 }
        ]
    )
    return (
        <div>
            <h1>This is Listing</h1>
            {
                user.map(
                    (item) =>
                        <div>{item.name}, {item.age}</div>
                )
            }


            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Index</th>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user.map(
                            (item,index) => <tr>
                                <td>{index}</td>
                                <td>{item.name}</td>
                                <td>{item.age}</td>
                            </tr>
                        )
                    }

                </tbody>
            </Table>
        </div>
    )
}
export default Listing;
import React, { useState } from 'react';
import { uriBase, uriAPI } from '../consts'
import { Link as RLink } from 'react-router-dom'

function AddUser(props) {

    const [fName, setFName] = useState("")
    const [lName, setLName] = useState("")
    const [uName, setUName] = useState("")
    const [eMail, setEMail] = useState("")

    const onClickHandler = (event) => {

        let body = {
            fName,
            lName,
            uName,
            eMail
        }
        fetch(`${uriBase}${uriAPI}/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })
            .then(HttpResult => {
                if (!HttpResult.ok) {
                    throw new Error("Couldn't add")
                }
                return HttpResult.json()
            })
            .then(result => {
                props.history.push('/users')
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div>
            <div>
                First Name<input type="text" onChange={(event) => { setFName(event.target.value) }} value={fName}></input>
                Last Name<input type="text" onChange={(event) => { setLName(event.target.value) }} value={lName}></input>
                User Name<input type="text" onChange={(event) => { setUName(event.target.value) }} value={uName}></input>
                eMail<input type="text" onChange={(event) => { setEMail(event.target.value) }} value={eMail}></input>
            </div>
            <div>
                <button onClick={onClickHandler}>Save</button>
            </div>
            <div>
                <RLink to="/users" >Users</RLink>
            </div>
        </div>
    );
}

export default AddUser;

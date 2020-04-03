import React, { useState, useEffect } from 'react';
import { Link as RLink } from 'react-router-dom'
import { uriBase, uriAPI } from '../consts'
import User from './User'

function Users(props) {

    const [users, setUsers] = useState([])

    const refresh = () => {

        fetch(`${uriBase}${uriAPI}/users`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(HttpResult => {
                if (!HttpResult.ok) {
                    throw new Error("Can't get Users")
                }

                return HttpResult.json()
            })
            .then(users => {
                setUsers(users)
            })
            .catch(error => {
                console.log(error)
            })
    }

    useEffect(() => {
        refresh()
    }, [])

    return (
        <div>
            {
                users.map(user => {
                    return <User refresh={refresh} user={user}></User>
                })
            }
            <div>
                <RLink to="/adduser">Add User</RLink>
            </div>
            <div>
                <RLink to="/home">Home</RLink>
            </div>
        </div>
    );
}

export default Users;

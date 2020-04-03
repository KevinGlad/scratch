import React, { useState, useEffect } from 'react';
import { Link as RLink } from 'react-router-dom'
import { uriBase, uriAPI } from '../consts'

function User(props) {

    const onDeleteHandler = () => {

        fetch(`${uriBase}${uriAPI}/users/${props.user._id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(HttpResult => {
                if (!HttpResult.ok) {
                    throw new Error("Can't delete User")
                }

                return HttpResult.json()
            })
            .then(user => {
                props.refresh()
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div>
            <h3>{props.user.uName}  </h3>
            <button onClick={onDeleteHandler}>Delete</button>
        </div>
    );
}

export default User;

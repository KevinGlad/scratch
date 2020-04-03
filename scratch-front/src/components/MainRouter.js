import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Home from './Home'
import Users from './Users'
import AddUser from './AddUser'

export default function MainRouter() {

    return (
        <div>
            <Router>
                <Switch>
                    <Route path='/users' component={Users}></Route>
                    <Route path='/adduser' component={AddUser}></Route>
                    <Route path='/' component={Home}></Route>

                </Switch>
            </Router>
        </div>
    )

}
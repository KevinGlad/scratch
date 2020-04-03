import React from 'react';
import {Link as RLink} from 'react-router-dom'

function Home(props) {
    return (
        <div>
            <h1>This is my Home Homey</h1>
            <h1>Don't disrespect my home dude</h1>
            <RLink to="/users">Users</RLink>
        </div>
    );
}

export default Home;
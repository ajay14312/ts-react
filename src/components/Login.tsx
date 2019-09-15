import React, { useState } from 'react';

import './Login.css'

function Login() {
    const [userName, setUsername] = useState('');
    const [pwd, setPWD] = useState('');

    function loginHandler() {
        console.log(userName);
    }

    return (
        <div className='Login'>
            <div className="Main-container">
                <h1>Welcome to JIRA</h1>
                <div className="Div">
                    <label className="Label">User name </label>
                    <input
                        type="text"
                        value={userName}
                        onChange={event => (setUsername(event.target.value))}
                        className="Input" />
                </div>
                <div className="Div">
                    <label className="Label">Password </label>
                    <input
                        type="text"
                        value={pwd}
                        onChange={event => (setPWD(event.target.value))}
                        className="Input" />
                </div>
                <button className="btn" onClick={loginHandler}>Login</button>
            </div>
        </div>
    )
}

export default Login;

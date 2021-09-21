import React, { useState } from 'react';
import '../styles/Login.css';
import { Link } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = (e) =>{
        e.preventDefault();

        //Do some fancy firebase login shiiiiiiiit.........
    }

    const register = (e) =>{
        e.preventDefault();

        //Do some fancy firebase register shiiiiiiiit........
    }

    return (
        <div className="login">
            <Link to='/home'>
                <img 
                src="https://the-peak.ca/wp-content/uploads/2018/07/amazon-logo-preview.png"
                className="login__logo"
                alt="amazon header"
                />
            </Link>

            <div className="login__container">
                <h1>Sign-in</h1>

                <form>
                    <h5>Email</h5>
                    <input 
                    type='text' 
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    />

                    <h5>Password</h5>
                    <input 
                    type='password' 
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    />

                    <button 
                    type="submit" 
                    onClick={signIn} 
                    className="login__signInButton"> Sign In 
                    </button>
                </form>

                <p>
                    By signing-in you agree to the AMAZON 
                    FAKE CLONE Conditions of Use & Sale. <br />
                    Please see our Privacy Notice, our 
                    Cookies Notice and our Interest-Based 
                    Ads Notice.
                </p>

                <button 
                type="submit"
                onClick={register}
                className="login__registerButton">Create your Amazon Account
                </button>


            </div>
        </div>
    )
}

export default Login;

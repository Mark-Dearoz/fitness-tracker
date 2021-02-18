import React from 'react'
import {Link} from 'react-router-dom'

const SignIn = () =>{
    return(
        <div className='sign-in'>
            <h1>Sign-In</h1>
            <div className='sign-in-form'>
                <div className='label'>Username</div>
                <input type='email' placeholder='email'></input>
                <div className='label '>Password</div>
                <input type='password' placeholder='password'></input>
                <div>
                    <button className='btn-primary'>Sign-In</button>
                    <Link to= '/'>
                        <p>Sign Up</p>
                    </Link>
                    <Link to='/'>
                        <p>Log in as guest</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SignIn
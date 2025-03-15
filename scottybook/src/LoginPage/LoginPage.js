import React from 'react'
import {Link} from 'react-router-dom'
import './LoginPage.css'
function LoginPage () {
    return(
        <div className='login'>
            <div className='facebook'>
                <div className='facebook-text'>
                    facebook
                </div>
            <div className='title'>
                Facebook helps connect and 
                <br></br> share with the people in your life.
            </div>
            </div>
            <div className='login-container'>
                <div className='login-detail'>
                    <input type='email' placeholder='email@.com' />
                    <br></br>
                    <input type='password' placeholder='password' />
                    <br></br>
                    <button className='btn'>
                        <Link to="/HeaderArea">Login</Link>
                    </button>
                </div>
                <div className='forget'>
                    <a href='forgot'>Forgot Account?</a>
                    <br></br>
                </div>
                <div className='create'>
                    <button className='btns'>
                        Create New Account
                    </button>
                </div>
                <br></br>
                <div className='page'>
                    <a href='create-page'>Create Page</a>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;
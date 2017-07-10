import React from 'react'

import './SignIn.css'
import { auth, googleProvider } from './base'

const SignIn = () => {
    const authenticate = () => {
        auth
            .signInWithPopup(googleProvider)
            .then(handleAuth)
    }

    return (
        <div className="Sign In">
            <h1>Sign In</h1>
            <button onClick={authenticate}>Sign In</button>
        </div>
    )
}

export default SignIn
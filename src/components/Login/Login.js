import React, { useContext } from 'react';


const Login = () => {

    const handleGoogleSignIn = () => {

    }
    return (
        <div>
            <h1>This is Login</h1>
            <button onClick={handleGoogleSignIn}>Google Sign In</button>
        </div>
    );
};

export default Login;
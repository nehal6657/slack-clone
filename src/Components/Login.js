import { Button } from '@material-ui/core';
import React from 'react';
import './Login.css';
import {auth, provider} from '../firebase';
import { useStateValue } from './StateProvider';
import {actionTypes} from "./reducer";
function Login() {
    const [state, dispatch] = useStateValue();
    const signIn = () =>{
        auth.signInWithPopup(provider)
        .then(result => {
            console.log(result);
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user
            })

        })
        .catch((error)=>{
            alert(error.message);
        })
    }
    return (
        <div className="login">
            <div className="login__container">
                <img src='https://mms.businesswire.com/media/20210517005783/en/878947/23/Screen-Shot-2019-01-17-at-2.29.34-PM.jpg'/>
                <h1>Sign In</h1>
                <p>Slack clone !!</p>
                <Button onClick={signIn}>Sign In with Google</Button>
            </div>
        </div>
    )
}

export default Login

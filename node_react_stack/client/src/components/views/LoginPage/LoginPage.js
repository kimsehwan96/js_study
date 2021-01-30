import React, { useState } from 'react'
import Axios from 'axios';
import { useDispatch } from 'react-redux';
import {loginUser} from '../../../_actions/user_action'

function LoginPage(props) {

    const dispatch = useDispatch();

    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");

    const onEmailHandler =  (event) => {
        setEmail(event.currentTarget.value)
    } //event handling logic  !! Important

    const onPasswordHandler = (e) => {
        setPassword(e.currentTarget.value)
    }

    const onSubmitHanlder =(e) => {
        e.preventDefault();
        //preventDefault ?  <- 페이지 리프레시를 막아주는것임.
        console.log('Email' , Email);
        console.log('Password' , Password);
        let body = {
            email: Email,
            password: Password
        }

        dispatch(loginUser(body))
            .then(response => {
                if(response.payload.loginSucess){
                    props.history.push('/')
                } else {
                    alert('error')
                }
            })


    }

    return (
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center'
            , width: '100%', height: '100vh'}}
            onSubmit = {onSubmitHanlder}
            >
            <form style={{
                display: 'flex', flexDirection: 'column'
            }}>
                <label>Email</label>
                <input type="email" value={Email} onChange={onEmailHandler} />
                <label>Password</label>
                <input type="password" value={Password} onChange={onPasswordHandler} />
                <br />
                <button>
                    Login
                </button>
            </form>
        </div>
    )
}

export default LoginPage

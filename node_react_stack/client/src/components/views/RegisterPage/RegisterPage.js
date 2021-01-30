import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {registerUser} from '../../../_actions/user_action';

function RegisterPage(props) {

    const dispatch = useDispatch();

    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [Name, setName] = useState("")
    const [ConfirmPassword, setConfirmPassword] = useState("")

    const onEmailHandler =  (event) => {
        setEmail(event.currentTarget.value)
    } //event handling logic  !! Important

    
    const onNameHandler = (e) => {
        setName(e.currentTarget.value)
    }

    const onPasswordHandler = (e) => {
        setPassword(e.currentTarget.value)
    }
    
    const onConfirmPasswordHandler = (e) => {
        setConfirmPassword(e.currentTarget.value)
    }

    const onSubmitHanlder =(e) => {
        e.preventDefault();
        //preventDefault ?  <- 페이지 리프레시를 막아주는것임.
        if  (Password !== ConfirmPassword){
            return alert("check password ")
        }
        let body = {
            email: Email,
            password: Password,
            name: Name
        }

        dispatch(registerUser(body))
            .then(response => {
                if(response.payload.success){
                    props.history.push('/login')
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

                <label>Name</label>
                <input type="text" value={Name} onChange={onNameHandler} />

                <label>Password</label>
                <input type="password" value={Password} onChange={onPasswordHandler} />

                
                <label>Confirm Password</label>
                <input type="password" value={ConfirmPassword} onChange={onConfirmPasswordHandler} />
                <br />
                <button>
                    Register
                </button>
            </form>
        </div>
    )
}

export default RegisterPage

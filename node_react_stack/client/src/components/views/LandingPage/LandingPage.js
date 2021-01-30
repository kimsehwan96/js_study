import React, { useEffect } from 'react'
import axios from 'axios'; 

function LandingPage(props) {

    useEffect(() => {
        axios.get('/api/hello')
        .then(response => console.log(response.data))
    }, [])

    const onClickHandler = (e) => {
        axios.get(`api/users/logout`)
        .then(response => {
            if(response.payload.success){
                props.history.push('/login');
            } else {
                alert('log out error');
            }
        })
    }

    return (
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center'
            , width: '100%', height: '100vh'
        }}>
            <h2> 시작 페이지 </h2>
            <button onClick={onClickHandler}>
                Log out
            </button>
        </div>
    )
}

export default LandingPage

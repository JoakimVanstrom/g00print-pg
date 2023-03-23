import { useEffect } from 'react'
import axios from 'axios'
import HandShake from '../../assets/handshake.jpg'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import jwt from 'jsonwebtoken'


const HomeView = () => {
    const navigate = useNavigate();

    // const token = useSelector((state: any) => state.auth.token);
    // const isLoggedIn = useSelector((state: any) => state.auth.isLoggedIn);
    const token = window.localStorage.getItem('token')
    const isLoggedIn = window.localStorage.getItem('isLoggedIn')

// check if token has expired



   
    useEffect(() => {
        axios.get('http://localhost:3333/api/user', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(res => {
            console.log(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [token])


    return(
        <>
        {isLoggedIn === 'true' ? <h1>logged in</h1> : <h1>Not Logged In</h1>}
            <h1>Home</h1>
            <img src={HandShake} alt="handshake" />
        </>
    )

}

export default HomeView
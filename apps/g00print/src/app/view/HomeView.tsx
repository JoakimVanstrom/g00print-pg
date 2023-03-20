import { useEffect } from 'react'
import axios from 'axios'
import HandShake from '../../assets/handshake.jpg'
import { useSelector } from 'react-redux'



const HomeView = () => {

    const token = useSelector((state: any) => state.auth.token);

   
    useEffect(() => {
        axios.get('http://localhost:3333/api/user', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(res => {
            console.log(res.data)
        })
    }, [token])


    return(
        <>
            <h1>Home</h1>
            <img src={HandShake} alt="handshake" />
        </>
    )

}

export default HomeView
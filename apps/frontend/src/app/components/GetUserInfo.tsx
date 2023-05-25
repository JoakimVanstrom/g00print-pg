import { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { userActions } from '../store/slicers/user'



const GetUserInfo = () => {
    const navigate = useNavigate();
    const token = window.localStorage.getItem('token')
    const dispatch = useDispatch();

    // const prod = process.env.PRODUCTION_IP;
    const dev = 'localhost'
    const prod = '68.183.32.241'
    
  
    useEffect(() => {
        try{
            axios.get(`http://${prod}:3333/api/user`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(res => {
                dispatch(userActions.setUser(res.data))
                window.localStorage.setItem('username', res.data.name)
                window.localStorage.setItem('role', res.data.role)
            }).then(() => {
                navigate('/')
            })
            .catch(err => {
                console.log(err)
            })
        }
        catch(err){
            console.log(err)
        }
    }, [token, navigate, dispatch])

    return (<>
    </>)
}

export default GetUserInfo
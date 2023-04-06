import { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { userActions } from '../store/slicers/user'



const GetUserInfo = () => {
    const navigate = useNavigate();
    const token = window.localStorage.getItem('token')
    const dispatch = useDispatch();

    const PRODUCTION_IP = "68.183.32.241"
    const DEVELOPMENT_IP = "localhost"

  
    useEffect(() => {
        try{
            axios.get(`http://${PRODUCTION_IP}:3333/api/user`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(res => {
                dispatch(userActions.setUser(res.data))
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
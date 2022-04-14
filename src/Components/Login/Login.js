import { Button } from '@material-ui/core'
import React from 'react'
import { auth, provider } from '../../firebase'
import './Login.css'
import logo from '../../Assets/logo512.png'
import { useDispatch, useSelector } from 'react-redux'
import { login, selectUser } from '../../Redux Store/features/userSlice'

function Login() {
    const userL = useSelector(selectUser)
    const dispatch = useDispatch()
    const loginUser = () => {
        auth.signInWithPopup(provider).then( ({ user }) => {
            dispatch(login({
                diplayName: user.displayName,
                photoUrl: user.photoURL,
                email: user.email
            }))
            
        }).catch(err => alert(err))
    }
    return (
        <div className="login">
            <div className="login_container">
                <img style={ { height: 300, width: 330 } } src={logo} alt='Logo' />
                <Button className="login__button" variant="contained" color="primary"  onClick={loginUser}>Login with Google</Button>
            </div>
        </div>
    )
}

export default Login

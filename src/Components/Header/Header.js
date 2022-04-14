import { Avatar, IconButton } from '@material-ui/core'
import { Menu } from '@material-ui/icons'
import SearchIcon from '@material-ui/icons/Search';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import React from 'react'
import './Header.css'
import { auth } from '../../firebase';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../../Redux Store/features/userSlice';
import logo from '../../Assets/logo192.png'

function Header() {

    const dispatch = useDispatch()
    const user = useSelector(selectUser)

    const logoutUser = () => {
        auth.signOut().then( () => {dispatch(logout() )} ) 
    }

    return (
        <div className="header">
            <div className="header__left">
                <IconButton>
                    <Menu />
                </IconButton>
                <img style={ { height: 40, width: 60 } } src={logo} alt="logo" />
            </div>

            <div className="header__middle">
                <SearchIcon />
                <input type="text" />
            </div>

            <div className="header__right">
                <IconButton>
                    <AppsIcon/>
                </IconButton>
                <IconButton>
                    <NotificationsIcon />
                </IconButton>
                <IconButton onClick={logoutUser}>
                    <Avatar className="header__right_Avatar" src={user?.photoURL}  />
                </IconButton>
            </div>
        </div>
    )
}

export default Header

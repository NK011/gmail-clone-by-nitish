import React, { useEffect } from 'react';
import './App.css';
import EmailList from './Components/EmailList/EmailList';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Mail from './Components/Mail/Mail';
import ComposeMail from './Components/ComposeMail/ComposeMail';
import { useDispatch, useSelector } from 'react-redux';
import { selectsendMailIsOpen } from './Redux Store/features/mailSlice';
import { login, logout, selectUser } from './Redux Store/features/userSlice';
import Login from './Components/Login/Login';
import { auth } from './firebase';

function App() {

  const user = useSelector(selectUser)
  const sendMailIsOpen = useSelector(selectsendMailIsOpen)
  const dispatch = useDispatch()

  useEffect( ()=> {
    auth.onAuthStateChanged(user=> {
      if(user){
          dispatch(login({
            displayName: user.displayName,
            photoUrl: user.photoURL,
            email: user.email
          }))
      }else{
        dispatch(logout())
      }
    })
  },[])

  return (
    <Router>

      { !user  ? (<Login/>) : (
       <div className="app">
           <Header/>
           <div className="app__body">
             <Sidebar />
             <Switch>
               <Route path="/mail">
                 <Mail />
               </Route>
               <Route path="/">
                 <EmailList />
               </Route>
             </Switch>
           </div>
           {sendMailIsOpen && <ComposeMail />}
       </div>
      )}
           
    </Router>

  );
}

export default App;

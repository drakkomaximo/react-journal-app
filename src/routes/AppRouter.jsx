import React, { useEffect, useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Redirect
  } from "react-router-dom";
import JournalScreen from "../components/journal/JournalScreen";
import AuthRouter from "./AuthRouter";
import { firebase } from '../firebase/firebase-config'
import { useDispatch } from "react-redux";
import { login } from "../actions/auth";
import PublicRoute from "./PublicRoute";
import PrivateRoutes from "./PrivateRoutes";

const AppRouter = () => {

  const dispacth = useDispatch()
  const [checking, setChecking] = useState(true)
  const [isLoggedIn, setisLoggedIn] = useState(false)

  useEffect(() => {
    firebase.auth().onAuthStateChanged( (user) =>{
      if( user?.uid ){
        dispacth( login( user.uid, user.displayName) )
        setisLoggedIn(true)
      }else{
        setisLoggedIn(false)
      }

      setChecking(false)
    })
  }, [dispacth, setChecking, setisLoggedIn])

  if( checking ){
    return (
      <h1>Wait...</h1>
    )
  }

  return (
    <Router>
      <div>
      <Switch>
        <PublicRoute path="/auth" component={AuthRouter} isAuthenticated={ isLoggedIn }/>
        <PrivateRoutes exact path="/" component={JournalScreen} isAuthenticated={ isLoggedIn }/>
        <Redirect to='auth/login' />
      </Switch>
      </div>
    </Router>
  );
};

export default AppRouter

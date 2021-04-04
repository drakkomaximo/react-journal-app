import React from "react";
import { Link } from "react-router-dom";
import SocialNetworkButton from "./socialNetworkButton/SocialNetworkButton";

const LoginScreen = () => {
  return (
    <>
      <h3 className='auth__title'>Login</h3>

      <form action="">
        <input className='auth__input' type="text" placeholder="Email" name="email" autoComplete='off'/>

        <input className='auth__input' type="password" placeholder="Password" name="password" />

        <button className='btn btn-primary btn-block' type='submit'>Login</button>

        <hr/>
        
            <SocialNetworkButton/>

            <Link className='link' to='/auth/register'>
                Create a new account 
            </Link>
      </form>
    </>
  );
};

export default LoginScreen;

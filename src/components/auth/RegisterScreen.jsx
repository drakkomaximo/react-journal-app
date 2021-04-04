import React from 'react'
import { Link } from 'react-router-dom'

const RegisterScreen = () => {
    return (
        <>
      <h3 className='auth__title'>Register</h3>

      <form action="">

        <input className='auth__input' type="text" placeholder="Name" name="name" autoComplete='off'/>

        <input className='auth__input' type="text" placeholder="Email" name="email" autoComplete='off'/>

        <input className='auth__input' type="password" placeholder="Password" name="password" />

        <input className='auth__input' type="password" placeholder="Confirm password" name="password2" />

        <button className='btn btn-primary btn-block mb-5' type='submit'>Register</button>

            <Link className='link mt-5' to='/auth/login'>
                Already register 
            </Link>
      </form>
    </>
    )
}

export default RegisterScreen
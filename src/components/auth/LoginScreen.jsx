import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import validator from "validator";
import { startGoogleLogin, startLoginEmailPassword } from "../../actions/auth";
import { removeError, setError } from "../../actions/ui";
import { useCustomForm } from "../../hooks/useCustomForm";
import SocialNetworkButton from "./socialNetworkButton/SocialNetworkButton";

const LoginScreen = () => {
  // dar acceso al dispacth de las acciones de los reducers
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.ui);

  const [formValues, handleInputChange] = useCustomForm({
    email: "ing.villanuevattt@gmail.com",
    password: "@rtechnoL12",
  });

  const { email, password } = formValues;

  const HandleLogin = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      dispatch( startLoginEmailPassword(email, password) );
    }
  };

  const HandleGoogleLogin = (e) => {
    e.preventDefault();
    dispatch(startGoogleLogin());
  };

  const isFormValid = () => {
    if (!validator.isEmail(email)) {
      dispatch(setError("Email is not valid"));
      return false;
    } else if (password <= 5) {
      dispatch(setError("Password must be greater than 5"));
      return false;
    }
    dispatch(removeError());

    return true;
  };

  return (
    <>
      <h3 className="auth__title">Login</h3>

      <form onSubmit={HandleLogin}>
        <input
          className="auth__input"
          type="text"
          placeholder="Email"
          name="email"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />

        <input
          className="auth__input"
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={handleInputChange}
        />

        <button
          disabled={ loading } 
          className="btn btn-primary btn-block" 
          type="submit">
          Login
        </button>

        <hr />

        <SocialNetworkButton HandleGoogleLogin={HandleGoogleLogin} />

        <Link className="link" to="/auth/register">
          Create a new account
        </Link>
      </form>
    </>
  );
};

export default LoginScreen;

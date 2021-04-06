import React from "react";
import { Link } from "react-router-dom";
import { useCustomForm } from "../../hooks/useCustomForm";
import validator from "validator";
import { useDispatch } from "react-redux";
import { removeError, setError } from "../../actions/ui";
import { startRegisterWithEmailPasswordName } from "../../actions/auth";

const RegisterScreen = () => {
  const dispatch = useDispatch();

  const [formValues, handleInputChange] = useCustomForm({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { name, email, password, confirmPassword } = formValues;

  const handleRegister = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      dispatch( startRegisterWithEmailPasswordName( email, password, name ) )
    }
  };

  const isFormValid = () => {
    if (name.trim().length === 0) {
      dispatch(setError("Name is required"));
      return false;
    } else if (!validator.isEmail(email)) {
      dispatch(setError("Email is not valid"));
      return false;
    } else if (password !== confirmPassword || password <= 5) {
      dispatch(setError("Password must be equal to and greater than 5"));
      return false;
    }
    dispatch(removeError());

    return true;
  };

  return (
    <div className='animate__animated animate__fadeIn animate__faster'>
      <h3 className="auth__title">Register</h3>

      <form onSubmit={handleRegister}>
        <input
          className="auth__input"
          type="text"
          placeholder="Name"
          name="name"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />

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

        <input
          className="auth__input"
          type="password"
          placeholder="Confirm password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleInputChange}
        />

        <button className="btn btn-primary btn-block mb-5" type="submit">
          Register
        </button>

        <Link className="link mt-5" to="/auth/login">
          Already register
        </Link>
      </form>
    </div>
  );
};

export default RegisterScreen;

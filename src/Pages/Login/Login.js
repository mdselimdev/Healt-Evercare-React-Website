import React from "react";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../context/useAuth";
import "./Login.css";

const Login = () => {
  const {
    handleCheckBoxValueFind,
    handleFindEmailInputValue,
    handleFindPasswordInputValue,
    handleGoogleSignIn,
    handleGithubeSignIn,
    handleFormSubmit,
    checkValue,
    errorvalue,
    handleUserNameInputValueFind,
  } = useAuth();

  const location = useLocation();

  const history = useHistory();

  const redirect_url = location.state?.from || "/";

  // Google Log In Redirect Uri
  const handlegoogleLogIn = () => {
    handleGoogleSignIn().then((result) => {
      history.push(redirect_url);
    });
  };

  // Githube Log In Redirect Uri
  const handleGithubLogIn = () => {
    handleGithubeSignIn().then((result) => {
      history.push(redirect_url);
    });
  };

  return (
    <div className="login-form my-5 px-3 py-5">
      <form onSubmit={handleFormSubmit}>
        <h1 className="text-center py-4 fw-bolder fs-2">
          {checkValue ? "Registration Now" : "Log In"}
        </h1>

        {!checkValue ? (
          ""
        ) : (
          <input
            onBlur={handleUserNameInputValueFind}
            className="w-100 my-2 login-input"
            type="text"
            name="name"
            autoComplete="current-name"
            required
            placeholder="Enter your Name"
          />
        )}

        <input
          onBlur={handleFindEmailInputValue}
          className="w-100 my-2 login-input"
          type="email"
          name="email"
          autoComplete="current-email"
          placeholder="Enter your email"
          required
        />

        <input
          onBlur={handleFindPasswordInputValue}
          className="w-100 my-2 login-input"
          type="password"
          name="password"
          placeholder="Enter your password"
          autoComplete="current-password"
          required
        />

        <div className="d-flex align-items-center">
          <input
            onClick={handleCheckBoxValueFind}
            className="me-2 my-3"
            id="check"
            type="checkbox"
          />
          <label htmlFor="check">No Account ? create User</label>
        </div>

        <p className="text-danger">{errorvalue ? errorvalue : ""}</p>

        <button className="appo-btn w-100 border-0" type="submit">
          {checkValue ? "Register" : "Log In"}
        </button>
      </form>

      {/* Authentication Sign in Method System Button  */}

      <div style={{ marginBottom: "128px" }}>
        <button onClick={handlegoogleLogIn} className="appo-btn w-100 border-0">
          {checkValue ? "Register With" : "Sign in With"} Google
        </button>
        <button onClick={handleGithubLogIn} className="appo-btn w-100 border-0">
          {checkValue ? "Register With" : "Sign in With"} Githube
        </button>
      </div>
    </div>
  );
};

export default Login;

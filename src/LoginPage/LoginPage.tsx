import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../_actions/user.actions";
import { Link } from "react-router-dom";

function LoginPage() {
  const [inputs, setInputs] = useState({
    username: '',
    password: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const { username, password } = inputs;
  const loggingIn = useSelector(( state: any ) => state.authentication.loggingIn);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  function handleChange(e) {
    const { name, value} = e.target;
    setInputs(inputs => ({ ...inputs, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    setSubmitted(true);
    if (username && password) {
      dispatch(userActions.login(username, password));
    }
  }

  return (
    <div>
      <h2>Login</h2>
      <form name="form" onSubmit={handleSubmit}>
        <input type="text" name="username" value={username} onChange={handleChange} className={'form-control' + (submitted && !username ? ' is-invalid' : '')} />
        {submitted && !username &&
         <div className="invalid-feedback">Username is required</div>
        }
        <label>Password</label>
        <input type="password" name="password" value={password} onChange={handleChange} className={'form-control' + (submitted && !password ? ' is-invalid' : '')} />
        {submitted && !password &&
         <div className="invalid-feedback">Password is required</div>
        }
        <button>
          {loggingIn && <span>Logging in...</span>}
          Login
        </button>
        <Link to="/register">Register</Link>
      </form>
    </div>
  );
}

export { LoginPage };

import React, { useState } from "react";
import { userActions } from "../_actions/user.actions";
import { useDispatch } from "react-redux";

function RegisterPage() {
  const [user, setUser] = useState({
    email: '',
    password: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const dispatch = useDispatch();

  function handleChange(e) {
    const { name, value } = e.target;
    setUser(user => ({ ...user, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    setSubmitted(true);
    if (user.email && user.password) {
      dispatch(userActions.register(user));
    }
  }

  return (
    <div>
      <form name="form" onSubmit={ handleSubmit }>
        <label>Email</label>
        <input type="email" name="email" value={user.email} onChange={handleChange} />
        {submitted && !user.email &&
         <div className="invalid-feedback">Email is required</div>
        }
        <label>Password</label>
        <input type="password" name="password" value={user.password} onChange={handleChange} />
        {submitted && !user.password &&
         <div className="invalid-feedback">Password is required</div>
        }
        <div>
          <button>Register</button>
        </div>
      </form>
    </div>
  );
}

export { RegisterPage }

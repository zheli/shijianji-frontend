import * as React from "react";

export function Login() {
  const [userEmail, setUserEmail] = React.useState("");
  const [userPassword, setUserPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  return (
    <div>
      {/* <form>
          <h1>Login</h1>
          <br />
          <input
          type="email"
          name="email"
          value={userEmail}
          placeholder="test@ha.com"
          onChange={(e) => setUserEmail(e.target.value)}
          />
          </form> */}
    </div>
  );
}

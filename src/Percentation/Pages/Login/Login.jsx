import React, { useEffect, useState } from "react";
import "./Login.scss";
const Login = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState("");
  useEffect(() => {
    console.log(user);
  }, [user]);
  const handleUser = () => {
    setUser(username);
  };
  return (
    <div className="loginContainer">
      <div className="loginForm">
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={handleUser}>Login</button>
        <p>{user === "" ? " " : user}</p>
      </div>
    </div>
  );
};

export default Login;

import React, { useState, useContext } from "react";
import "./login.scss";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Login = ({ title }) => {
  const [errorMsg, setErrorMsg] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const { dispatch } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dispatch({ type: "LOGIN", payload: user });
        navigate("/");

        // ...
      })
      .catch((error) => {
        setErrorMsg(error.message);

        // ..
      });
  };

  return (
    <div className="login">
      <form onSubmit={handleLogin}>
        <h1>{title}</h1>
        <input
          type="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Log in</button>
        {errorMsg && <span>{errorMsg}</span>}
        <p>
          Don't have an account? <Link to="/signin">Sign in</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;

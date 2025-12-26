import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Utility/firebase";
import classes from "./SignUp.module.css";
import { DataContext } from "../../Components/DataProvider/DataProvider";

function Register() {
  const navigate = useNavigate();
  const { setUser } = useContext(DataContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const registerHandler = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      setUser(userCredential.user);
      navigate("/");
    } catch {
      setError("Failed to create account. Email may already be in use.");
    }
  };

  return (
    <section className={classes.login}>
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
          alt="Amazon"
        />
      </Link>

      <div className={classes.login_container}>
        <h1>Create Account</h1>
        {error && <div className={classes.error}>{error}</div>}

        <form onSubmit={registerHandler}>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" disabled={!email || !password}>
            Create your Amazon account
          </button>
        </form>
      </div>
    </section>
  );
}

export default Register;

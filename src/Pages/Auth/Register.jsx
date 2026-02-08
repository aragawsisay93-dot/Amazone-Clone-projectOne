import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Utility/firebase";
import classes from "./SignUp.module.css";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import { Type } from "../../Utility/Action.type";
import BackButton from "../../Components/BackButton";

function Register() {
  const navigate = useNavigate();
  const { dispatch } = useContext(DataContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const registerHandler = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const cred = await createUserWithEmailAndPassword(auth, email, password);
      dispatch({ type: Type.SET_USER, user: cred.user });
      navigate("/");
    } catch {
      setError("Failed to create account. Email may already be in use.");
    }
  };

  return (
    <section className={classes.authPage}>
      <BackButton to="/" label="Back to Home" />

      <Link to="/" className={classes.logoWrap}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
          alt="Amazon"
        />
      </Link>

      <div className={classes.card}>
        <h1>Create account</h1>
        {error && <div className={classes.error}>{error}</div>}

        <form onSubmit={registerHandler} className={classes.form}>
          <label>Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            required
          />

          <label>Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            required
          />

          <button type="submit" disabled={!email || !password}>
            Create your Amazon account
          </button>
        </form>
      </div>

      <div className={classes.switchCard}>
        <p>Already have an account?</p>
        <Link to="/auth/login">
          <button className={classes.secondaryBtn} type="button">
            Sign in instead
          </button>
        </Link>
      </div>
    </section>
  );
}

export default Register;

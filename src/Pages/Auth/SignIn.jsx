import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Utility/firebase";
import classes from "./SignUp.module.css";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import { Type } from "../../Utility/Action.type";
import BackButton from "../../Components/BackButton";

function SignIn() {
  const navigate = useNavigate();
  const { dispatch } = useContext(DataContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const signInHandler = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const cred = await signInWithEmailAndPassword(auth, email, password);
      dispatch({ type: Type.SET_USER, user: cred.user });
      navigate("/");
    } catch {
      setError("Invalid email or password");
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
        <h1>Sign in</h1>
        {error && <div className={classes.error}>{error}</div>}

        <form onSubmit={signInHandler} className={classes.form}>
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
            Sign In
          </button>

          <p className={classes.terms}>
            By continuing, you agree to Amazon’s Conditions of Use and Privacy
            Notice.
          </p>
        </form>
      </div>

      <div className={classes.switchCard}>
        <p>New to Amazon?</p>
        <Link to="/auth/register">
          <button className={classes.secondaryBtn} type="button">
            Create your Amazon account
          </button>
        </Link>
      </div>
    </section>
  );
}

export default SignIn;

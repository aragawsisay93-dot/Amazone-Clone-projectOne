
import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Utility/firebase";
import classes from "./SignUp.module.css";
import { DataContext } from "../../Components/DataProvider/DataProvider";

function SignIn() {
  const navigate = useNavigate();
  const { setUser } = useContext(DataContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const signInHandler = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      setUser(userCredential.user);
      navigate("/");
    } catch {
      setError("Invalid email or password");
    }
  }

  return (
    <section className={classes.login}>
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
          alt="Amazon"
        />
      </Link>

      <div className={classes.login_container}>
        <h1>Sign In</h1>
        {error && <div className={classes.error}>{error}</div>}

        <form onSubmit={signInHandler}>
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
            Sign In
          </button>
        </form>

        <p className={classes.terms}>
          By continuing, you agree to Amazon’s Conditions of Use and Privacy
          Notice.
        </p>
      </div>

      <div className={classes.register}>
        <p>New to Amazon?</p>
        <Link to="/register">
          <button className={classes.register_btn}>
            Create your Amazon account
          </button>
        </Link>
      </div>
    </section>
  );
}

export default SignIn;

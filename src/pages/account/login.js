import React from "react";
import { Snackbar } from '@mui/material';
import { useState, useContext, useEffect } from "react";
import styles from "../../styles/pages.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import AuthenticationContext from "../../context/AuthenticationContext";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [open, setOpen] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)

  const { login, error, clearError } = useContext(AuthenticationContext);

  useEffect(() => {
    if (error) {
      setErrorMessage(error);
      setOpen(true);
      clearError();
    }
  }, [error]);


  const submitHandler = (e) => {
    e.preventDefault();
    login({ username, password });
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={styles.LoginContainer}>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={open}
        onClose={handleClose}
        autoHideDuration={6000}
        message={errorMessage}
        key={'top_center'}
      />
      <h1 className={styles.LoginHead}>sign in</h1>
      <p className={styles.LoginHeadDetails}>hi, welcome back</p>
      <form className={styles.Loginform} onSubmit={submitHandler}>
        <label className={styles.LoginLabel}>username</label>
        <input
          type="text"
          className={styles.LoginInput}
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />

        <label className={styles.LoginLabel}>password</label>
        <input
          type="password"
          className={styles.LoginInput}
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button className={styles.LoginButton} type="submit">
          sign in
        </button>
      </form>
      <p className={styles.LoginOption}>
        don't have an account yet?{" "}
        <Link href="/account/register" className={styles.LoginOptionLink}>
          register
        </Link>
      </p>
    </div>
  );
};

export default LoginPage;

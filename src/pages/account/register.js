import { useState, useContext, useEffect } from "react";
import { Snackbar } from '@mui/material';
import styles from "../../styles/pages.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import AuthenticationContext from "@/context/AuthenticationContext";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  
  const [open, setOpen] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null);


  const { register, error, clearError } = useContext(AuthenticationContext);

  useEffect(() => {
    if (error) {
      setErrorMessage(error);
      setOpen(true);
      clearError();
    }
  }, [error]);

  const submitHandler = (e) => {
    e.preventDefault();
    register({ username, email, password, password2 });
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
      <h1 className={styles.LoginHead}>register</h1>
      <p className={styles.LoginHeadDetails}>hi, sign up to become a member</p>
      <form className={styles.Loginform} onSubmit={submitHandler}>
        <label className={styles.LoginLabel}>username</label>
        <input
          type="text"
          className={styles.LoginInput}
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />

        <label className={styles.LoginLabel}>email</label>
        <input
          type="email"
          className={styles.LoginInput}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <label className={styles.LoginLabel}>password</label>
        <input
          type="password"
          className={styles.LoginInput}
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />

        <label className={styles.LoginLabel}>confirm password</label>
        <input
          type="password"
          className={styles.LoginInput}
          onChange={(e) => setPassword2(e.target.value)}
          value={password2}
        />
        <button className={styles.LoginButton} type="submit">
          sign up
        </button>
      </form>
      <p className={styles.LoginOption}>
        already got an account?{" "}
        <Link href="/account/login" className={styles.LoginOptionLink}>
          sign in
        </Link>
      </p>
    </div>
  );
}

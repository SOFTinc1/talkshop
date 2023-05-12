import Link from "next/link";
import { useContext } from "react";
import { useRouter } from "next/router";
import styles from "./header.module.css";
import Image from "next/image";
import Search from "../../public/static/icons/search-normal.svg";
import Add from "../../public/static/icons/add.svg";
import Google from "../../public/static/icons/google.svg";
import AuthenticationContext from "@/context/AuthenticationContext";
import Avatar from "../../public/static/icons/user.svg";

const Header = () => {
  const router = useRouter();
  const { user, logout } = useContext(AuthenticationContext);

  const handleLogout = async (e) => {
    e.preventDefault();
    await logout();
  };

  return (
    <div className={styles.container}>
      <Link href="/">
        <h1 className={styles.logo}>talkSHOP</h1>
      </Link>

      <div className={styles.auth}>
        {/* <Link href="/" className={styles.btn1}>
          <Image src={Search} alt="search" className={styles.btn1Img} />
        </Link> */}

        {user ? (
          <Link href="/contribute" className={styles.btn2}>
            <Image src={Add} alt="add" className={styles.btn2Img} />
            <p className={styles.btn2P}>contribute</p>
          </Link>
        ) : (
          <></>
        )}

        {user ? (
          <div
            href="/"
            className={styles.btn3Signout}
            button
            onClick={handleLogout}
          >
            <Image src={Avatar} alt="user" className={styles.user} />
            <div>
              <p className={styles.btnSignout}> {user.username} </p>
              <p className={styles.btnSignout2}> sign out </p>
            </div>
          </div>
        ) : (
          <>
            <div
              href="/"
              className={styles.btn3}
              button
              onClick={() => router.push("/account/login")}
            >
              <p className={styles.btn2P}> sign in</p>
            </div>
          </>
        )}

        {/* ------------------MOBILE------------------------ */}

        {user ? (
          <div href="/" className={styles.btn3SignoutMobile} button>
            <Link href="/contribute" className={styles.btn4}>
              <Image src={Add} alt="add" className={styles.btn4Img} />
            </Link>
          </div>
        ) : (
          <></>
        )}
        {user ? (
          <div
            href="/"
            className={styles.btn3SignoutMobile}
            button
            onClick={handleLogout}
          >
            <div>
              <p className={styles.btnSignout}> {user.username} </p>
            </div>
          </div>
        ) : (
          <>
            <div
              href="/"
              className={styles.btn5}
              button
              onClick={() => router.push("/account/login")}
            >
              <Image src={Google} alt="add" className={styles.btn4Img} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;

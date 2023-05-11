import Link from "next/link";
import styles from "./header.module.css";
import Image from "next/image";
import Search from "../../public/static/icons/search-normal.svg";
import Add from "../../public/static/icons/add.svg";
import Google from "../../public/static/icons/google.svg";
// import Avatar from "../../public/static/icons/user.svg";

const Header = () => {
  return (
    <div className={styles.container}>
      <Link href="/">
        <h1 className={styles.logo}>talkSHOP</h1>
      </Link>

      <div className={styles.auth}>
        <Link href="/" className={styles.btn1}>
          <Image src={Search} alt="search" className={styles.btn1Img} />
        </Link>
        <Link href="/contribute" className={styles.btn2}>
          <Image src={Add} alt="add" className={styles.btn2Img} />
          <p className={styles.btn2P}>contribute</p>
        </Link>
        <Link href="/" className={styles.btn3}>
          {/* <Image src={Google} alt="add" className={styles.btn3Img} /> */}
          <p className={styles.btn2P}> sign in</p>
          {/* <Image src={Avatar} alt="user" className={styles.user} /> */}
        </Link>

        <Link href="/contribute" className={styles.btn4}>
          <Image src={Add} alt="add" className={styles.btn4Img} />
        </Link>
        <Link href="/" className={styles.btn5}>
          <Image src={Google} alt="add" className={styles.btn4Img} />
        </Link>
      </div>
    </div>
  );
};

export default Header;

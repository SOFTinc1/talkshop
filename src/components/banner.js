import styles from "./banner.module.css";
import Image from "next/image";
import BannerImg1 from "../../public/static/banner1.png";
import BannerImg2 from "../../public/static/banner.png";
// import BannerImg from "../../public/static/2.png";

function Banner(props) {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <h1 className={styles.h1bold}>
         the premier <span>blog</span>
        </h1>
        <h1 className={styles.h1normal}>station with friends.</h1>
        <p className={styles.details}>
          we are committed to bringing the seamless blog experience on web and
          mobile for your convinience
        </p>
      </div>
      <div className={styles.bottom}>
        <div className={styles.orange}>
          <Image
            src={BannerImg1}
            alt="bannerIcon"
            className={styles.orangeImg}
          />
        </div>
        <div className={styles.blue}>
          <Image
            src={BannerImg2}
            alt="bannerIcon"
            className={styles.orangeImg}
          />
        </div>
      </div>
    </div>
  );
}

export default Banner;

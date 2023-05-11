import Link from "next/link";
import styles from "./card.module.css";
import Avatar from "../../public/static/icons/user.svg";
import Image from "next/image";

function Card({ business }) {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.blogTopTag}>
          <div className={styles.blogTopTagMobile}>
          <Image src={Avatar} alt="user" className={styles.user} />
          <h1 className={styles.blogName}>{business.title}</h1>
          </div>
          <p className={styles.blogSource}>source: {business.infosource}</p>
        </div>
        <div className={styles.blogTopTag2}>
          <Link
            href="/"
            style={{ textTransform: "capitalize" }}
            className={styles.blogSourceLink}
          >
            source link:{" "}
            <span
              style={{
                textDecoration: "underline",
                textTransform: "lowercase",
              }}
            >
              {business.website}
            </span>
          </Link>
          <p className={styles.blogTag}>{business.tag}</p>
        </div>

        <p className={styles.blogdesc}>{business.description}</p>
        <p>
          Address: <br />
          {business.street_address} {business.city}, {business.region}{" "}
          {business.postal_code} {business.country}
        </p>
      </div>
    </div>
  );
}

export default Card;

import styles from "./card.module.css";
import Image from "next/image";

function Contribute(props) {
  return (
    <div className={styles.container}>
      <h1 className={styles.head}>share content to contribute</h1>

      <div className={styles.inputdiv}>
        <label className={styles.label}>title</label>
        <input
          type="text"
          placeholder="enter content title"
          className={styles.input}
        />

        <label className={styles.label}>tags</label>
        <p className={styles.labeldetails}>
          *hit corma (,) to seperate tags
        </p>
        <input
          type="text"
          placeholder="enter content tags"
          className={styles.input}
        />

        <label className={styles.label}>details</label>
        <textarea
          type="text"
          placeholder="enter content details"
          className={styles.textarea}
        />

        <label className={styles.label}>image</label>
        <p className={styles.labeldetails}>
          *acceptable format are png and jpeg
        </p>
        <input type="file" className={styles.file} />
      </div>

      <button className={styles.contributebtn}>contribute</button>
    </div>
  );
}

export default Contribute;

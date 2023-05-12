import React from "react";
import { useState } from "react";
import axios from "axios";
import styles from "../../../components/card.module.css";
import Avatar from "../../../../public/static/icons/user.svg";
import Image from "next/image";
import Link from "next/link";

const BusinessPage = ({ business }) => {
  const [comment, setComment] = useState("");

  function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== "") {
      const cookies = document.cookie.split(";");
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        // Does this cookie string begin with the name we want?
        if (cookie.substring(0, name.length + 1) === name + "=") {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
  }

  const submitHandler = () => {
    console.log(comment);

    const csrftoken = getCookie("csrftoken");

    const config = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-CSRFToken": csrftoken,
      },
    };

    const body = {
      content: comment,
      business: business.url,
    };

    const res = axios.post("http://127.0.0.1:8000/comments/", body, config);

    console.log(res);
  };

  return (
    <div className={styles.Businesscontainer}>
      <div className={styles.Businesscard}>
        <div className={styles.BusinessTag}>
          <div className={styles.BusinessTagMobile}>
            <Image src={Avatar} alt="user" className={styles.user} />
            <h1 className={styles.BusinessName}>{business.title}</h1>
          </div>
          <p className={styles.BusinessSource}>source: {business.infosource}</p>
        </div>
        <div className={styles.BusinessTopTag2}>
          <Link
            href="/"
            style={{ textTransform: "capitalize" }}
            className={styles.BusinessSourceLink}
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
          <p className={styles.BusinessTagBor}>{business.tag}</p>
        </div>
        <p className={styles.Businessdesc}>{business.description}</p>

        <div className={styles.BusinessBottom}>
          <div className={styles.BusinessBottomForm}>
            <Image src={Avatar} alt="user" className={styles.user} />
            <input
              type="text"
              placeholder="enter comment here"
              id="commentComponent"
              multiline
              minRows={4}
              onChange={(e) => setComment(e.target.value)}
              value={comment}
              className={styles.BusinessBottomFormInput}
            />
          </div>
          <button className={styles.commentButton} onClick={submitHandler}>
            add comment
          </button>
        </div>

        <div className={styles.BusinessCommentDiv}>
          <h1 className={styles.BusinessCommentHead}>comments</h1>
          {business &&
            business.comments &&
            business.comments.map((comment) => (
              <div className={styles.BusinessCommentInner}>
                <Image src={Avatar} alt="user" className={styles.user} />
                <p className={styles.BusinessCommentText}>{comment.content}</p>
              </div>
            ))}
        </div>
      </div>

      {/* <div className={styles.BusinessBottom}>
        <div className={styles.BusinessBottomForm}>
          <Image src={Avatar} alt="user" className={styles.user} />
          <input
            type="text"
            placeholder="enter comment here"
            id="commentComponent"
            multiline
            minRows={4}
            onChange={(e) => setComment(e.target.value)}
            value={comment}
            className={styles.BusinessBottomFormInput}
          />
        </div>
        <button className={styles.commentButton} onClick={submitHandler}>
          add comment
        </button>
      </div> */}
    </div>
  );
};

export async function getServerSideProps({ query: { slug } }) {
  const { data } = await axios.get(
    `http://127.0.0.1:8000/businesses?slug=${slug}`
  );
  return {
    props: {
      business: data.results[0] || null,
    },
  };
}

export default BusinessPage;

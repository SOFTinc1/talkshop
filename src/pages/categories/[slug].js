import Card from "@/components/card";
import React from "react";
import axios from "axios";
import { useRouter } from "next/router";
import styles from "../../styles/pages.module.css";

function Category({ category }) {
  const router = useRouter();

  const handleBusinessClick = (business) => {
    router.push(`/business/${business.slug}`);
  };
  return (
    <div className={styles.categoryBlogPage}>
      <h1 className={styles.categoryBlogPageTitle}>Blog Posts</h1>
      <div className={styles.categoryBlogPageGrid}>
        {category.business.map((business) => (
          <div onClick={() => handleBusinessClick(business)}>
            <Card business={business} />
          </div>
        ))}
      </div>
      
    </div>
  );
}

export async function getServerSideProps({ query: { slug } }) {
  const { data } = await axios.get(
    `http://127.0.0.1:8000/categories?slug=${slug}`
  );
  console.log(data);
  return {
    props: {
      category: data.results[0] || null,
    },
  };
}

export default Category;

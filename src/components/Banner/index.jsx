import React from "react";
import styles from "./Banner.module.scss";
import bannerUrl from "/banner.webp";

function Banner() {
  return <img src={bannerUrl} alt="banner" className={styles.banner} />;
}

export default Banner;

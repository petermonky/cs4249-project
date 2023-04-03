import React from "react";
import { Link } from "react-router-dom";
import styles from "./Lobby.module.scss"

function Lobby() {
  const variants = [...Array(6).keys()].map((x) => x + 1);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>CS4249 Project Variants</h1>
      {variants.map((v) => (
        <Link to={`${v}`} className={styles.link} key={`variant-${v}`}><div><span>Variant {v}</span></div></Link>
      ))}
    </div>
  );
}

export default Lobby;

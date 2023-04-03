import React from 'react'
import styles from "./Recommended.module.scss"

import item1Url from "/item1.webp"
import item2Url from "/item2.webp"
import item3Url from "/item3.webp"
import item4Url from "/item4.webp"

function Recommended() {
  return (
    <>
      <h1 className={styles.title}>RECOMMENDED FOR YOU</h1>
      <div className={styles.grid}>
        <RecommendedItem imgUrl={item1Url} title="UltimateSup Wall Mounted Pull Up Bars" price="18.60" sold="1k+" />
        <RecommendedItem imgUrl={item2Url} title="GKGM7 True Wireless Earbuds Bluetooth Earphone" price="6.48" sold="37" />
        <RecommendedItem imgUrl={item3Url} title="Hoodie Oversize Hoodie Men Long Sleeve" price="8.10" sold="703" />
        <RecommendedItem imgUrl={item4Url} title="Vitog Y68 Smart Watch Heart Rate Monitor" price="0.01" sold="132" />
      </div>
    </>
  )
}

function RecommendedItem({ imgUrl, title, price, sold }) {
  return (
    <div>
      <img src={imgUrl} alt={title} className={styles.recommendedItem__image} />
      <div className={styles.recommendedItem__body}>
        <div className={styles.recommendedItem__top}>
          <span className={styles.recommendedItem__title}>{title}</span>
        </div>
        <div className={styles.recommendedItem__bottom}>
          <span className={styles.recommendedItem__price}>${price}</span>
          <span className={styles.recommendedItem__sold}>{sold} sold</span>
        </div>
      </div>
    </div>
  )
}

export default Recommended
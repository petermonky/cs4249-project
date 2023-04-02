import React from 'react'
import styles from "./Recommended.module.scss"

function Recommended() {
  return (
    <>
      <h1 className={styles.title}>RECOMMENDED FOR YOU</h1>
      <div className={styles.grid}>
        <RecommendedItem title="UltimateSup Wall Mounted Pull Up Bars" price="18.60" sold="1k+" />
        <RecommendedItem title="GKGM7 True Wireless Earbuds Bluetooth Earphone" price="6.48" sold="37" />
        <RecommendedItem title="Hoodie Oversize Hoodie Men Long Sleeve" price="8.10" sold="703" />
        <RecommendedItem title="Vitog Y68 Smart Watch Heart Rate Monitor" price="0.01" sold="132" />
        <RecommendedItem title="UltimateSup Wall Mounted Pull Up Bars" price="18.60" sold="1k+" />
        <RecommendedItem title="GKGM7 True Wireless Earbuds Bluetooth Earphone" price="6.48" sold="37" />
      </div>
    </>
  )
}

function RecommendedItem({ title, price, sold }) {
  return (
    <div>
      <div className={styles.recommendedItem__image}>
        
      </div>
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
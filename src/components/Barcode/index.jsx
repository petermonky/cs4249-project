import React from 'react'
import styles from "./Barcode.module.scss"

function Barcode() {

  return (
    <div className={styles.container}>
      <div className={styles.barcode}>
        <span>My QR Code / Barcode</span>
      </div>
    </div>
  )
}

export default Barcode
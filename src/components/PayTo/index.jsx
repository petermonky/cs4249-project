import React from 'react'
import styles from "./PayTo.module.scss"

function PayTo() {
  return (
    <div className={styles.payTo}>
      <div className={styles.header}>Pay To</div>
      <div className={styles.container}>
        <div className={styles.recipient}>
          <div className={styles.recipient__image}></div>
          <span className={styles.recipient__name}>McDonald's</span>
        </div>
        <div className={styles.payment}>
          <span className={styles.payment__title}>Pay Amount</span>
          <div className={styles.payment__body}><span className={styles.payment__sign}>$</span><span className={styles.payment__cost}>22.20</span></div>
          <span className={styles.payment__memo}>Enter Memo (Optional)</span>
        </div>
      </div>
      <div className={styles.confirm}>
        <div className={styles.confirm__text}>
          <span>Confirm Payment</span>
        </div>
      </div>
    </div>
  )
}

export default PayTo
import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import styles from "./PayTo.module.scss";

import { AiOutlineArrowLeft } from "react-icons/ai";

function PayTo() {
  const navigate = useNavigate();
  const { variant } = useParams();

  useEffect(() => {
    document.addEventListener("paytoloaded", loggingjs.logEvent, true);
    document.dispatchEvent(
      new CustomEvent("paytoloaded", {
        detail: {
          eventName: "scanloaded",
          info: { variant },
        },
      })
    );
  }, []);

  return (
    <div className={styles.payTo}>
      <div className={styles.header}>
        <Link to="#" onClick={() => navigate(-1)}>
          <AiOutlineArrowLeft size={24} color="black" className={styles.icon} />
        </Link>
        <span>Pay To</span>
      </div>
      <div className={styles.container}>
        <div className={styles.recipient}>
          <div className={styles.recipient__image}></div>
          <span className={styles.recipient__name}>McDonald's</span>
        </div>
        <div className={styles.payment}>
          <span className={styles.payment__title}>Pay Amount</span>
          <div className={styles.payment__body}>
            <span className={styles.payment__sign}>$</span>
            <span className={styles.payment__cost}>22.20</span>
          </div>
          <span className={styles.payment__memo}>Enter Memo (Optional)</span>
        </div>
      </div>
      <div className={styles.confirm}>
        <div className={styles.confirm__text}>
          <span>Confirm Payment</span>
        </div>
      </div>
    </div>
  );
}

export default PayTo;

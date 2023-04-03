import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import styles from "./TopUp.module.scss";

import { AiOutlineArrowLeft } from "react-icons/ai";

function TopUp() {
  const navigate = useNavigate();
  const { variant } = useParams();

  useEffect(() => {
    document.addEventListener("topuploaded", loggingjs.logEvent, true);
    document.dispatchEvent(
      new CustomEvent("topuploaded", {
        detail: {
          eventName: "topuploaded",
          info: { variant },
        },
      })
    );
  }, []);

  return (
    <div className={styles.topUp}>
      <div className={styles.header}>
        <Link to="#" onClick={() => navigate(-1)}>
          <AiOutlineArrowLeft size={24} color="black" className={styles.icon} />
        </Link>
        <span>Top Up</span>
      </div>
      <div className={styles.container}>
        <div className={styles.payment}>
          <span className={styles.payment__title}>Top Up Amount</span>
          <div className={styles.payment__body}>
            <span className={styles.payment__sign}>$</span>
            <span className={styles.payment__cost}>22.20</span>
          </div>
          <span className={styles.payment__memo}>Enter Memo (Optional)</span>
        </div>
      </div>
      <div className={styles.confirm}>
        <div className={styles.confirm__text}>
          <span>Confirm Top Up</span>
        </div>
      </div>
    </div>
  );
}

export default TopUp;

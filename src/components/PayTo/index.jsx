import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import styles from "./PayTo.module.scss";

import { AiOutlineArrowLeft } from "react-icons/ai";
import { BsFillCheckCircleFill } from "react-icons/bs";

function PayTo() {
  const navigate = useNavigate();
  const { variant } = useParams();
  const [isConfirmed, setIsConfirmed] = useState(false)

  function confirmPayment() {
    document.dispatchEvent(
      new CustomEvent("confirmpayment", {
        detail: {
          eventName: "confirmpayment",
          info: { variant },
        },
      })
    );
    setIsConfirmed(true)
  }

  useEffect(() => {
    document.addEventListener("confirmpayment", loggingjs.logEvent, true);
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
    <>
      <div className={styles.payTo}>
        <div className={styles.header}>
          <Link to="#" onClick={() => navigate(-1)}>
            <AiOutlineArrowLeft
              size={24}
              color="black"
              className={styles.icon}
            />
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
        <button className={styles.confirm} onClick={confirmPayment}>
          <div className={styles.confirm__text}>
            <span>Confirm Payment</span>
          </div>
        </button>
      </div>
      {isConfirmed && <ConfirmedPayment />}
    </>
  );
}

function ConfirmedPayment() {
  return (
    <div className={styles.confirmedPayment}>
      <div className={styles.confirmedPayment__container}>
        <BsFillCheckCircleFill color="green" size={80} />
        <span className={styles.confirmedPayment__title}>Payment Success!</span>
        <span className={styles.confirmedPayment__description}>
          <i>(For testers: please exit this tab and return to the survey.)</i>
        </span>
      </div>
    </div>
  );
}

export default PayTo;

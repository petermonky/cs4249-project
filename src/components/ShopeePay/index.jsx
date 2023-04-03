import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import styles from "./ShopeePay.module.scss";
import Barcode from "../Barcode";

import {
  AiOutlineArrowLeft,
  AiOutlineWallet,
  AiOutlineScan,
  AiOutlineQrcode,
  AiOutlineBank,
} from "react-icons/ai";
import { BsArrowDownUp, BsArrowDownCircle } from "react-icons/bs";

function ShopeePay() {
  const [subPage, setSubPage] = useState("topup");
  const { variant } = useParams();
  const navigate = useNavigate()

  return (
    <div className={`${styles.shopeepay} ${subPage === "scan" ? styles.scanSelected : ""}`}>
      <div className={styles.top}>
        <div className={styles.header}>
          <Link to="#" onClick={() => navigate(-1)}>
            <AiOutlineArrowLeft
              size={24}
              color="white"
              className={styles.icon}
            />
          </Link>
          <span className={styles.title}>ShopeePay</span>
        </div>
        {["1", "4"].includes(variant) && (
          <div className={styles.wallet}>
            <span className={styles.wallet__sign}>$</span>
            <span className={styles.wallet__amount}>0.00</span>
          </div>
        )}
      </div>
      {["1", "4"].includes(variant) && (
        <>
          <div className={styles.body}>
            <div className={styles.tray}>
              <Link
                to={`../topup`}
                style={{ textDecoration: "none", color: "inherit", flex: 1 }}
              >
                <TrayItem icon={<AiOutlineWallet size={36} />} text="Top Up" />
              </Link>
              <Link
                to={`../scan`}
                style={{ textDecoration: "none", color: "inherit", flex: 1 }}
              >
                <TrayItem icon={<AiOutlineScan size={36} />} text="Scan" />
              </Link>
              <TrayItem icon={<BsArrowDownUp size={36} />} text="Transfer" />
              <TrayItem icon={<AiOutlineQrcode size={36} />} text="Pay" />
              <TrayItem
                icon={<AiOutlineBank size={36} />}
                text="Transfer to Bank"
              />
              <TrayItem icon={<BsArrowDownCircle size={36} />} text="Request" />
            </div>
          </div>
          <div className={styles.promotions}>
            <span className={styles.promotions__title}>Ongoing Promotions</span>
            <div className={styles.promotions__image}></div>
          </div>
          <div className={styles.transactions}>
            <span className={styles.transactions__title}>
              Last Transactions
            </span>
          </div>
        </>
      )}
      {["3", "6"].includes(variant) && (
        <>
          <div className={styles.tabButtons}>
            <button
              className={`${styles.tabButton} ${
                subPage === "topup" ? styles.selected : ""
              }`}
              onClick={() => setSubPage("topup")}
            >
              Top Up
            </button>
            <button
              className={`${styles.tabButton} ${
                subPage === "scan" ? styles.selected : ""
              }`}
              onClick={() => setSubPage("scan")}
            >
              Scan
            </button>
            <button className={styles.tabButton}>Transfer</button>
            <button className={styles.tabButton}>Pay</button>
            <button className={styles.tabButton}>Transfer to Bank</button>
            <button className={styles.tabButton}>Request</button>
          </div>
          {subPage === "topup" && renderTopUp()}
          {subPage === "scan" && renderScan()}
        </>
      )}
    </div>
  );
}

function renderTopUp() {
  return (
    <>
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
    </>
  );
}

function renderScan() {
  return (
    <>
      <div className={styles.qrContainer}>
        <div className={styles.qr}></div>
      </div>
      <div className={styles.scanning}>
        <span>Scanning...</span>
      </div>
      <Barcode />
    </>
  );
}

function TrayItem({ icon, text }) {
  return (
    <div className={styles.trayItem}>
      {icon}
      <span className={styles.trayItem__text}>{text}</span>
    </div>
  );
}

export default ShopeePay;

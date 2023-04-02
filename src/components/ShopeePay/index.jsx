import React from "react";
import { Link } from "react-router-dom";
import styles from "./ShopeePay.module.scss";

import {
  AiOutlineArrowLeft,
  AiOutlineWallet,
  AiOutlineScan,
  AiOutlineQrcode,
  AiOutlineBank
} from "react-icons/ai";
import { BsArrowDownUp, BsArrowDownCircle } from "react-icons/bs";

function ShopeePay() {
  return (
    <div className={styles.shopeepay}>
      <div className={styles.top}>
        <div className={styles.header}>
          <Link to="javascript:history.back()">
            <AiOutlineArrowLeft
              size={24}
              color="white"
              className={styles.icon}
            />
          </Link>
          <span className={styles.title}>ShopeePay</span>
        </div>
        <div className={styles.wallet}>
          <span className={styles.wallet__sign}>$</span>
          <span className={styles.wallet__amount}>0.00</span>
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.tray}>
          <Link to={`../topup`} style={{ textDecoration: 'none', color: 'inherit', flex: 1 }} >
            <TrayItem icon={<AiOutlineWallet size={36} />} text="Top Up" />
          </Link>
          <Link to={`../scan`} style={{ textDecoration: 'none', color: 'inherit', flex: 1 }} >
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
        <span className={styles.transactions__title}>Last Transactions</span>
      </div>
    </div>
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

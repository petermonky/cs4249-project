import React from "react";
import styles from "./Vouchers.module.scss";

function Vouchers() {
  return (
    <div className={styles.vouchers}>
      <div className={styles.vouchers__title}>
        <span>NEW USER VOUCHERS</span>
      </div>
      <VoucherItem content={renderIcon("NEW USER VOUCHER")} colour="#ef3c29" title="$10 off" tags={["First Purchase Only"]} description="Valid for 30 days"/>
      <VoucherItem content={renderIcon("FREE SHIPPING")} colour="#21a99b" title="Min Spend $0" tags={["New User", "All Sellers"]} description="Valid for 30 days" />
    </div>
  );
}

function VoucherItem({ colour, content, title, description, tags = [] }) {
  return (
    <div className={styles.voucherItem}>
      <div
        className={styles.voucherItem__icon}
        style={{ backgroundColor: colour }}
      >
        {content}
      </div>
      <div className={styles.voucherItem__body}>
        <span className={styles.voucherItem__title}>{title}</span>
        <div className={styles.voucherItem__tags}>
          {tags.map((tag) => (
            <span className={styles.voucherItem__tag}>{tag}</span>
          ))}
        </div>
        <span className={styles.voucherItem__description}>{description}</span>
      </div>
      <div className={styles.voucherItem__right}>
        <button className={styles.voucherItem__button}>Use</button>
      </div>
    </div>
  );
}

function renderIcon(text) {
  return <span className={styles.iconText}>{text}</span>;
}

export default Vouchers;

import React from 'react'
import styles from "./QuickTray.module.scss"

import {
  AiOutlineUserAdd,
  AiOutlineShop,
  AiOutlineGift
} from "react-icons/ai"
import {
  RiCoupon2Line
} from "react-icons/ri"
import {
  BsFillGridFill
} from "react-icons/bs"

function QuickTray() {
  return (
    <div className={styles.quicktray}>
      <QuickTrayItem icon={<AiOutlineUserAdd size={24} color="orange" />} text="New User" />
      <QuickTrayItem icon={<AiOutlineShop size={24} color="orange" />} text="Shopee $2 Shop" />
      <QuickTrayItem icon={<RiCoupon2Line size={24} color="orange" />} text="Daily Vouchers" />
      <QuickTrayItem icon={<AiOutlineGift size={24} color="orange" />} text="Shopee Prizes" />
      <QuickTrayItem icon={<BsFillGridFill size={24} color="orange" />} text="See More" />
    </div>
  )
}

function QuickTrayItem({ icon, text }) {
  return (
    <div className={styles.quicktrayItem}>
      <div className={styles.quicktrayItem__icon}>{icon}</div>
      <span className={styles.quicktrayItem__text}>{text}</span>
    </div>
  )
}

export default QuickTray;
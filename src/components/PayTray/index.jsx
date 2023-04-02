import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./PayTray.module.scss"

import { 
  AiOutlineScan,
  AiOutlineWallet
} from "react-icons/ai"
import {
  TbCoin
} from "react-icons/tb"
import {
  RiCoupon2Line
} from "react-icons/ri"

function PayTray() {
  return (
    <div className={styles.paytray}>
      <Link to={`scan`} className={styles.icon} >
        <AiOutlineScan size={24} />
      </Link>
      <Link to={`shopeepay`} style={{ textDecoration: 'none', color: 'inherit', flex: 1 }} >
        <PayTrayItem icon={<AiOutlineWallet color="orange" />} title="$0.00" description="Top up & earn rewards" />
      </Link>
      <PayTrayItem icon={<TbCoin color="yellow" />} title="0" description="Check in daily to earn coins!" />
      <PayTrayItem icon={<RiCoupon2Line color="green" />} title="5" description="Vouchers" />
    </div>
  )
}

function PayTrayItem({ icon, title, description }) {
  return (
    <div className={styles.paytrayItem}>
      <div className={styles.paytrayItem__header}>
        {icon}
        <span className={styles.paytrayItem__title}>{title}</span>
      </div>
      <span className={styles.paytrayItem__description}>{description}</span>
    </div>
  )
}

export default PayTray
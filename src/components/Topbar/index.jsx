import React from 'react'
import Search from '../Search'
import styles from "./Topbar.module.scss"

import {
  FiShoppingCart,
  FiMessageCircle,
} from "react-icons/fi"

function Topbar() {
  return (
    <div className={styles.topbar}>
      <Search />
      <FiShoppingCart className={styles.icon} size={24} />
      <FiMessageCircle className={styles.icon} size={24} />
    </div>
  )
}

export default Topbar
import React from 'react'
import styles from "./Main.module.scss"

import Navbar from '../Navbar'
import Topbar from '../Topbar'
import Banner from "../Banner"
import PayTray from "../PayTray"
import QuickTray from '../QuickTray'
import Vouchers from "../Vouchers"
import Recommended from '../Recommended'

function Main() {
  return (
    <div className={styles.content}>
      <Topbar />
      <Banner />
      <div className={styles.offsetSection}>
        <PayTray />
        <QuickTray />
      </div>
      <Vouchers />
      <Recommended />
      <Navbar />
    </div>
  )
}

export default Main
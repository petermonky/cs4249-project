import React from 'react'
import styles from "./Main.module.scss"

import Navbar from '../Navbar'
import Topbar from '../Topbar'
import Banner from "../Banner"
import PayTray from "../PayTray"
import QuickTray from '../QuickTray'
import Vouchers from "../Vouchers"
import Recommended from '../Recommended'
import { useParams } from 'react-router-dom'

function Main() {
  const { variant } = useParams()
  const isOldLayout = ["1", "2", "3"].includes(variant)

  return (
    <div className={styles.content}>
      <Topbar />
      <Banner />
      <div className={`${styles.section} ${isOldLayout ? styles.offset : ""}`}>
        {isOldLayout && <PayTray />}
        <QuickTray />
      </div>
      <Vouchers />
      <Recommended />
      <Navbar />
    </div>
  )
}

export default Main
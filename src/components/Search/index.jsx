import React from 'react'
import styles from "./Search.module.scss"

import {
  FiSearch,
  FiCamera,
} from "react-icons/fi"

function Search() {
  return (
    <div className={styles.search}>
      <FiSearch size={18} className={styles.leftIcon} />
      <FiCamera size={18} className={styles.rightIcon} />
      <input type="text" placeholder="Search" className={styles.input} />
    </div>
  )
}

export default Search;
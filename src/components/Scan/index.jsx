import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import styles from "./Scan.module.scss"

import { AiOutlineArrowLeft } from 'react-icons/ai';
import Barcode from "../Barcode"

function Scan() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('../payto');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className={styles.scan}>
    <Link to="#" onClick={() => navigate(-1)}>
        <AiOutlineArrowLeft size={24} color="white" className={styles.icon} />
    </Link>
      <div className={styles.qrContainer}>
        <div className={styles.qr}></div>
      </div>
      <div className={styles.scanning}>
        <span>Scanning...</span>
      </div>
      <Barcode />
    </div>
  )
}

export default Scan
import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import styles from "./PayTray.module.scss";

import {
  AiOutlineWallet,
  AiOutlineScan,
  AiOutlineQrcode,
  AiOutlineBank,
  AiOutlinePlusCircle,
  AiOutlineShop
} from "react-icons/ai";
import { BsArrowDownUp, BsArrowDownCircle } from "react-icons/bs";
import { TbCoin } from "react-icons/tb";
import { RiCoupon2Line } from "react-icons/ri";

function PayTray() {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  const handleMenuToggle = (event) => {
    if (event.type === "touchstart") {
      setShowMenu(true);
    } else if (event.type === "touchend") {
      handleTouchEnd(event);
    }
  };

  const handleTouchEnd = (event) => {
    const touch = event.changedTouches[0];
    const absoluteX = touch.pageX;
    const absoluteY = touch.pageY;
    const elements = document.elementsFromPoint(absoluteX, absoluteY);

    const topupElement = elements.find((element) => element.id === "topup");
    const scanElement = elements.find((element) => element.id === "scan");

    if (topupElement) {
      navigate("topup");
    } else if (scanElement) {
      navigate("scan");
    }

    setShowMenu(false);
  };

  return (
    <div className={styles.paytray}>
      {renderButton()}
      <Link
        to={`shopeepay`}
        style={{ textDecoration: "none", color: "inherit", flex: 1 }}
      >
        <PayTrayItem
          icon={<AiOutlineWallet color="orange" />}
          title="$0.00"
          description="Top up & earn rewards"
        />
      </Link>
      <PayTrayItem
        icon={<TbCoin color="yellow" />}
        title="0"
        description="Check in daily to earn coins!"
      />
      <PayTrayItem
        icon={<RiCoupon2Line color="green" />}
        title="5"
        description="Vouchers"
      />
    </div>
  );

  function renderButton() {
    const { variant } = useParams();

    return (
      <>
        {variant === "1" && (
          <Link to={`scan`} className={styles.icon}>
            <AiOutlineScan size={24} />
          </Link>
        )}
        {variant === "2" && (
          <>
            <div
              className={styles.press}
              onTouchStart={handleMenuToggle}
              onTouchEnd={handleMenuToggle}
            >
              <AiOutlinePlusCircle size={24} />
              {showMenu && (
                <div className={styles.menu}>
                  <TrayItem
                    icon={<AiOutlineWallet size={24} />}
                    text="Top Up"
                    id="topup"
                  />
                  <TrayItem
                    icon={<AiOutlineScan size={24} />}
                    text="Scan"
                    id="scan"
                  />
                  <TrayItem
                    icon={<BsArrowDownUp size={24} />}
                    text="Transfer"
                  />
                  <TrayItem icon={<AiOutlineQrcode size={24} />} text="Pay" />
                  <TrayItem
                    icon={<AiOutlineBank size={24} />}
                    text="Bank Transfer"
                  />
                  <TrayItem
                    icon={<BsArrowDownCircle size={24} />}
                    text="Request"
                  />
                </div>
              )}
            </div>
          </>
        )}
        {variant === "3" && (
          <Link to={`shopeepay`} className={styles.icon}>
            <AiOutlineShop size={24} />
          </Link>
        )}
      </>
    );
  }
}

function TrayItem({ icon, text, id }) {
  return (
    <div className={styles.trayItem} id={id}>
      {icon}
      <span className={styles.trayItem__text}>{text}</span>
    </div>
  );
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
  );
}

export default PayTray;

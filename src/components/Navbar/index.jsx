import React, { useState } from "react";
import styles from "./Navbar.module.scss";

import {
  AiOutlineHome,
  AiOutlineGift,
  AiOutlineShopping,
  AiOutlineBell,
  AiOutlineUser,
  AiOutlineShop,
  AiOutlineWallet,
  AiOutlineScan,
  AiOutlineQrcode,
  AiOutlineBank,
  AiOutlinePlusCircle,
} from "react-icons/ai";
import { BsArrowDownUp, BsArrowDownCircle } from "react-icons/bs";
import { Link, useNavigate, useParams } from "react-router-dom";

function Navbar() {
  const { variant } = useParams();
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  const isOldLayout = ["1", "2", "3"].includes(variant);

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
    <nav className={styles.navbar}>
      <div className={styles.navbarLinks}>
        <NavbarLink
          icon={<AiOutlineHome size={28} color="#616161" />}
          text="Home"
        />
        <NavbarLink
          icon={<AiOutlineGift size={28} color="#616161" />}
          text="Prizes"
        />
        {!isOldLayout && renderButton()}
        <NavbarLink
          icon={<AiOutlineShopping size={28} color="#616161" />}
          text="Mall"
        />
        {isOldLayout && (
          <NavbarLink
            icon={<AiOutlineBell size={28} color="#616161" />}
            text="Notifications"
          />
        )}
        <NavbarLink
          icon={<AiOutlineUser size={28} color="#616161" />}
          text="Me"
        />
      </div>
    </nav>
  );

  function renderButton() {
    return (
      <>
        {["4", "6"].includes(variant) && (
          <Link
            to="shopeepay"
            style={{ textDecoration: "none", color: "inherit", flex: 1 }}
          >
            <NavbarLink
              icon={<AiOutlineShop size={28} color="#616161" />}
              text="ShopeePay"
            />
          </Link>
        )}
        {variant === "5" && (
          <>
            <NavbarLink
              icon={<AiOutlinePlusCircle size={28} color="#616161" />}
              text="ShopeePay"
              onTouchStart={handleMenuToggle}
              onTouchEnd={handleMenuToggle}
              className={styles.press}
            />
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
                <TrayItem icon={<BsArrowDownUp size={24} />} text="Transfer" />
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
          </>
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

function NavbarLink({ icon, text, ...props }) {
  return (
    <div {...props} className={styles.navbarLink} >
      {icon}
      <span className={styles.navbarLink__text}>{text}</span>
    </div>
  );
}

export default Navbar;

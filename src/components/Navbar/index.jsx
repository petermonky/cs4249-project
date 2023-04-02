import React from "react";
import styles from "./Navbar.module.scss";

import { AiOutlineHome, AiOutlineGift, AiOutlineShopping, AiOutlineBell, AiOutlineUser } from "react-icons/ai";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLinks}>
        <NavbarLink icon={<AiOutlineHome size={28} color="#616161" />} text="Home" />
        <NavbarLink icon={<AiOutlineGift size={28} color="#616161" />} text="Prizes" />
        <NavbarLink icon={<AiOutlineShopping size={28} color="#616161"/>}  text="Mall" />
        <NavbarLink icon={<AiOutlineBell size={28} color="#616161" />} text="Notifications" />
        <NavbarLink icon={<AiOutlineUser size={28} color="#616161" />} text="Me" />
      </div>
    </nav>
  );
}

function NavbarLink({ icon, text }) {
  return (
    <div className={styles.navbarLink}>
      <div>{icon}</div>
      <span className={styles.navbarLink__text}>{text}</span>
    </div>
  )
}

export default Navbar;

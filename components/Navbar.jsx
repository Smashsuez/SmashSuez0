import React, { Fragment, useState, useEffect } from "react";
import styles from "../styles/Navbar.module.css";
import Image from 'next/image';
import { useSelector } from "react-redux";
import Link from "next/link";

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  const [showMenu, setShowMenu] = useState(false);
  const [transitionNavbar, setTransitionNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setTransitionNavbar(true);
    } else {
      setTransitionNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      // If the element is not found, redirect to the homepage
      window.location.href = "/";
    }
  };

  return (
    <Fragment>
      <div className={transitionNavbar ? `${styles.container} ${styles.active}` : styles.container}>
        <Link href="/" passHref>
          <div className={styles.logo}>
            <Image src="/imgs/WhatsApp Image 2023-06-12 azzzzzzzzzzzzzzzzzzzzzzzt 22.50.49.png" width="120" height="90" alt="" />
          </div>
        </Link>
        <div className={styles.item}>
          <div className={styles.mid}>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <Link href="/" passHref>
                  <a>Homepage</a>
                </Link>
              </li>
              <li className={styles.listItem}>
                <a onClick={() => handleScrollTo("menu")}>Menu</a>
              </li>
              <li className={styles.listItem}>
                <a onClick={() => handleScrollTo("location")}>Location</a>
              </li>
            </ul>
          </div>
        </div>
        <Link href="/cart" passHref>
          <div className={styles.item}>
            <div className={styles.cart}>
              <Image src="/imgs/cart.png" width="20" height="20" alt="" />
              <div className={styles.counter}>{quantity}</div>
            </div>
          </div>
        </Link>
      </div>
    </Fragment>
  );
};

export default Navbar;

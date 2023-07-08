import React, { Fragment ,useState, useEffect } from "react";
import styles from "../styles/Navbar.module.css";
import Image from 'next/image';
import { useSelector } from "react-redux";
import Link from "next/link";
// import SmoothScroll from "smooth-scroll";


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

//  const handleScrollTo = (id) => {
//   const element = document.getElementById(id);
//   if (element) {
//     setTimeout(() => {
//       element.scrollIntoView({ behavior: "smooth" });
//     }, 500); // Wait for 1 second before scrolling to the component
//   } else {
//    // window.location.href = "/";
//     // setTimeout(() => {
//     //   const element = document.getElementById(id);
//     //   if (element) {
//     //     element.scrollIntoView({ behavior: "smooth" });
//     //   }
//     // }, 4000);
    
//     setTimeout(() => {
//       const element = document.getElementById(id);
//       element.scrollIntoView({ behavior: "smooth" });
//     }, 1000);}
//      // Wait for 2 seconds before redirecting and attempting to scroll to the component
  
// };

  
  

  

//   const scroll = new SmoothScroll('a[href*="#"]', {
//     speed: 300
// });
const [navActive, setNavActive] = useState(false);

const toggleNavActive = () => {
  setNavActive(!navActive);
};

  return (
    <Fragment >
    
      <div className={transitionNavbar ? `${styles.container} ${styles.active}` : styles.container}>
      <Link href="/" passHref>
        <div className={styles.logo}>
          <Image src="/imgs/WhatsApp Image 2023-06-12 azzzzzzzzzzzzzzzzzzzzzzzt 22.50.49.png" width="120" height="90" alt=""/>
        </div></Link>
        <div className={styles.item}>
          <div className={styles.mid}>
          <ul className={styles.list}>
            <Link href="/" passHref>
            <li className={styles.listItem}>Homepage</li></Link>
            <Link href="/#menu" passHref><li className={styles.listItem} onClick={() => handleScrollTo("menu")}>Menu</li></Link>
            
            <Link href="/#location" passHref><li className={styles.listItem} onClick={() => handleScrollTo("location")}>Location</li></Link>
            
          </ul></div>
        </div>
        <div className="x">
        <div onClick={toggleNavActive} className={`menu ${navActive ? "openmenu" : ""}`}>
          <span className="line-1"></span>
          <span className="line-2"></span>
          <span className="line-3"></span>
        </div>
        <div className={`nav__menu-list ${navActive ? "active" : ""}`}>
          <div className="linkContainer">
            <div className={`link ${navActive ? "openmenu" : ""}`}>
              <div className="linkInner">
                <Link legacyBehavior href={"/"}>
                  <a>Home</a>
                </Link>
              </div>
            </div>
            <div className={`link ${navActive ? "openmenu" : ""}`}>
              <div className="linkInner">
                <Link legacyBehavior href={"/#menu"}>
                  <a>Menu</a>
                </Link>
              </div>
            </div>
            <div className={`link ${navActive ? "openmenu" : ""}`}>
              <div className="linkInner">
                <Link legacyBehavior href={"/#location"}>
                  <a>Location</a>
                </Link>
              </div>
            </div>
            <div className={`link ${navActive ? "openmenu" : ""}`}>
              <div className="linkInner">
                <Link legacyBehavior href={"/cart"} >
                  <a>Cart</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div>
        <Link href="/cart" passHref>
        <div className={styles.item}>
        <div className={styles.cart}>
            <Image src="/imgs/cart.png" width="20" height="20" alt=""/>
            <div className={styles.counter}>{quantity}</div>
          </div>
        </div>
        </Link></div>
      </div>
      
      </Fragment>
    
  );
};

export default Navbar;


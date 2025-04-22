import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import styles from "../assets/css/Header.module.css";
const Header = () => {
  return (
    <div className={styles["container-fluid"]}>
    <div className={`${styles.header} d-flex justify-content-between align-items-center`}>
        <div className={`${styles.logo} ms-5`}>
            <h5>Start Bootstrap</h5>
        </div>
        <div className={`${styles.navbar} d-flex justify-content-center align-items-center`}>
            <ul className={`${styles.link} d-flex list-unstyled  gap-2 me-5 `}> 
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Contact</a></li>
                <li><a href="">Service</a></li>
            </ul>
        </div>
    </div>
  </div>
  
  );
};

export default Header;

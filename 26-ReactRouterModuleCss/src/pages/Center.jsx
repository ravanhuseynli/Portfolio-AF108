import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import styles from '../assets/css/Center.module.css'
export const Center = () => {
  return (
    <div className={`${styles.center_area} container-fluid`}>
       <h2>Present your business in</h2>
       <h2>a whole new way</h2>
       <p className={styles.text}>Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit!</p>
        <div className={styles.btn_area}>
          <button className={`btn btn-primary ${styles.btn_primary} me-3`}> Get Started</button>
          <button className={`btn btn-outline-primary ${styles.btn_outline}`}>Learn More</button> 
        </div>
    </div>
  )
}
export default Center;
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import styles from '../assets/css/Footer.module.css'
export const Footer = () => {
  return (
    <div className={`${styles.footeContainer} container-fluid`}>
      <h4 className='text-center'>
      Copyright © Your Website 2023
      </h4>
    </div>
  )
}


export default Footer
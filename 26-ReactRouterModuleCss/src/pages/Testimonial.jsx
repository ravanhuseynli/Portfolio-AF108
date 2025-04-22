import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import styles from "../assets/css/Testimonial.module.css";
export const Testimonial = () => {
  return (
    <div className='container-fluid mt-5'>
      <div className={styles['testimonial_container']}>
        <div className='text-center'>
          <h2>Customer testimonials</h2>
          <p>Our customers love working with us</p>
        </div>
        <div className='row'>
          <div className='col-12 d-flex justify-content-center aligin-items-center'>
           <div className={`${styles.card_items} card`}> 
            <div className={styles['icon_area']}>
            <i class="bi bi-chat-right-quote"></i>
            <p>Thank you for putting together such a great product. We loved working with you and the whole team, and we will be recommending you to others!
              - Client Name, Location</p>
            </div>
           </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-12 d-flex justify-content-center aligin-items-center'>
            <div className={`${styles.card_items} card`}> 
            <div className={styles['icon_area']}>
            <i class="bi bi-chat-right-quote"></i>
            <p>Thank you for putting together such a great product. We loved working with you and the whole team, and we will be recommending you to others!
              - Client Name, Location</p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Testimonial
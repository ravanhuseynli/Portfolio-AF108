import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import styles from '../assets/css/Contact.module.css'
export const Contact = () => {
  return (
    <div className={`${styles.formContainer} container-fluid mt-5`}>
        <div className={`${styles.textContainer} text-center`}>
            <i class="bi bi-chat-square-dots"></i>
            <h2>Get in touch</h2>
            <p>We'd love to hear from you</p>
            </div>
        <div className={styles['form_area']}>
            
            <form action="" className='form-group'>
                <input type="text" name="" id="" className='form-control'placeholder='Full Name' />
                <input type="text" name="" id="" className='form-control'placeholder='Full Email' />
                <input type="text" name="" id="" className='form-control'placeholder='Full Phone Number' />
                <textarea type="text" name="" id="" className='form-control'placeholder='Message' />
                <button className='btn btn-primary'>Send</button>
            </form>
        </div>
    </div>
  )
}

export default Contact
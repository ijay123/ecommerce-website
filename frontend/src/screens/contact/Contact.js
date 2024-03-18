import React from 'react'
import styles from './Contact.module.css'

const Contact = () => {

  return (
     <div>

    <div className={styles.container}>
     <div className={styles.container1}>
          <div><img src='' alt='red phone'/> <span>Call To Us</span></div>
          <p>
               We are avaliable 24/7 
               , 7 days a week.
          </p>
          <p>
               Phone: 8801611112222
          </p>
          <hr/>
          <div>
               <img src='' alt='envelop'/><span>Write To US</span>
          </div>
          <p>Fill out our form and we will contact you within 24 hours</p>
          <p>Emails: customer@exclusive.com</p>
          <p>Emails: support@exclusive.com</p>
     </div>
     <div className={styles.container2}>
          <input type='text' placeholder='Your Name' className={styles.input}/><span className={styles.star}>*</span>
          <input type='text' placeholder='Your Email' className={styles.input}/><span className={styles.star}>*</span>
          <input type='text' placeholder='Your Phone' className={styles.input}/><span className={styles.star}>*</span>
          <p>
               <textarea type='text' placeholder='Your Message' cols={70} rows={10} className={styles.tarea}></textarea>
          </p>

          <button className={styles.btn1}>Send Message</button>

     </div>
    </div>
    </div>
  )
}

export default Contact
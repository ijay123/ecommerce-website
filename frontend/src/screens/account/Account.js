import React from 'react'
import styles from './Account.module.css'

const Account = () => {
  return (
    <div>
     <div className={styles.account}>
          <div className={styles.side}>
               <p>Manage My Account</p>
               <ul className={styles.ul}>
                    <li>My Profile</li>
                    <li>Address Book</li>
                    <li>My Payment Options</li>
               </ul>
               <p>My Orders</p>
               <ul className={styles.ul}>
                    <li>My Returns</li>
                    <li>My Cancellations</li>
               </ul>
               <p>My Wishlist</p>
          </div>
       
          <div className={styles.main}>
               <p className={styles.edit}>Edit Your Profile</p>
               
               <form action="">
                    <div className={styles.container}>
                         <div className={styles.account1}>
                    <label>First Name</label>
                    <input type="text" placeholder="firstName" className={styles.input}/>
                    <label>Email</label>
                    <input  type="email" placeholder='email' className={styles.input}/>
                    </div>
                    <div className={styles.account1}>
                         <label>Last Name</label>
                         <input type='text' placeholder='lastName' className={styles.input}/>
                         <label>Address</label>
                         <input type='text' placeholder='address' className={styles.input}/>
                    </div>
                    </div>
               </form>
          </div>
     </div>
    </div>
  )
}

export default Account
import React from 'react'
import styles from './Footer.module.css'
import {Link} from 'react-router-dom'


function Footer(){
     return(

          <div>
               <footer>
  <div className={styles.footer}>
  <div className={styles.footer1}>
    <p className={styles.sec1}>Exclusive</p>
    <p className={styles.subscribe}>Subscribe</p>
    <p>Get 10% off your first order</p>
    <p className={styles.send}><input type="text" className={styles.input2} placeholder="Enter your email"/><img src="../wishlist-asset/icon-send.png" alt="" class=""/></p>
  </div>

  <div className={styles.footer1}>
    <p className={styles.subscribe}>Support</p>
    <p>111 Bijoy sarani, Dhaka,<br/>DH 1515, Bangladesh.</p>
    <p>execlusive@gmail.com</p>
    <p>+88015-88888-9999</p>
  </div>

  <div className={styles.footer1}>
    <p className={styles.subscribe}>Account</p>
    <Link to={'/account'}>My Account</Link>
    <Link to={'/login'}>Login / Register</Link>
    <Link to={'/cart'}>Cart</Link>
    <Link to={'/wishlist'}>Wishlist</Link>
    <Link to={'/shop'}>Shop</Link>
  </div>
  <div className={styles.footer1}>
    <p className={styles.subscribe}>Quick Link</p>
    <p>Pivate Policy</p>
    <p>Terms Of Use</p>
    <p>FAQ</p>
    <p>Contact</p>
  </div>

  <div className={styles.footer1}>
    <p className={styles.subscribe}>Download App</p>
    <p className={styles.save}>Save $3 with App New User Only</p>
    <div className={styles.qr}>
      <div><img src="/wishlist-asset/Qr Code.png" alt=""/></div>
      <div className={styles.play}>
        <div className={styles.logo}><img src="/wishlist-asset/png-transparent-google-play-store-logo-google-play-app-store-android-wallets-text-label-logo.png" alt=""/></div>
        <div><img src="/wishlist-asset/download-appstore.png" alt=""/>
        </div>
      </div>
    </div>
    <div class={styles.footer6}>
      <img src="/wishlist-asset/Icon-Facebook.png" alt=""/>
      <img src="/wishlist-asset/Icon-Twitter.png" alt=""/>
      <img src="/wishlist-asset/instagram.png" alt=""/>
      <img src="/wishlist-asset/Icon-Linkedin.png" alt=""/>
    </div>
  </div>
  
</div>
  <hr/>
  <p className={styles.footer5}>&copy Copyright Rimel 2022. All right reserved</p>
</footer>
          </div>
     )
}

export default Footer
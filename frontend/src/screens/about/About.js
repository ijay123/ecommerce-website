import React from 'react'
import styles from './About.module.css'

function About() {
  return (
    <div>
     <div className={styles.about}>
          <div>
               
               <p className={styles.story}>Our Story</p>

               <div className={styles.text}>
               <p>Launched in 2015, Exclusive is South Asia's premier online shopping marketplace with an active presence in Bangladesh. Support
                    by wide range of tailored maerketing, data and service solutions, Exclusive has 10,500 sailers and 300 brands and serves 3
                    million customers across the region.
               </p>
               <p>
                    Exclusive has more than 1 million products to offer, growing at a very fast rate. Exclusive offers a diverse assotment in categories
                    ranging from consumer.
               </p>
               </div>
          </div>
          <div>
               <img src="/About-asset/two-women.png" alt='women'/>
          </div>
     </div>
    </div>
  )
}

 function About2(props) {
return(
     <div>
<div className={styles.customer}>
     <div className={styles.img2}><p className={styles.img}>{props.img}</p></div>
     <div><p className={styles.cus}>{props.customers}k</p></div>
     <div><p className={styles.title}>{props.title}</p></div>
</div>
     </div>
)
}
function About3(props) {
     return(
          <div>
<div className={styles.container}>
    <p className={styles.images}><img src={props.image} alt=''/></p>
<p className={styles.name}>{props.name}</p>
<p>{props.title}</p>
<p className={styles.icons}>{props.twitter}{props.instagram}{props.linkedin}</p>
</div>

          </div>
     )
}
function About4(props){
return(
     <div className={styles.about4}>
          <div className={styles.container3}>
               <div className={styles.imgs1}><p className={styles.imgs2}>{props.imgs}</p></div>
               <div className={styles.ti}>{props.titles}</div>
               <div>{props.prices}</div>
          </div>
     </div>
)
}


export {About, About2, About3, About4}
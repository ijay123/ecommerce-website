import React from 'react'
import {About} from './About'
import {About2, About3, About4} from './About'
import styles from './Icons.module.css'

import {AiOutlineShop, AiOutlineDollarCircle, AiOutlineSafetyCertificate} from 'react-icons/ai'

import {BsBag} from 'react-icons/bs'
import {CiBadgeDollar} from 'react-icons/ci'
import {FiTwitter, FiInstagram} from 'react-icons/fi'
import {BiLogoLinkedin} from 'react-icons/bi'
import {TbTruckDelivery} from 'react-icons/tb'
import {SlEarphonesAlt} from 'react-icons/sl'

function Icon (){
  return (
    <div>
<About/>
<div className={styles.customers}>

<About2
img = {<AiOutlineShop/>}
customers= {10.5}
title= 'Salers active on our site'
/>

<About2
img = {<AiOutlineDollarCircle/>}
customers= {33}
title= 'Salers active on our site'
/>

<About2
img = {<BsBag/>}
customers= {45.5}
title= 'Salers active on our site'
/>

<About2
img = {<CiBadgeDollar/>}
customers= {25}
title= 'Salers active on our site'
/>

</div>
<div className={styles.container2}>
<About3
image = '/About-asset/blue-shirt-guy.png'
title = 'Founder & Chairman'
name = 'Tom Cruise'
twitter = {<FiTwitter/>}
instagram = {<FiInstagram/>}
linkedin = {<BiLogoLinkedin/>}
/>

<About3
image = '/About-asset/black-suit-woman.png'
title = 'Managinf Director'
name = 'Emma Watson'
twitter = {<FiTwitter/>}
instagram = {<FiInstagram/>}
linkedin = {<BiLogoLinkedin/>}
/>

<About3
image = '/About-asset/black-suit-man.png'
title = 'Product Designer'
name = 'Will Smith'
twitter = {<FiTwitter/>}
instagram = {<FiInstagram/>}
linkedin = {<BiLogoLinkedin/>}
/>
</div>

<div className={styles.track}>
<About4
imgs = {<TbTruckDelivery/>}
titles = 'FREE AND FAST DELIVERY'
prices = 'Free delivery for all orders over $140'
/>

<About4
imgs = {<SlEarphonesAlt/>}
titles = '24/7 CUSTOMER SERVICE'
prices = 'Frendly 24/7 customer support'
/>

<About4
imgs = {<AiOutlineSafetyCertificate/>}
titles = 'MONEY BACK GUARANTEE'
prices = 'We return money within 30 days'
/>
</div>
    </div>

  )
}

export default Icon
import React from "react";
import styles from './Ecommerce.module.css'
import {CiMobile4, CiHeadphones} from 'react-icons/ci'
import {MdComputer} from 'react-icons/md'
import {TbDeviceWatchStats} from 'react-icons/tb'
import {AiOutlineCamera} from 'react-icons/ai'
import {CgGames} from 'react-icons/cg'

function Ecommerce2({accessaries, name}) {
  return (
    <div className={styles.container3}>
      <div>
        <p className={styles.phones}>{accessaries}</p>
        <p>{name}</p>
      </div>
    </div>
  );
}

export default Ecommerce2;

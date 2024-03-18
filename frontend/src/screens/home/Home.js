import React from "react";
import styles from "./Home.module.css";



function Home() {
 




  return (
    <div>
      <div className={styles.content1}>
        <span>Wishlist(4)</span>
        <span>
          <button className={styles.btn1}>Move All To Bag</button>
        </span>
      </div>

      {/* content 1 */}
      {/* <div className={styles.product2}>
      {product && product.slice(0,4).map((eproduct) => (
        <Product1
          key={eproduct.id}
          name={eproduct.name}
          price={eproduct.price}
          img={eproduct.img}
          discountPrice={eproduct.discountPrice}
          percent={eproduct.percent}
          eye={true}
          stars={eproduct.stars}
          
        />
      ))
      }
      </div> */}
<div className={styles.Home3}>
      <div className={styles.rec}>
        <span>
          <img src="/wishlist-asset/Category Rectangle.png" alt="" />
        </span>
        <span>Just For You</span>
      </div>
      <div>
        <button className={styles.btn2}>See All</button>
      </div>
    </div>

    {/* <div className={styles.product2}>
      {product && product.slice(4,8).map((eproduct) => (
        <Product1
          active={false}
          key={eproduct.id}
          name={eproduct.name}
          price={eproduct.price}
          img={eproduct.img}
          discountPrice={eproduct.discountPrice}
          percent={eproduct.percent}
          stars={eproduct.stars}
        />
      ))
      }
      </div> */}
    </div>
  );
}



export default Home;

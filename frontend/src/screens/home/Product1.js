import React from "react";
import styles from "./Home.module.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

function Product1({
  percent,
  img,
  name,
  price,
  discountPrice,
  stars,
  active
}) {
   active = true;
  return (
    <div>
      <div className={styles.HomeContent}>
        <div className={styles.content2}>
          <div className={styles.dis}>
            <p>{percent}</p>
            { active ? (
              <p>
                <img
                  src="/wishlist-asset/icon-delete.png"
                  alt="delete"
                  className={styles.delete}
                />
              </p>
            ) : (
              <p>
                <img
                  src="/wishlist-asset/Fill eye.png"
                  alt="delete"
                  className={styles.delete}
                />
              </p>
            )}
          </div>
          <p className={styles.img2}>
            <img src={img} alt="guccibag" />
          </p>
        </div>
        <div className={styles.content3}>
          <AiOutlineShoppingCart />
          <Link to={"/cart"} className={styles.btn6}>
            Add To Cart
          </Link>
        </div>
        <div>
          <p>{name}</p>
          <span className={styles.price}>{price}</span>
          <s className={styles.discPrice}>{discountPrice}</s>
        </div>
        <p>
          <img src={stars} alt="" />
        </p>
      </div>
    </div>
  );
}
export default Product1;

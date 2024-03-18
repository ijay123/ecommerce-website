import React, { useEffect, useState } from "react";
import styles from "./Ecommerce.module.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { createCartAction } from "../../redux/action/cart";
import { toast } from "react-toastify";
import Spinner from "../../components/Spinner/CustomSpinner";
import {
  CREATE_CART_CLEAR_ERROR,
  CREATE_CART_RESET,
} from "../../redux/constants/cart";

function Ecommerce1({
  productId,
  percentDiscount,
  imageUrl,
  productName,
  price,
  discountPrice,
  stars,
  desc,
}) {
  const dispatch = useDispatch();

  const {
    createdCart: { cart, success, error },
  } = useSelector((state) => state);

  const userInfoFromLocalStorage = localStorage.getItem("ecommerceUserInfo")
    ? JSON.parse(localStorage.getItem("ecommerceUserInfo"))
    : null;

  const [addingToCart, setAddingToCart] = useState(null);

  const userId = userInfoFromLocalStorage?.data?._id;
  const quantity = 1;
  const total = Number(price) * Number(quantity);

  useEffect(() => {
    if (success) {
      toast.success(`successfully added cart`);

      dispatch({ type: CREATE_CART_RESET });
    }

    if (error) {
      toast.error(`${error}`);

      dispatch({ type: CREATE_CART_CLEAR_ERROR });
    }
  }, [success, error, dispatch]);
  // Add to cart functionality

  const items = { imageUrl, productName, price, desc, total, quantity, userId };

  const AddToCart = () => {
    setAddingToCart(productId); // Set the loading state for this specific product
    dispatch(createCartAction(items)).then(() => {
      setAddingToCart(null);
    });
    // dispatch(createCartAction(items));
  };
  return (
    <div>
      <div className={styles.HomeContent}>
        <div className={styles.content2}>
          <div className={styles.dis}>
            <div>
              <p>{percentDiscount}</p>
            </div>
            <div>
              <p>
                <img
                  src="/wishlist-asset/icon-delete.png"
                  alt="delete"
                  className={styles.delete}
                />
              </p>
              <p className={styles.eyes}>
                <img src="/wishlist-asset/Fill Eye.png" alt="" />
              </p>
            </div>
          </div>
          <p className={styles.img2}>
            <img src={`${imageUrl}`} alt="img" />
          </p>
        </div>
        <div className={styles.content3}>
          {addingToCart === productId ? (
            <Spinner />
          ) : (
            <div
              className="flex gap-[20px] items-center cursor-pointer"
              onClick={AddToCart}
            >
              <AiOutlineShoppingCart />
              <p>Add To Cart</p>
            </div>
          )}
        </div>
        <div>
          <p>{productName}</p>
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

export default Ecommerce1;

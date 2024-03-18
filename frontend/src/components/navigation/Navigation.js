import React, { useEffect } from "react";
import styles from "./Navigation.module.css";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../redux/action/user";
import { useDispatch, useSelector } from "react-redux";

import {
  AiOutlineSearch,
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineMenu,
} from "react-icons/ai";
import { getCartsAction } from "../../redux/action/cart";

function Navigation() {
  const dispatch = useDispatch();
  const {
    getCarts: { cart },
  } = useSelector((state) => state);

  const userInfoFromLocalStorage = localStorage.getItem("ecommerceUserInfo")
    ? JSON.parse(localStorage.getItem("ecommerceUserInfo"))
    : null;

  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };
  useEffect(() => {
    dispatch(getCartsAction());
  }, [dispatch]);

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  const Addcart = cart.length;
  console.log(Addcart, 'addcart')

  return (
    <div>
      <div className={styles.fNav}>
        <p>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </p>
        <p>
          <a href="/">ShopNow</a>
        </p>
        <p>
          <select className={styles.select}>
            <option>English</option>
            <option>Hausa</option>
            <option>Yoruba</option>
          </select>
        </p>
      </div>
      <div className={styles.nav}>
        <div className={styles.exclusive}>Exclusive</div>

        <div className={styles.nav1}>
          <Link to={"/home"} className={styles.nav1}>
            Home
          </Link>
          <Link to={"/contact"} className={styles.nav1}>
            Contact
          </Link>
          <Link to={"/about"} className={styles.nav1}>
            About
          </Link>
          <Link to={"/"} className={styles.nav1}>
            Sign Up
          </Link>
        </div>
        <div className={styles.nav2}>
          <span className={styles.input}>
            <input type="text" placeholder="What are you looking for?" />
            <AiOutlineSearch />
          </span>
          <span>
            <AiOutlineHeart />
          </span>
          <Link to={"/cart"} className="flex">
            <AiOutlineShoppingCart />
            {Addcart > 0 && (
              <span className="w-[15px] h-[15px] p-[3px]  text-[white] bg-[red] flex justify-center items-center rounded-[50%]">
                {Addcart}
              </span>
            )}
          </Link>
          <span>
            <img
              src={userInfoFromLocalStorage?.data?.avatar}
              className="w-[25px] rounded-[50%]"
              alt=""
            />
          </span>
          <span onClick={handleLogout} className="text-[red] cursor-pointer">
            Logout
          </span>
        </div>
        <div className={styles.menubar}>
          <AiOutlineMenu />
        </div>
      </div>
    </div>
  );
}

export default Navigation;

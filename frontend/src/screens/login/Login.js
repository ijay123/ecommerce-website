import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Login.module.css";
import { toast } from "react-toastify";
import { loginUserAction } from "../../redux/action/user";
import { Link, useNavigate } from "react-router-dom";
import Spinner from "../../components/Spinner/CustomSpinner";
import { LOGIN_USER_CLEAR_ERROR } from "../../redux/constants/user";

const Login = () => {
  const dispatch = useDispatch();

  const {
    loggedInUser: { error, success, loading },
  } = useSelector((state) => state);

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  //   Handle form data change

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const userInfoFromLocalStorage = localStorage.getItem("ecommerceUserInfo")
    ? JSON.parse(localStorage.getItem("ecommerceUserInfo"))
    : null;

  useEffect(() => {
    if (success) {
      toast.success(
        `You've successfully logged in , ${userInfoFromLocalStorage?.data?.FirstName}`
      );
      const role = userInfoFromLocalStorage?.data?.role || ""; // Default to an empty string if role is not available
      console.log(role, "role");

      setTimeout(() => {
        switch (role) {
          case "regular":
            navigate("/home");
            break;
          case "admin":
            navigate("/category");
            break;
          default:
            navigate("/");
            break;
        }
      }, 3000);
    }
    if (error) {
      toast.error(`${error}`);
      setTimeout(() => {
        dispatch({ type: LOGIN_USER_CLEAR_ERROR });
      }, 3000);
    }
  }, [
    dispatch,
    success,
    error,
    userInfoFromLocalStorage?.data?.FirstName,
    navigate,
    userInfoFromLocalStorage?.data?.role,
  ]);

  async function handleSubmit() {
    dispatch(
      loginUserAction({
        email: formData.email,
        password: formData.password,
      })
    );
  }

  return (
    <div>
      <div className={styles.main}>
        <div>
          <img
            src="/wishlist-asset/loginImage.png"
            alt=""
            className={styles.img3}
          />
        </div>
        <div className={styles.main1}>
          <p className={styles.exLine1}>Log in to Exclusive</p>
          <p className={styles.details}>Enter your details below</p>
          <form>
            <p>
              <input
                type="text"
                name="email"
                onChange={handleChange}
                placeholder="Email"
                className={styles.input}
                id={styles.email}
              />
            </p>
            <p>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                placeholder="Password"
                className={styles.input}
                id={styles.password}
              />
            </p>
            <div className={styles.main2}>
              <p>
                {loading ? (
                  <Spinner />
                ) : (
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    id={styles.signupBtn}
                  >
                    Login
                  </button>
                )}
              </p>
              <p className={styles.forget}>Forgot Password?</p>
            </div>
            <p className="text-[grey]">
              Do not have an Account?{" "}
              <Link to={"/"} className="text-[black] font-bold">
                SignUp
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

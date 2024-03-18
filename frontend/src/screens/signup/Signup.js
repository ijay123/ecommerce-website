import React, { useEffect, useState } from "react";
import styles from "./Signup.module.css";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { createUserAction } from "../../redux/action/user";
import Spinner from "../../components/Spinner/CustomSpinner";
import { CREATE_USER_CLEAR_ERROR } from "../../redux/constants/user";
import { Link } from "react-router-dom";

const Signup = () => {
  const dispatch = useDispatch();

  const {
    createdUser: { user, error, success, loading },
  } = useSelector((state) => state);

  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    gender: "",
    email: "",
    password: "",
  });
  //   Handle form data change

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (success) {
      toast.success(
        `You've successfully created your account, ${user.FirstName}`
      );
    }
    if (error) {
      toast.error(`${error}`);
      setTimeout(() => {
        dispatch({ type: CREATE_USER_CLEAR_ERROR });
      });
    }
  }, [dispatch, success, error, user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      createUserAction({
        FirstName: formData.FirstName,
        LastName: formData.LastName,
        gender: formData.gender,
        email: formData.email,
        password: formData.password,
      })
    );
  };

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
          <p className={styles.exline1}>Create an account</p>
          <p className={styles.details}>Enter your details below</p>
          <form>
            <p>
              <input
                type="text"
                name="FirstName"
                placeholder="First Name"
                onChange={handleChange}
                className={styles.input}
              />
            </p>
            <p>
              <input
                type="text"
                name="LastName"
                placeholder="Last Name"
                onChange={handleChange}
                className={styles.input}
              />
            </p>
            <p>
              <select
                onChange={handleChange}
                name="gender"
                className={styles.input}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </p>
            <p>
              <input
                type="text"
                name="email"
                onChange={handleChange}
                placeholder="Email"
                className={styles.input}
              />
            </p>
            <p>
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                className={styles.input}
              />
            </p>

            <p>
              {loading ? (
                <Spinner />
              ) : (
                <button onClick={handleSubmit} className={styles.btnn}>
                  Create account
                </button>
              )}
            </p>
          </form>

          <div className={styles.google}>
            <span>
              <img src="/wishlist-asset/Icon-Google.png" alt="" />
            </span>
            <span>Singup With Google</span>
          </div>
          <div className={styles.account}>
            <span>Already have account?</span>
            <span>
              <Link to="/login">Log in</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

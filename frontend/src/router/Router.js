import React from "react";

// import Products from '../screens/home/Products';
import Contact from "../screens/contact/Contact";
import Signup from "../screens/signup/Signup";
import Icon from "../screens/about/Icon";
import Checkout from "../screens/cart/Checkout";
import Account from "../screens/account/Account";
import Home from "../screens/home/Home";
import Cart from "../screens/cart/Cart";

import Login from "../screens/login/Login";
import Ecommerce from "../screens/ecommerce/Ecommerce";
import { Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { AdminProtectedRoute } from "../components/adminPage/AdminProtectedRoute";
import AllProducts from "../screens/adminScreens/products/AllProducts";

import Product from "../screens/adminScreens/Product";
import AdminLayout from "../components/adminPage/AdminLayout";
import AdminCat from "../screens/adminScreens/AdminCat";

function Routen() {
  return (
    <Routes>
      <Route
        path="/home"
        element={
          <AdminProtectedRoute>
            <Ecommerce />
          </AdminProtectedRoute>
        }
      />
      <Route
        path="/contact"
        element={
          <Layout>
            <Contact />
          </Layout>
        }
      />
      <Route
        path="/about"
        element={
          <Layout>
            <Icon />
          </Layout>
        }
      />
      <Route
        path="/cart"
        element={
          <Layout>
            <Cart />
          </Layout>
        }
      />

      <Route
        path="/wishlist"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />

      <Route
        path="/checkout"
        element={
          <Layout>
            <Checkout />
          </Layout>
        }
      />
      <Route
        path="/account"
        element={
          <Layout>
            <Account />
          </Layout>
        }
      />

      <Route
        path="/category"
        element={
          <AdminProtectedRoute>
            <AdminCat />
          </AdminProtectedRoute>
        }
      />

      <Route
        path="/createProducts"
        element={
          <AdminLayout>
            <Product />
          </AdminLayout>
        }
      />
      <Route
        path="allProducts"
        element={
          <AdminLayout>
            <AllProducts />
          </AdminLayout>
        }
      />

      <Route path="/" element={<Signup />}></Route>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
  );
}

export default Routen;

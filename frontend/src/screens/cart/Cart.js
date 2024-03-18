import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  deleteCartAction,
  getCartsAction,
  updateCartAction,
} from "../../redux/action/cart";
import { toast } from "react-toastify";
import {
  DELETE_CART_CLEAR_ERROR,
  UPDATE_CART_CLEAR_ERROR,
} from "../../redux/constants/cart";
import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();

  const {
    getCarts: { cart },
    updateCart: { error },
    deleteCart: { success, error: deleteError },
  } = useSelector((state) => state);

  console.log(cart, "cartsretrieve");

  useEffect(() => {
    if (error) {
      toast.error(`${error}`);
      setTimeout(() => {
        dispatch({ type: UPDATE_CART_CLEAR_ERROR });
      }, 3000);
    }

    if (success) {
      toast.success(`successfull deleted.`);
      setTimeout(() => {
        dispatch({ type: DELETE_CART_CLEAR_ERROR });
      }, 3000);
    }
    if (deleteError) {
      toast.error(`${error}`);
      setTimeout(() => {
        dispatch({ type: DELETE_CART_CLEAR_ERROR });
      }, 3000);
    }

    dispatch(getCartsAction());
  }, [dispatch, error, deleteError, cart.productName, success]);

  const handleIncreaseQuantity = (id) => {
    const productToUpdate = cart.find((item) => item._id === id);
    if (productToUpdate) {
      dispatch(
        updateCartAction(id, {
          quantity: productToUpdate.quantity + 1,
          total: (
            productToUpdate.price *
            (productToUpdate.quantity + 1)
          ).toFixed(2),
        })
      );
    }
  };

  const handleDecreaseQuantity = (id) => {
    const productToUpdate = cart.find((item) => item._id === id);
    if (productToUpdate && productToUpdate.quantity > 1) {
      dispatch(
        updateCartAction(id, {
          quantity: productToUpdate.quantity - 1,
          total: (
            productToUpdate.price *
            (productToUpdate.quantity + 1)
          ).toFixed(2),
        })
      );
    }
  };

  async function deleteHandler(id) {
    console.log("Deleting item with id:", id);

    dispatch(deleteCartAction(id));
  }

  const sumTotal = cart.reduce((acc, item) => acc + parseFloat(item.total), 0);

  return (
    <div className="pt-[100px]">
      <h1 className="text-2xl font-bold mb-8">Cart</h1>
      <table className="min-w-full table-auto text-left">
        <thead className="border-b">
          <tr>
            <th className="px-6 py-4">Image</th>
            <th className="px-6 py-4">Product</th>
            <th className="px-6 py-4">Price</th>
            <th className="px-6 py-4">Quantity</th>
            <th className="px-6 py-4">Total</th>
            <th className="px-6 py-4"></th>
          </tr>
        </thead>
        <tbody>
          {cart ? (
            cart.map((item, index) => (
              <tr key={index} className="border-b">
                <td className="px-6 py-4">
                  <img
                    src={item.imageUrl}
                    alt={item.productName}
                    className="w-20 h-20 object-cover"
                  />
                </td>
                <td className="px-6 py-4">{item.productName}</td>
                <td className="px-6 py-4">${item.price}</td>
                <td className="px-6 py-4">
                  <div>
                    {" "}
                    <button
                      className="border px-[8px] bg-[green] text-white"
                      onClick={() => handleDecreaseQuantity(item._id)}
                    >
                      -
                    </button>
                    <input
                      className="border w-[40px] px-[12px]"
                      name="quantity"
                      value={item.quantity}
                      readOnly
                    />
                    <button
                      className="border px-[8px] bg-[green] text-white"
                      onClick={() => handleIncreaseQuantity(item._id)}
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className="px-6 py-4">${item.total}</td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => deleteHandler(item._id)}
                    className="border p-[7px] bg-[red] text-[white] rounded-[5px]"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                className="px-6 py-10 text-[30px] flex justify-center gap-[30px] text-[blue]"
                colSpan="5"
              >
                Your cart is empty.
                <button className="border text-[white] bg-[red] p-[10px] rounded-[10px]">
                  <Link to={"/home"}> Add to Cart</Link>
                </button>
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <p className="flex text-[30px] font-bold float-end pr-[30px]">
        sum-total ={sumTotal.toFixed(2)}
      </p>
      <button className="border mt-[50px] w-[500px] py-[20px] rounded-[10px] bg-[green] flex justify-center items-center text-white m-auto">
        Checkout
      </button>
    </div>
  );
};

export default Cart;

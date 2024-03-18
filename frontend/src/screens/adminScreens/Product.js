import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCategoriesAction } from "../../redux/action/category";
import Spinner from "../../components/Spinner/CustomSpinner";
import { toast } from "react-toastify";
import { createProductAction } from "../../redux/action/product";

const Product = () => {
  const dispatch = useDispatch();
  const {
    AllCategories: { names },
    createdProduct: { product, success, error, loading },
  } = useSelector((state) => state);

  const userInfoFromLocalStorage = localStorage.getItem("ecommerceUserInfo")
    ? JSON.parse(localStorage.getItem("ecommerceUserInfo"))
    : null;

  const [formData, setFormData] = useState({
    productName: "",
    desc: "",
    price: "",
    imageUrl: "",
    percentDiscount: "",
    discountPrice: "",
    categoryId: "",
    userId: userInfoFromLocalStorage?.data?._id,
  });

  const handleChange = (event) => {
    event.preventDefault();
    let value = event.target.value;
    if (!value) return;
    setFormData({ ...formData, [event.target.name]: value });
  };

  useEffect(() => {
    if (success) {
      toast.success(`Successfull created ${product?.productName} product`);
    }
    if (error) {
      toast.error(`${error}`);
    }
    dispatch(getCategoriesAction());
  }, [dispatch, product?.productName, success, error]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      createProductAction({
        ...formData,
        price: formData.price ? Number(formData.price) : null,
        percentDiscount: formData.percentDiscount
          ? Number(formData.percentDiscount)
          : null,
        discountPrice: formData.discountPrice
          ? Number(formData.discountPrice)
          : null,
      })
    );
  };

  return (
    <div className=" z-[30] absolute  w-[70vw] top-[80px] right-0">
      <div className="flex justify-between pr-[180px] mb-[50px]">
        <p className="border">Create Product</p>
        <Link to={"/allProducts"} className="border">
          All Products
        </Link>
      </div>
      <form  type="submit" className=" border w-[600px] px-[30px] py-[30px] bg-white overflow-y-auto">
        <div>
          <label>Product Name</label>
          <p className="border p-[10px] rounded-[20px] mb-[30px] mt-[10px]">
            <input
              type="text"
              name="productName"
              onChange={handleChange}
              placeholder="Product Name"
              className="w-[100%] outline-none"
            />
          </p>
        </div>
        <div>
          <label>Price</label>
          <p className="border p-[10px] rounded-[20px] mb-[30px] mt-[10px]">
            <input
              type="number"
              name="price"
              onChange={handleChange}
              placeholder="price"
              className="w-[100%] outline-none"
            />
          </p>
        </div>

        <div>
          <label>Image Url</label>

          <p className="border p-[10px] rounded-[20px] mb-[30px] mt-[10px]">
            <input
              type="text"
              name="imageUrl"
              onChange={handleChange}
              placeholder="Image URL"
              className="w-[100%] outline-none"
            />
          </p>
        </div>

        <div>
          <label>Decription</label>

          <p className="border p-[10px] rounded-[20px] mb-[30px] mt-[10px]">
            <input
              type="text"
              name="desc"
              onChange={handleChange}
              placeholder="desc"
              className="w-[100%] outline-none"
            />
          </p>
        </div>

        <div className="flex justify-between mb-[30px]">
          <div>
            <label>Percentage discount</label>
            <p className="border p-[10px] rounded-[20px] ">
              <input
                type="number"
                name="percentDiscount"
                onChange={handleChange}
                placeholder="percent"
                className="w-[100%] outline-none"
              />
            </p>
          </div>

          <div>
            <label>Discount Price</label>
            <p className="border p-[10px] rounded-[20px]">
              <input
                type="number"
                name="discountPrice"
                onChange={handleChange}
                placeholder="discount"
                className="w-[100%] outline-none"
              />
            </p>
          </div>
        </div>

        <div>
          <label>Category</label>
          <p className="border p-[10px] rounded-[20px] mb-[30px] mt-[10px] ">
            <select
              className="outline-none"
              name="categoryId"
              onChange={handleChange}
            >
              <option value="">Select category</option>
              {names &&
                names.map((cat, id) => (
                  <option key={id} value={cat._id}>
                    {cat.name}
                  </option>
                ))}
            </select>
          </p>
        </div>
        {loading ? (
          <Spinner />
        ) : (
          <button
           
            onClick={handleSubmit}
            className="border px-[50px] py-[10px] rounded-[20px] bg-[red] text-white "
          >
            Add Products
          </button>
        )}
      </form>
    </div>
  );
};

export default Product;

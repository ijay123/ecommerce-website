import httpStatus from "http-status";
import Cart from "../../model/added-cart/cart.js";

export const createCart = async (req, res) => {
  const data = req.body;
  const userId = req.user.id;

  //create the product

  const descExist = await Cart.findOne({
    productName: data.productName,
    userId: data.userId,
  });

  if (descExist) {
    res.status(httpStatus.BAD_REQUEST).json({
      status: "error",
      message: "cart already exist",
    });
    return;
  }

  const product = await Cart.create({
    productName: data.productName,
    desc: data.desc,
    price: data.price,
    quantity: data.quantity,
    total: data.price * data.quantity,
    imageUrl: data.imageUrl,
    userId: data.userId,
  });
  const newCart = await Cart.findOne({
    _id: product._id,
  }).populate("userId");

  res.status(httpStatus.CREATED).json({
    status: "success",
    data: newCart,
  });
};

export const getCart = async (req, res) => {
  const product = await Cart.findById(req.params.product).populate("userId");
  if (!product) {
    res.status(httpStatus.BAD_REQUEST).json({
      status: "error",
      message: "Product not found",
    });
    return;
  }

  res.status(httpStatus.OK).json({
    status: "success",
    data: product,
  });
};

export const getCarts = async (req, res) => {
  const userId = req.query.id;
  console.log("params", req.params);
  console.log("query", req.query);
  const getCart = await Cart.find({ userId: req.user.id }).populate("userId");
  console.log("Cart Items:", getCart);
  res.status(httpStatus.OK).json({
    status: "success",
    data: getCart,
  });
};

export const updateCart = async (req, res) => {
  const { productName, desc, price, quantity, total, imageUrl } = req.body;
  const { id } = req.params;

  try {
    const updatedCart = await Cart.findByIdAndUpdate(
      id,
      { productName, desc, price, quantity, total, imageUrl },
      { new: true }
    );

    if (!updatedCart) {
      return res.status(httpStatus.NOT_FOUND).json({
        status: "error",
        message: "product not found in cart",
      });
    }

    res.status(httpStatus.OK).json({
      status: "success",
      data: updatedCart,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      status: "error",
      message: "An error occurred while updating the cart",
      error: error.message,
    });
  }
};

export const deleteCart = async (req, res) => {
  const { id } = req.params;

  const exist = await Cart.findOne({ _id: id });
  if (!exist) {
    res.status(httpStatus.BAD_REQUEST).json({
      status: "error",
      message: "product not found",
    });
    return;
  }

  await Cart.findByIdAndDelete({ _id: id });

  res.status(httpStatus.OK).json({
    status: "success",
    data: "Product deleted",
  });
};

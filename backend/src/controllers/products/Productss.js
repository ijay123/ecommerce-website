import Products from "../../model/products/products.js";
import httpStatus from "http-status";
import { paginate } from "../../util/pagination.js";

export const createProduct = async (req, res) => {
  const data = req.body;
  const userId = req.user.id;

  //create the product

  const descExist = await Products.findOne({
    productName: data.productName,
    userId: data.userId,
  });

  if (descExist) {
    res.status(httpStatus.BAD_REQUEST).json({
      status: "error",
      message: "description already exist",
    });
    return;
  }

  const product = await Products.create({
    productName: data.productName,
    desc: data.desc,
    price: data.price,
    imageUrl: data.imageUrl,
    percentDiscount: data.percentDiscount,
    discountPrice: data.discountPrice,
    categoryId: data.categoryId,
    userId: data.userId,
  });
  const newProduct = await Products.findOne({
    _id: product._id,
  }).populate("userId");

  res.status(httpStatus.CREATED).json({
    status: "success",
    data: newProduct,
  });
};

export const getProduct = async (req, res) => {
  const product = await Products.findById(req.params.product).populate(
    "userId"
  );
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

export const getProducts = async (req, res) => {
  const userId = req.query.id;
  console.log("params", req.params);
  console.log("query", req.query);
  const getProduct = await Products.find({}).populate("userId");

  res.status(httpStatus.OK).json({
    status: "success",
    data: getProduct,
  });
};

export const updateProduct = async (req, res) => {
  const { productId } = req.params;
  const { imageUrl, productName, desc, percentDiscount, price } = req.body;
  const exist = await Products.findOne({ _id: productId });
  if (!exist) {
    res.status(httpStatus.BAD_REQUEST).json({
      status: "error",
      message: "product not found",
    });
    return;
  }

  const updatedProduct = await Products.findByIdAndUpdate(
    { _id: productId },
    {
      productName: productName,
      price: price,
      desc: desc,
      discountPrice: discountPrice,
      percentDiscount: percentDiscount,
      imageUrl: imageUrl,
    },
    { new: true }
  );

  res.status(httpStatus.OK).json({
    status: "success",
    data: updatedProduct,
  });
};

export const deleteProduct = async (req, res) => {
  const { productId } = req.params;

  const exist = await Products.findOne({ _id: productId });
  if (!exist) {
    res.status(httpStatus.BAD_REQUEST).json({
      status: "error",
      message: "product not found",
    });
    return;
  }

  await Products.findByIdAndDelete({ _id: productId });

  res.status(httpStatus.OK).json({
    status: "success",
    data: "Product deleted",
  });
};

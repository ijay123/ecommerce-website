import httpStatus from "http-status";
import Category from "../../model/category/category.js";

const createCategory = async (req, res) => {
  //collect the data from req body
  const data = req.body;
  const userId = req.user.id;

  const categoryExist = await Category.findOne({
    name: data.name,
    userId: data.userId,
  });
  console.log(categoryExist);
  if (categoryExist) {
    res.status(httpStatus.BAD_REQUEST).json({
      status: "error",
      message: "category already exist",
    });
    return;
  }

  const createdCategory = await Category.create({
    name: data.name,
    userId: data.userId,
  });

  // const user = await Category.findOne({ _id: userId });
  //   user.tasks.push(task._id);
  //   await user.save();
  //   res.status(httpStatus.CREATED).json({
  //     status: "success",
  //     payload: task,
  //   });

  const newCategory = await Category.findOne({
    _id: createdCategory._id,
  }).populate("userId");

  res.status(httpStatus.CREATED).json({
    status: "success",
    data: newCategory,
  });
};

const getCategory = async (req, res) => {
  const id = req.params.id;
  const type = req.query.type;
  const name = req.query.name;
  const userId = req.query.userId;

  console.log(type, name, "type");

  let category;
  switch (type) {
    case "ID":
      category = await Category.findById(id);
      if (!category) {
        res.status(httpStatus.NOT_FOUND).json({
          status: "error",
          message: "Category id not found",
        });
        break;
      }

      res.status(httpStatus.OK).json({
        status: "success",
        data: category,
      });
      break;

    case "NAME":
      user = await User.findOne({ name: name });
      if (!category) {
        res.status(httpStatus.NOT_FOUND).json({
          status: "error",
          message: "Category with name not found",
        });
        break;
      }

      res.status(httpStatus.OK).json({
        status: "success",
        data: category,
      });
      break;

    case "USER":
      user = await Category.findOne({ userId: userId });
      if (!user) {
        res.status(httpStatus.NOT_FOUND).json({
          status: "error",
          message: "User with name not found",
        });
        break;
      }

      res.status(httpStatus.OK).json({
        status: "success",
        data: user,
      });
      break;

    default:
      res.status(httpStatus.NOT_FOUND).json({
        status: "error",
        message: "category not found",
      });
  }
};

const getCategories = async (req, res) => {
  const userId = req.query.id;
  console.log("params", req.params);
  console.log("query", req.query);
  const getCategory = await Category.find({ userId: req.user.id }).populate(
    "userId"
  );

  res.status(httpStatus.OK).json({
    status: "success",
    data: getCategory,
  });
};

// updated Category


const updateCategory = async (req, res) => {
  const { categoryTitle } = req.body;
  const { id } = req.params;
  const foundCategory = await Category.findOne({ _id: id });
  if (!foundCategory) {
    res.status(httpStatus.NOT_FOUND).json({
      status: "error",
      message: "Category not found",
    });
  }
  const CategoryExist = await Category.findOne({ name: categoryTitle });
  if (CategoryExist) {
    res.status(httpStatus.NOT_FOUND).json({
      status: "error",
      message: "Category already exist",
    });
    return;
  }
  
  const updatedCategory = await Category.findByIdAndUpdate(
    { _id: id },
    { name: categoryTitle },
    { new: true }
  );

  res.status(httpStatus.OK).json({
    status: "success",
    data: updatedCategory,
  });
};

const deleteCategory = async (req, res) => {
  const { id } = req.params;

  try {
    // Attempt to directly delete the category by its ID
    const deletedCategory = await Category.findByIdAndDelete(id);

    // Check if a category was actually found and deleted
    if (!deletedCategory) {
      return res.status(httpStatus.NOT_FOUND).json({
        status: "error",
        message: "Category not found",
      });
    }

    // If the deletion was successful, respond accordingly
    res.status(httpStatus.OK).json({
      status: "success",
      data: `Category with ID ${id} is deleted`,
    });
  } catch (error) {
    // Handle potential errors, such as invalid ID formats leading to a CastError
    res.status(httpStatus.BAD_REQUEST).json({
      status: "error",
      message: "An error occurred while deleting the category",
    });
  }
};

export {
  createCategory,
  getCategory,
  getCategories,
  updateCategory,
  deleteCategory,
};

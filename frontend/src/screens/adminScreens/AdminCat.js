import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  CREATE_CATEGORY_RESET,
  CREATE_CATEGORY_CLEAR_ERROR,
  UPDATE_CATEGORY_RESET,
  DELETE_CATEGORY_RESET,
} from "../../redux/constants/category";
import {
  createCategoryAction,
  getCategoriesAction,
  updateCategoryAction,
  deleteCategoryAction,
} from "../../redux/action/category";
import Spinner from "../../components/Spinner/CustomSpinner";
import { useNavigate } from "react-router-dom";

const AdminCat = () => {
  const dispatch = useDispatch();
  const {
    categories: { error, name, success, loading },
    AllCategories: { names },
    updatedCategory: { success: updateSuccess, loading: loadingDelete },
    deletedCategory: { success: deleteSuccess, loading: loadingUpdate },
  } = useSelector((state) => state);

  const userInfoFromLocalStorage = localStorage.getItem("ecommerceUserInfo")
    ? JSON.parse(localStorage.getItem("ecommerceUserInfo"))
    : null;
  console.log(names, "cat");

  const [value, setValue] = useState({
    name: "",
    userId: userInfoFromLocalStorage?.data?._id,
  });

  const [editCategory, setEditCategory] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [openEditCategory, setOpenEditCategory] = useState(false);

  const handleChange = (event) => {
    setValue({ ...value, name: event.target?.value });
    console.log(event.target?.value);
  };
  const navigate = useNavigate();

  useEffect(() => {
    if (success) {
      toast.success(`successfully added category ${name.name}`);

      dispatch({ type: CREATE_CATEGORY_RESET });
    }

    if (updateSuccess) {
      toast.success("Category updated successfully");
      //reset
      dispatch({ type: UPDATE_CATEGORY_RESET });
      dispatch(getCategoriesAction());
      setCategoryId("");
      setOpenEditCategory(false);
      setEditCategory("");
    }
    if (deleteSuccess) {
      toast.success("Delete Successful!");
      dispatch({ type: DELETE_CATEGORY_RESET });
      dispatch(getCategoriesAction());
    }

    if (error) {
      toast.error(`${error}`);
      setTimeout(() => {
        dispatch(CREATE_CATEGORY_CLEAR_ERROR);
      }, 3000);
    }

    dispatch(getCategoriesAction());
  }, [success, error, dispatch, name, navigate, deleteSuccess, updateSuccess]);

  async function categoryHandler() {
    dispatch(createCategoryAction(value));
  }

  async function updateHandler(id) {
    dispatch(updateCategoryAction(id, editCategory));
  }
  async function deleteHandler(id) {
    setCategoryId(id);
    dispatch(deleteCategoryAction(id));
  }

  const toggleEditHandler = (id) => {
    setCategoryId(id);
    setOpenEditCategory(true);
  };

  const canceUpdateHandler = () => {
    setCategoryId("");
    setOpenEditCategory(false);
    setEditCategory("");
  };

  console.log(value);

  return (
    <div className=" absolute flex gap-[50px] w-[80vw] pt-[70px] top-[80px] right-0">
      <div className="">
        <form>
          <div className="bg-[white] w-[350px] flex flex-col gap-[20px] justify-center px-[10px] rounded-[10px] py-[20px]">
            <p className="text-[30px] pb-[30px]">Add Category</p>
            <p className="border w-[100%] rounded-[10px] py-[10px]">
              <input
                placeholder="product-category"
                onChange={handleChange}
                name="name"
                className="outline-none w-[100%] p-[10px] "
              />
            </p>
            {loading ? (
              <Spinner />
            ) : (
              <button
                onClick={categoryHandler}
                className="border py-[7px] rounded-[5px] bg-[grey]"
              >
                Add Category
              </button>
            )}
          </div>
        </form>
      </div>

      <div className="border w-[600px] bg-[white]">
        <p className="text-center text-[25px] pt-[20px]">All Categories</p>
        {names
          ? names.map((catList, id) => (
              <ul key={id} className="list-disc text-[20px] pl-[20px]">
                <li className="mb-[30px]">
                  {catList.name}
                  {openEditCategory && categoryId === catList._id && (
                    <div>
                      <input
                        type="text"
                        name="editCategory"
                        value={editCategory}
                        onChange={(e) => setEditCategory(e.target.value)}
                        className="border outline-none"
                      />
                      {loadingUpdate ? (
                        <span>Loading...</span>
                      ) : (
                        <button
                          className="border bg-[green] text-[white] "
                          onClick={() => updateHandler(catList._id)}
                        >
                          Save
                        </button>
                      )}

                      <button
                        className="bg-[red] border text-[white]"
                        onClick={() => canceUpdateHandler()}
                      >
                        cancel
                      </button>
                    </div>
                  )}

                  {!openEditCategory && (
                    <button
                      onClick={() => toggleEditHandler(catList._id)}
                      className=" p-[4px] bg-[green] text-white rounded-[4px] text-[18px] ml-[40px] mr-[10px]"
                    >
                      Update
                    </button>
                  )}
                  {loadingDelete && categoryId === catList._id ? (
                    <Spinner />
                  ) : (
                    <button
                      onClick={() => deleteHandler(catList._id)}
                      className=" p-[4px] bg-[green] text-white rounded-[4px] text-[18px]"
                    >
                      Delete
                    </button>
                  )}
                </li>
              </ul>
            ))
          : ""}
      </div>
    </div>
  );
};

export default AdminCat;

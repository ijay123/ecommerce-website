import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../redux/action/user";
import { useDispatch } from "react-redux";

const AdminNav = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout())
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        console.error("Logout failed", error);
        // Handle any errors or fallback actions here
      });
  };

  return (
    <div className="w-[100%] z-[50] bg-white flex justify-center gap-[100px] py-[20px] ">
      <Link to={"/category"} className="text-[17px] text-[#514f4f]">
        Category
      </Link>
      <Link to={"/createProducts"} className="text-[17px]  text-[#514f4f]">
        Create Products
      </Link>
      <Link
        to={"/products"}
        onClick={handleLogout}
        className="text-[17px]  text-[red]"
      >
        Logout
      </Link>
    </div>
  );
};

export default AdminNav;

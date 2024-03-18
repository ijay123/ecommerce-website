import React from "react";
import AdminNav from "./AdminNav";
import AdminFooter from "./AdminFooter";
import Dashboard from "./Dashboard";

const AdminLayout = ({ children }) => {
  return (
    <div className="">
      <div className="fixed">
        <AdminNav />
        <Dashboard />
      </div>

      <div>{children}</div>
      <div>
        <AdminFooter />
      </div>
    </div>
  );
};

export default AdminLayout;

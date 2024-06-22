import React, { ReactNode } from "react";

const AdminProductsPage = ({ children }: { children: ReactNode }) => {
  return <h1 className="text-4xl mb-4">{children}</h1>;
};

export default AdminProductsPage;

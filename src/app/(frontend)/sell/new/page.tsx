// import PageHeader from "../../_components/AdminProductsPage";
import { PageHeader } from "@/app/admin/_components/PageHeader";
import { ProductForm } from "../_components/ProductForm";

const NewProductPage = () => {
  return (
    <div>
      <PageHeader>Sell Your Product</PageHeader>
      <ProductForm />
    </div>
  );
};

export default NewProductPage;

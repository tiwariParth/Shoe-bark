import PageHeader from "../../_components/AdminProductsPage";
import { ProductForm } from "../_components/ProductForm";

const NewProductPage = () => {
  return (
    <div>
      <PageHeader>Add Product</PageHeader>
      <ProductForm />
    </div>
  );
};

export default NewProductPage;

import { PageHeader } from "@/app/admin/_components/PageHeader";
import { ProductForm } from "./_components/ProductForm";

export default function AdminProductsPage() {
  return (
    <>
      <div className="flex justify-between items-center gap-4">
        <PageHeader>Products</PageHeader>
      </div>
      <ProductForm />
    </>
  );
}
